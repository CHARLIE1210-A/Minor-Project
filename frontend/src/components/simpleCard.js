import React from 'react'
import { Link } from 'react-router-dom'

function SimpleCard(props) {
    return (
        <div>
            <Link to={props.link}>
                <div className="max-w-96  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img src={props.isrc} className="w-12 h-12 text-gray-500 dark:text-gray-400 mx-auto" alt={props.ialt} />
                </div>
                <div class="items-center justify-center space-y-4 my-2 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <div class="text-center">
                        <div class="-mt-1 font-sans text-sm tracking-wide font-semibold">{props.name}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SimpleCard
