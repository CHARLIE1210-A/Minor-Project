import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/footer';
import Section from '../components/section';
import Navbar from '../components/navbar';
import image5 from '../images/image5.jpg'


function MovieRec() {
    const [movie, setMovie] = useState('');
    const [movieData, setmovieData] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [randomImageUrl, setRandomImageUrl] = useState('');

    const handleMovieRecommendation = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('http://127.0.0.1:5000/recommend_movies', {
                user_input: movie
            });
            setRecommendedMovies(response.data.recommended_movies); // Access response.data.recommended_movies
            console.log(response.data.recommended_movies);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const accessKey = '2CixNs7y0kND3aqqixcf9JENPsjxuQJKFkpynrN5I4w'; 
        // Fetch a random photo from Unsplash
        fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.urls.regular;
                setRandomImageUrl(imageUrl);
                // console.log(imageUrl);
            })
            .catch(error => console.error('Error fetching random image:', error));
    }, []); 


    // Fetch music data from the API endpoint
    useEffect(() => {
        axios.get('http://localhost:5000/api/movie_data')
            .then(response => {
                if (response.data && Array.isArray(response.data.movie_names)) {
                    setmovieData(response.data.movie_names);
                    console.log(response.data.movie_names);
                } else {
                    console.error('Unexpected response format:', response.data);
                }

            })
            .catch(error => {
                console.error('Error fetching music data:', error);
            });
    }, []);

    return (
        <div className="md:container mx-auto px-2">
            <Navbar link='#getMovie' />
            <Section
                htitle='Movie Recommender '
                para="A movie recommendation system is a software tool that uses algorithms and machine learning to suggest movies to users based on their preferences. It analyzes data points like a user's previous movie choices and ratings to generate personalized recommendations."
                isrc='https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                link='https://www.freecodecamp.org/news/how-to-build-a-movie-recommendation-system-based-on-collaborative-filtering/#:~:text=It%20involves%20a%20large%20spreadsheet,find%20patterns%2C%20and%20generate%20recommendations.'
                ihref='#'
            />
            {/* Search */}
            <div id='getMovie' className='relative my-6'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <form onSubmit={handleMovieRecommendation}>
                    <input
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        list='MovieList'
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        placeholder="Enter movie name . . "
                    />
                    <datalist id="MovieList">
                        {movieData.map((name, index) => (
                            <option key={index} value={name} />
                        ))}
                    </datalist>
                    <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Get Recommendations</button>
                </form>
            </div>
            {/* Card for rendering */}
            <div>
                <h1 className="mb-2 text-2xl font-bold tracking-loose text-gray-900 dark:text-white">Recommended Movies:</h1>
                {recommendedMovies.length > 0 && (
                    <div className="flex flex-wrap justify-evenly gap-4 p-4">
                        {recommendedMovies.map((movie, index) => (
                            <li className='list-none' key={index}>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={randomImageUrl} alt="" />
                                        {/* <img className="rounded-t-lg" src={movie[2]} alt={movie[0]}  /> */}
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie} </h5>
                                        </a>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MovieRec;
