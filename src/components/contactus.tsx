import React from 'react'

function Contactus() {
  return (
    <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 py-2">
                <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1 border-black "><input  type="text"  className="border-black w-full rounded-md py-3 px-4"/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400">Email</label>
                    <div className="mt-1"><input type="email" className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-400">Message</label>
                    <div className="mt-1">
                        <textarea className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"></textarea>
                    </div>
                </div>
                <div className="flex justify-end sm:col-span-2">
                    <button type="submit" className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring text-sm bg-blue-500 disabled:cursor-not-allowed">
                        <span className='text-white'>Send Message</span>
                    </button>
                </div>
            </form>
        </div>
  )
}

export default Contactus
