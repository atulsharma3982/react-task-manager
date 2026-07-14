import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-6 md:px-16 bg-emerald-700 h-12 items-center text-white w-full'>
            <div className="logo font-bold text-xl">
                Tasking
            </div>
            <ul className='flex gap-4 cursor-pointer'>
                <li>Home</li>
                <li>Tasks</li>
                <li>Profile</li>
            </ul>
        </nav>
    )
}

export default Navbar
