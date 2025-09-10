import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <a href="#vision" onClick={onClick} className="text-gray-700 hover:text-blue-600 transition-colors">Vision</a>
      <a href="#features" onClick={onClick} className="text-gray-700 hover:text-blue-600 transition-colors">Fonctionnalités</a>
      <a href="#demo" onClick={onClick} className="text-gray-700 hover:text-blue-600 transition-colors">Démo</a>
      <a href="#team" onClick={onClick} className="text-gray-700 hover:text-blue-600 transition-colors">Équipe</a>
      <a href="#contact" onClick={onClick} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
        Contact
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">XENON</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Ouvrir le menu"
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
