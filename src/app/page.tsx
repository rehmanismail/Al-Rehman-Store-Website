import React from 'react'
import Cards from './cards/page'
import Products from './otherProducts/page'

function Homepage() {
  return (

    <><div
      className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-18 lg:mt-18 lg:px-8 xl:mt-22 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Al-Rehman Store</span>
          <br />
          <span className="block text-orange-600 xl:inline">Best Quality Products</span>
        </h1>
        <p
          className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          You must buy things from our store.Thanks!
        </p>
        {/* <!-- Button Section --> */}
        <div className="mt-4 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow mx-20">
            <a href="#"
              className="w-full flex items-center justify-center px-2 py-2 bg-orange-500 border border-transparent text-base font-medium rounded-md text-white hover:bg-blue-400">
              Shop now
            </a>
          </div>
        </div>
        {/* <!-- End of Button Section --> */}
      </div>

      {/* <!--   Image Section     --> */}
      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://vertikal.com.pk/cdn/shop/files/Winter_collection_3_0449c6c9-61eb-4ae3-b2d8-8d6791201b7f.png?v=1699308617&width=3840" alt="" />
      </div>
      {/* <!--   End of Image Section     --> */}
    </div>
    
    {/* <!--   Products Section     --> */}
    <Cards/>
    <Products/>
     </>
  )
}

export default Homepage
