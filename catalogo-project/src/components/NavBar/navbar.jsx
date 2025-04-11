import React from "react"

const NavBar = () => {
  return(
    <header className="bg-black text-white">
      <div className="p-2 flex items-center justify-between bg-black/70">
        <h1 className="text-2xl font-bold">Bare <span className="text-purple-600 font-inter">Movie</span></h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Series</li>
            <li className="cursor-pointer">Movies</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;