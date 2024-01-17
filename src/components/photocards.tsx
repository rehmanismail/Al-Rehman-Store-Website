import React from 'react'

function AboutCards() {
  return (
<div className="relative flex min-h-screen flex-col overflow-hidden bg-gray- py-6 sm:py-12 justify-center mx-10">
    <h2 className="mb-4 font-bold text-3xl text-black text-center">Al-Rehman Store Products</h2>
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <img src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12642378-0-M.jpg" alt=""/>
            <h1 className="text-1xl font-bold text-center">Sooper Biscuits</h1>
      </div>
      
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <img src="https://metro-b2c.s3.amazonaws.com/Products/1692957387188" alt=""/>
            <h1 className="text-1xl font-bold text-center">Lipton</h1>
      </div>

      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <img src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12633530-0-M.jpg" alt=""/>
            <h1 className="text-1xl font-bold text-center">Dettol</h1>
      </div>

      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <img src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12620024-0-M.jpg" alt=""/>
            <h1 className="text-1xl font-bold text-center">Whole Chicken without Neck and Giblets</h1>
      </div>

      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <img src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12620371-0-M.jpg" alt=""/>
            <h1 className="text-1xl font-bold text-center">Rafhan Corn Flour</h1>
      </div>

      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <img src="https://metro-b2c.s3.ap-southeast-1.amazonaws.com/Products/1699858569204" alt=""/>
            <h1 className="text-1xl font-bold text-center">Zahedi Dates</h1>
      </div>
      
    </div>
  </div>
  )
}

export default AboutCards;
