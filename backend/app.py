from flask import Flask,render_template,request,jsonify
import pickle
import numpy as np
from flask_cors import CORS
from datetime import datetime
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy


popularity_df = pickle.load(open('popularity.pkl','rb'))
pt = pickle.load(open('pt.pkl','rb'))
books = pickle.load(open('books.pkl','rb'))
similarity_scores = pickle.load(open('similarity_scores.pkl','rb'))

music_df = pickle.load(open('music.pkl', 'rb'))
similarity_music = pickle.load(open('similarity_music.pkl', 'rb'))

new_movies = pickle.load(open('new_movies.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))

# Initialize Spotify client credentials manager
client_id='6fe4df013710494998490f44538cc49d'
client_secret='8418a5bcc47e48b9bd50f6ffcf54030a'
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

app = Flask(__name__)
CORS(app)
 
@app.route('/Top50Books')
def get_books():
    book_data = {
    "book_name": popularity_df['Book-Title'].tolist(),
    "author": popularity_df['Book-Author'].tolist(),
    "image": popularity_df['Image-URL-M'].tolist(),
    "votes": popularity_df['Num_Ratings'].tolist(),
    "rating": popularity_df['Avg_Ratings'].tolist()
}
    return jsonify(book_data)

@app.route('/welcome')
def welcome():
    # Your index route logic for rendering templates or sending data to the frontend
    return "Welcome to the book recommendation system!"


# recommend books
@app.route('/recommend_books',methods=['POST'])
def recommend():
    user_input = request.json.get('user_input')
    
    index = np.where(pt.index == user_input)[0][0]
    distance = similarity_scores[index]
    similar_books = sorted(list(enumerate(distance)),key=lambda x:x[1],reverse=True)[1:7]
    
    data = []
    for i in similar_books:
        item = []
        temp_df = books[books['Book-Title'] == pt.index[i[0]]]
        
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-L'].values))
        
        data.append(item)
    
    # return render_template('recommend.html',data=data)
    # print(data)
    return jsonify(data=data)

# get book-df data
@app.route('/api/book_data', methods=['GET'])
def get_book_data():
    # Convert book_df to JSON and send it as the response

    # Convert book_df to a list of track names
    book_titles = books['Book-Title'].unique().tolist()
    # book_names = list(book_titles)
    
    # Limit the list to 10000 books
    book_titles = book_titles[:10000]
    
    # Send the list of book names as the response
    return jsonify({"book_names": book_titles})


# recommend movie
@app.route('/recommend_movies', methods=['POST'])
def recommend_movie():
    user_input = request.json.get('user_input')
    movie_index = new_movies[new_movies['title'] == user_input].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:7]

    recommended_movies = []  # Initialize the recommended movies list outside the loop

    for i in movies_list:
        recommended_movies.append(new_movies.iloc[i[0]].title)  # Append each movie title to the list

    return jsonify({'recommended_movies': recommended_movies})

@app.route('/api/movie_data', methods=['GET'])
def get_movie_data():
    # Convert movie_df to JSON and send it as the response

    # Convert movie_df to a list of track names
    movie_names = new_movies['title'].unique().tolist()
    # book_names = list(book_titles)
    
    # Send the list of movie names as the response
    return jsonify({"movie_names": movie_names})



# recommend music
@app.route('/recommend_music', methods=['POST'])
# @app.route('/recommend_music')
def recommend_music():
    data = request.get_json()
    song = data.get('song')
    # song = 'Phir Wahi'
    return jsonify(fetch_recommendations(song))

def get_song_album_cover_url(song_name, artist_name):
    search_query = f"track:{song_name} artist:{artist_name}"
    results = sp.search(q=search_query, type="track")

    if results and results["tracks"]["items"]:
        track = results["tracks"]["items"][0]
        album_cover_url = track["album"]["images"][0]["url"]
        return album_cover_url
    else:
        return "https://i.postimg.cc/0QNxYz4V/social.png"

def fetch_recommendations(song):
    input_song_index = music_df[music_df['Track Name'] == song].index[0]
    similarity_score = list(enumerate(similarity_music[input_song_index]))
    similarity_score = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    # recommended_music_names = []
    # recommended_poster = []
    recommended_movies = []
    for i in similarity_score[1:7]:
        track = music_df["Track Name"].iloc[i[0]]
        artists = music_df["Artists"].iloc[i[0]]
        # recommended_poster.append(get_song_album_cover_url(track, artists))
        # recommended_music_names.append(music_df['Track Name'].iloc[i[0]])
        movie_image = get_song_album_cover_url(track, artists)
        recommended_movies.append({
            'movie_name': track,
            'movie_image': movie_image
        })

    return recommended_movies

# get music-df data
@app.route('/api/music_data', methods=['GET'])
def get_music_data():
    # Convert music_df to JSON and send it as the response

    # Convert music_df to a list of track names
    track_names = music_df['Track Name'].tolist()
    
    # Send the list of track names as the response
    return jsonify({"track_names": track_names})



if __name__ == '__main__':
    app.run(debug=True)