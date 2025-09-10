import React from 'react';
import { Home, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const LINKS = {
  twitter: 'https://twitter.com/',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  email: 'mailto:contact@xenon-startup.com',
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand + blurb */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">XENON</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              L’IA domotique modulaire : locale, rapide et simple. Notre mission : rendre
              les maisons vraiment intelligentes, sans sacrifier la confidentialité et la compatibilité universelle.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={LINKS.twitter}
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#vision" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Démo</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Équipe</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Formulaire de contact
                </a>
              </li>
              <li>
                <a href={LINKS.email} className="hover:text-white transition-colors">
                  contact@xenon-startup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 XENON Startup. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions d’utilisation</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
