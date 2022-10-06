import React from 'react'

export const Navbar = () => {
  return (
    <div  className="py-4 px-6 text-sm font-medium">
        <ul className="flex space-x-3">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Genre</a></li>
            <li><a href='#'>TopIMDB</a></li>
        </ul>
    </div>
  )
}
