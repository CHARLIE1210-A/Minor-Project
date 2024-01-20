import React from 'react'

function Read(props) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
      <div className="p-10 bg-white rounded-lg md:p-24 dark:bg-gray-800" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-8 text-3xl font-extrabold text-center leading-relaxed md:leading-loose tracking-tight text-gray-900 dark:text-white">{props.h2title}</h2>
            <p className="mb-3 text-xl text-gray-500 leading-relaxed dark:text-gray-400 text-justify">{props.para}</p>
            <p className="mb-3 text-xl text-gray-500 leading-relaxed dark:text-gray-400 text-justify">{props.para1}</p>
            <h3 className="mb-6 mt-12  text-2xl font-extrabold text-center leading-loose  tracking-tight text-gray-900 dark:text-white">{props.h3title}</h3>
            <p className="mb-3 text-xl text-gray-500 leading-relaxed dark:text-gray-400 text-justify">{props.para3}</p>
            <p className="mb-3 text-xl text-gray-500 leading-relaxed dark:text-gray-400 text-justify">
            <span className='font-extrabold tracking-tight text-gray-900 dark:text-white'>{props.span1}</span>
            {props.para4}</p>
            <p className="mb-3 text-xl text-gray-500 leading-relaxed dark:text-gray-400 text-justify"><span className='font-extrabold tracking-tight text-gray-900 dark:text-white'>{props.span2}</span>{props.para4} </p>
            <p className="mb-3 text-xl text-gray-500 leading-relaxed dark:text-gray-400 text-justify"><span className='font-extrabold tracking-tight text-gray-900 dark:text-white'>{props.span3}</span>{props.para5} </p>

            
        </div>
    </div>
  )
}

export default Read
