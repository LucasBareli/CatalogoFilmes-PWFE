import React from "react";
import { Search, Bell, User } from "lucide-react";

const Header = () => {
    return(
        <header className="bg-[#006A71]">
            <h1 className="bg-green-50">Bare <span>Movies</span></h1>
            <nav>
              <a href="#">Home</a>
              <a href="#">My List</a>
              <a href="#">Movies</a>
              <a href="#">New Releases</a>
            </nav>
            <div className="nav-icons">
              <Search className="icon" />
              <Bell className="icon" />
              <User className="icon" />
            </div>
          </header>
    )
}

export default Header