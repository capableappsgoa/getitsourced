import React from 'react'

export const ProfileCard = () => {
    return (
        <div className='w-full h-80'>
            <div className='w-full h-auto bg-primary-700 relative'>
                <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg translate-y-14">
                    <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                            <img className="h-16 w-16 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                            <div className="py-2">
                                <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                                <div className="inline-flex  text-sm text-gray-700 dark:text-gray-300 items-center">
                                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path className=""
                                            d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                    </svg>
                                    New York, NY
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 px-2">
                            <button
                                className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-3 py-1"
                                onClick={() => console.log('Follow button clicked')}>Follow</button>
                            <button
                                className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2"
                                onClick={() => console.log('Message button clicked')}>Message</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
