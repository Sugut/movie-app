import React from 'react'

export const Navbar = () => {
  return (
    <div  className="py-4 px-6 text-sm font-medium">
        <ul className="flex space-x-3">
            <li><a href='#home'>Home</a></li>
            <li><a href='#home'>About</a></li>
            <li><a href='#home'>Genre</a></li>
            <li><a href='#home'>TopIMDB</a></li>
        </ul>
    </div>
  )
}
