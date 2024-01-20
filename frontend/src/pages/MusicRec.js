import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/footer';
import Section from '../components/section';
import Navbar from '../components/navbar';

function MusicRec() {
    const [song, setSong] = useState('');
    const [musicData, setMusicData] = useState([]);
    const [recommendedSongs, setRecommendations] = useState([]);

    const handleRecommendation = async (e) => {
        try {
            const response = await axios.post('http://localhost:5000/recommend_music', { song });

            if (response.status === 200) {
                setRecommendations(response.data);
            } else {
                throw new Error('Failed to fetch recommendedSongs');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Initially fetch recommendedSongs when component mounts
        handleRecommendation();
    }, []);

    // Fetch music data from the API endpoint
    useEffect(() => {
        axios.get('http://localhost:5000/api/music_data')
            .then(response => {
                // setMusicData(response.data);
                // console.log(response.data);
                // Check if the response.data is an array or can be converted to an array
                if (response.data && Array.isArray(response.data.track_names)) {
                    setMusicData(response.data.track_names);
                    console.log(response.data.track_names);
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
            <Navbar link='#getMusic' />
            <Section
                htitle='Song Recommender '
                para="A music recommendation system leverages advanced algorithms to analyze user preferences and musical attributes, offering tailored song suggestions.These systems empower users to discover new music based on their listening history, genre preferences, artists they enjoy, and trends in the music landscape, creating a personalized and engaging musical experience"
                isrc='https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                link='https://www.enjoyalgorithms.com/blog/music-recommendation-system-using-ml'
                ihref='#'
            />
            {/* Search */}
            <div id='getMovie' className='relative my-6'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    list="musicList"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    placeholder="Enter song name . . "
                />
                <datalist id="musicList">
                    {musicData.map((track, index) => (
                        <option key={index} value={track} />
                    ))}
                </datalist>
                
                <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRecommendation}>Get Recommendations</button>
            </div>
            {/* Card for rendering */}
            <div>
                <h1 className="mb-2 text-2xl font-bold tracking-loose text-gray-900 dark:text-white">Recommended Music:</h1>
                {recommendedSongs.length > 0 && (
                    <div className="flex flex-wrap justify-evenly gap-4 p-4">
                        {recommendedSongs.map((movie, index) => (
                            <li className='list-none' key={index}>
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={movie.movie_image} alt={movie.movie_name} />
                                        {/* <img className="rounded-t-lg" src={movie[2]} alt={movie[0]}  /> */}
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.movie_name} </h5>
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

export default MusicRec
