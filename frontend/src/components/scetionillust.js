import React from 'react'

function Sectionillust() {
    return (
        <div className='container relative w-full max-w-xl m-auto px-4'>
            <div className='grid grid-rows-4 grid-flow-col gap-4'>
                <div className='relative w-full text-center   px-4 lg:columns-7'>
                    <div className='flex-wrap flex items-center'>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Humans are inherently curious. In fact, curiosity is linked to the evolution of humankind. For instance, according to famous historian Yuval Noah Harari in his bestseller book "Sapiens", our language skills evolved as a way of gossiping...</p>
                    </div>
                </div>
                <div className='relative w-full columns-1 lg:columns-5 px-4'>
                    <img class="h-auto max-w-full " src="https://cdn.pixabay.com/photo/2023/10/24/16/19/evening-sky-8338559_1280.jpg" width="677" height="481" alt="" />
                </div>
                {/* <div className=''></div> */}
            </div>
        </div>
    )
}

export default Sectionillust
