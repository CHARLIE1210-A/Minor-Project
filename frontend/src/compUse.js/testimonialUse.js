import React from 'react'
import Testimonial from '../components/testimonial'
import cinema from '../icons/cinema.png'
// qpara , qhead ,isrc ,ialt ,name ,designation
function TestimonialUse() {
  return (
    <div id='team' className="grid grid-cols-2 my-8 py-2 text-center border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12  md:grid-cols-3 bg-white dark:bg-gray-800">

      <div class="col-span-full mx-2 p-4 mt-4 text-center sm:p-4">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Meet our team</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">We’re a dynamic group of individuals who are passionate about what we do.</p>
      </div>
     
      <Testimonial qpara="Your mind is programmable-if you're not programming your mind,else will program it for you." isrc={cinema} ialt='Cinema' name='Ashutosh Singh' designation='Frontend/Backend'></Testimonial>
      <Testimonial qpara="Dont't worry if it doesn't work right. If everything did, you'd be out of a job." isrc={cinema} ialt='Cinema' name='Shruti Yadav' designation='Research/Paper Work'></Testimonial>
      <Testimonial qpara='We have to stop optimizing for programmers and start optimizing for users.' isrc={cinema} ialt='Cinema' name='Ashutosh Sahu' designation='ML Model Developed'></Testimonial>
      <Testimonial qpara='The function of a good software is to make the complex appear to be simple.' isrc={cinema} ialt='Cinema' name='Anshika Dubey' designation='Frontend'></Testimonial>
      <Testimonial qpara=' Small minds are concerned with the extraordinary, great minds with the ordinary.' isrc={cinema} ialt='Cinema' name='Soumya Agrawal' designation='Research/Paper Work'></Testimonial>
      
    </div>
  )
}

export default TestimonialUse
