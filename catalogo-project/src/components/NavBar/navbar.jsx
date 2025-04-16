import React, { useState, useEffect } from "react";
import { FaPlay, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Detecta quando o usuário rola a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
    setShowModal(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-semibold">
            <span className="text-white">Bare</span>
            <span className="text-purple-600">Movie</span>
          </h1>
        </div>

        <nav className="ml-auto">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-white hover:text-purple-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/series"
                className="text-white hover:text-purple-600 transition"
              >
                Séries
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-6 relative">
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className="text-2xl text-white hover:text-purple-600 transition focus:outline-none cursor-pointer"
          >
            <FaUserCircle />
          </button>

          {showModal && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-md">
              <ul className="text-sm">
                <li>
                  <button
                    onClick={handleProfileClick}
                    className="block w-full text-left text-purple-700 px-4 py-2 hover:bg-purple-700 hover:text-white transition rounded-t-md cursor-pointer"
                  >
                    Ver Perfis
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Você saiu!")}
                    className="block w-full text-left text-purple-700 px-4 py-2 hover:bg-purple-700 hover:text-white transition rounded-b-md cursor-pointer"
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
