import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          <p>© {new Date().getFullYear()} BareMovie. Todos os direitos reservados.</p>
        </div>

        <ul className="flex gap-4 text-sm mt-4 md:mt-0">
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contato
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Política de Privacidade
            </a>
          </li>
        </ul>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-purple-700"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-purple-700"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-bareli-384021293/"
            className="transition-colors duration-300 hover:text-purple-700"
            aria-label="Twitter"
          >
            <FaLinkedin  className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};
