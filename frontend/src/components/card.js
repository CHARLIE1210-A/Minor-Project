import React from 'react'
import image1 from '../images/image1.jpg'

function Card() {
  const cards = Array.from({ length: 10 }, (_, index) => index + 1);

  return (

    <div className="flex flex-wrap justify-evenly gap-4 p-4">
      {cards.map((card) => (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
        <a href="#">
          <img className="rounded-t-lg" src={image1} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title - </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author - </p>

        </div>
      </div>
      ))}
    </div>



  )
}

export default Card
