import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

function Nav() {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl 
            whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 
                    key={key} 
                    onClick={() => router.push(`/?genre=${key}`)}
                    className="last:pr-24 cursor-pointer transition duration-100 transform 
                    hover:scale-125 hover:text-sky-500 active:text-sky-800">
                        {title}
                    </h2>
                ))}
            </div>
        </nav>
    )
}

export default Nav