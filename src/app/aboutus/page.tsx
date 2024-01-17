import React from 'react'
import AboutCards from '@/components/photocards'

function About() {
  return (
    // <!-- component -->
    <div className="py-16 bg-white">  
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src="https://lh3.googleusercontent.com/p/AF1QipMZZy3MUQtZ2UVoczp4qy84Ko8TEWfKz0r7o1oA=w1080-h608-p-no-v0" alt="image" loading="lazy" width="" height=""
              className='rounded-2xl transition duration-300 ease-in-out hover:scale-110'/>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About Us</h2>
              <p className="mt-6 text-gray-600">Al-Rehman Store prides itself on offering a diverse and high-quality selection
                of products that cater to the varied needs and preferences of its customers. From everyday 
                 essentials to specialty items, the store's product range is carefully curated to provide 
                 a comprehensive shopping experience. Here's a glimpse into the various categories 
                 of products available at Al-Rehman Store.</p>
            </div>
          </div>
      </div>
      <AboutCards/>
    </div>
    

  )
}

export default About
