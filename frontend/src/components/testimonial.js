import React from 'react'
// qpara , qhead ,isrc ,ialt ,name ,designation
function Testimonial(props) {
    return (
        // <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <div className=' mt-3 mx-2 p-1'>
            <figure className="flex flex-col items-start justify-center p-5 text-center bg-white border border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <figcaption className="flex  p-2 justify-center items-center ">
                    <img className="rounded-full w-12 h-12" src={props.isrc} alt={props.ialt} />
                    {/* <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>{props.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 ">{props.designation}</div>
                    </div> */}
                    <div class="text-left space-y-0.5 dark:text-white rtl:text-right ms-4">
                        <div class="-mt-1 font-sans text-sm font-semibold">{props.name}</div>
                        <div class="mb-1 text-xs">{props.designation}</div>
                    </div>
                </figcaption>
                <blockquote className="max-w-2xl mx-auto my-4 text-gray-500 lg:mb-4 dark:text-gray-400">
                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{props.qpara}</p>
                </blockquote>
            </figure>
        </div>

    )
}
export default Testimonial
