import React from 'react';
import { Code, Layers, Rocket, CheckCircle } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Code,
      title: "Open-source friendly",
      description: "Code ouvert, transparence totale et contribution communautaire encouragée"
    },
    {
      icon: Layers,
      title: "Architecture modulaire & évolutive",
      description: "Système flexible qui s'adapte et grandit avec vos besoins"
    },
    {
      icon: Rocket,
      title: "Préparé pour l'avenir",
      description: "Caméras, scènes complexes, reconnaissance vocale avancée, IA embarquée"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Avantages Startup</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir XENON ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche innovante qui combine l'agilité d'une startup avec la robustesse d'une technologie de pointe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez l'Innovation
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            XENON n'est pas juste un produit, c'est une vision de l'avenir de la maison connectée. 
            Ensemble, créons un écosystème domotique plus humain, plus sûr, plus intelligent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Rejoindre l'aventure
            </a>
            <a 
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              Tester XENON
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;