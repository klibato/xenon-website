import React from 'react';
import { Users, Lightbulb, Cpu, Heart } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Notre Équipe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Startup Spirit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée d'IA et d'IoT qui veut rendre la maison plus humaine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Innovation & Passion
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              XENON est née de la rencontre entre des étudiants passionnés de technologie et une vision claire : 
              démocratiser l'intelligence artificielle dans nos foyers. Notre équipe multidisciplinaire combine 
              expertise technique et approche humaine pour créer des solutions qui changent vraiment la vie.
            </p>
            <div className="flex items-start space-x-4">
              <Heart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                Nous croyons que la technologie doit servir l'humain, pas l'inverse. 
                C'est cette philosophie qui guide chaque décision, chaque ligne de code, chaque fonctionnalité.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center">
              <Cpu className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">IA & Machine Learning</h4>
              <p className="text-sm text-blue-100">Expertise en deep learning et traitement du langage naturel</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white text-center">
              <Lightbulb className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">IoT & Domotique</h4>
              <p className="text-sm text-purple-100">Maîtrise des protocoles et architectures connectées</p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white text-center">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">UX & Design</h4>
              <p className="text-sm text-indigo-100">Interface intuitive et expérience utilisateur optimale</p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 text-white text-center">
              <Heart className="w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Vision Produit</h4>
              <p className="text-sm text-teal-100">Stratégie et développement orientés utilisateur final</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">
            Nous Recrutons !
          </h4>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Passionné(e) par l'IA, l'IoT ou l'innovation ? Rejoignez une équipe qui repense l'avenir de la maison connectée. 
            Nous cherchons des talents motivés pour révolutionner la domotique.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;