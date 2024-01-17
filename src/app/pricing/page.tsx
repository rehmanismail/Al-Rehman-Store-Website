import React from 'react'

function Pricing() {
  return (
    <div className='flex max-h-screen flex-col items-center py-90'>
      <h1 className='text-2xl font-bold font-serif text-center'>Pricing Percentages of Products</h1>
      <p className='text-sm text-center font-medium'>The prices of these products are less and best high quality products.</p>
      <div className="text-center my-10">
          <h1 className="font-bold text-4xl text-blue-500">Pricing Plans</h1>
          <p className="text-light text-blue-400 text-xl mt-3">
            Here are our pricing plans
          </p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 py-10">
    <div className="w-full bg-blue-200 max-w-sm p-4  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out hover:scale-110">
<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<span className="text-5xl font-extrabold tracking-tight">50%Off</span>
<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/2024</span>
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 mx-3">T-Shirts</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Pents</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Dress Shirts</span>
</li>
</ul>
</div>

<div className="w-full max-w-sm p-4 bg-blue-200 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out hover:scale-110">
<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Minimum plan</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<span className="text-5xl font-extrabold tracking-tight">25%Off</span>
<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/2024</span>
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 mx-3">Cosmetics</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Fashions</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Toys</span>
</li>
</ul>
</div>

<div className="w-full max-w-sm p-4 bg-blue-200 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out hover:scale-110">
<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Maximum plan</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<span className="text-5xl font-extrabold tracking-tight">100%Off</span>
<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/2024</span>
</div>
<ul role="list" className="space-y-5 my-7 py-3">
<li className="flex items-center">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 mx-3">Kitchen Products</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Electronic Products</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Health Caring Products</span>
</li>
</ul>
</div>

        </div>
    </div>
  )
}

export default Pricing
