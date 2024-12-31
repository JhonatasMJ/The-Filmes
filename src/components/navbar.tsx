import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="absolute top-0 z-30 left-0 w-full flex justify-center p-4 bg-primary bg-opacity-20">
      <nav className="flex w-full items-center justify-between max-w-7xl">
        <div>
          <Link to="/home" className="flex items-center text-white text-2xl font-bold">
            <span className="bg-secondary py-1 px-2 rounded-md">The</span> Filmes
          </Link>
        </div>

        {/* Itens de navegação à direita */}
        <div className="flex space-x-4">
          <NavLink to="/" className="text-white text-md hover:text-secondary">
            Início
          </NavLink>
          <NavLink to="/" className="text-white text-md hover:text-secondary">
            Favoritos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
