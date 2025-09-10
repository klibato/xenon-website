import React from 'react';
import { Zap, Shield, Puzzle, Bot } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Rapidité & Fiabilité",
      description: "Tout en local",
      details: "Traitement instantané des commandes sans latence réseau. Votre maison répond en temps réel à vos besoins."
    },
    {
      icon: Shield,
      title: "Confidentialité Garantie",
      description: "Vos données restent chez vous",
      details: "Aucune donnée personnelle ne quitte votre domicile. XENON respecte votre vie privée par conception."
    },
    {
      icon: Puzzle,
      title: "Compatibilité Universelle",
      description: "Wi-Fi, Zigbee, Bluetooth...",
      details: "Compatible avec tous les standards domotiques existants. Connectez vos appareils sans contraintes."
    },
    {
      icon: Bot,
      title: "Automatisation Intelligente",
      description: "Sans configuration complexe",
      details: "L'IA apprend vos habitudes et automatise votre quotidien de manière intuitive et personnalisée."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-semibold">Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fonctionnalités Avancées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            XENON combine intelligence artificielle locale, sécurité maximale et simplicité d'usage pour révolutionner votre maison connectée.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-blue-600 font-semibold mb-4">
                  {feature.description}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;