import React, { useState,useEffect } from 'react'
import Footer from '../components/footer'
import Section from '../components/section'
import Navbar from '../components/navbar'
import Read from '../components/read'
import image1 from '../images/image1.jpg'
import axios from 'axios'

function BookRec() {

    const [userInput, setUserInput] = useState('');
    const [bookData, setbookData] = useState([]);
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const limitedBookData = bookData.slice(0, 5000);

    const handleRecommendation = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/recommend_books', {
                user_input: userInput
            });

            setRecommendedBooks(response.data.data);

            console.log(response.data.data)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Fetch music data from the API endpoint
    useEffect(() => {
        axios.get('http://localhost:5000/api/book_data')
            .then(response => {
                if (response.data && Array.isArray(response.data.book_names)) {
                    setbookData(response.data.book_names);
                    console.log(response.data.book_names);
                } else {
                    console.error('Unexpected response format:', response.data);
                }

            })
            .catch(error => {
                console.error('Error fetching book data:', error);
            });
    }, []);

    return (
        <div className="md:container mx-auto px-4">
            <Navbar />
            <Section
                htitle='Book Recommender '
                para="A book recommendation system is a type of recommendation system where we have to recommend similar books to the reader based on his interest. The books recommendation system is used by online websites which provide ebooks like google play books, open library, good Read’s, etc."
                isrc='https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                link='https://medium.com/@amitdlmlai/book-recommendation-system-61bf9284f659'
                ihref='#'
            />

            <div className='relative my-6'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    list='BookList'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter book name . . "
                />
                <datalist id="BookList">
                    {limitedBookData.map((name, index) => (
                        <option key={index} value={name} />
                    ))}
                </datalist>
                <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRecommendation}>Get Recommendations</button>

            </div>
            <h1 className="mb-2 text-2xl font-bold tracking-loose text-gray-900 dark:text-white">Recommended Books :</h1>
            {recommendedBooks.length > 0 && (
                <div className="flex flex-wrap justify-evenly gap-4 p-4">
                    {recommendedBooks.map((book, index) => (
                        <li className='list-none' key={index}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
                                <a href="#">
                                    {/* <img className="rounded-t-lg" src={image1} alt="" /> */}
                                    <img className="rounded-t-lg overflow-hidden" src={book[2]} alt={book[0]}  />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Title - {book[0]} </h6>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author - {book[1]} </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    )
}

export default BookRec
