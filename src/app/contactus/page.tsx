import React from 'react'
import Contactus from '@/components/contactus'

function ContactUS() {
  return (
    <div className='flex max-h-screen flex-col items-center py-100'>
      <article className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-70 px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <a className="font-bold text-center" href="#">
                            <span className="absolute inset-0"></span>
                            <h3 className='text-center text-6xl text-yellow-500 mt-3'>Al-Rehman Store</h3>
                            <br />
                            <h3 className='text-center text-3xl text-red-800'>CONTACT US</h3>
                             </a>
                 </div>
            </article>
            <Contactus/>
    </div>
  )
}

export default ContactUS
