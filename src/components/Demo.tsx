import React from 'react';
import { Mic, Brain, Wifi, Lightbulb, ArrowRight } from 'lucide-react';

const Demo = () => {
  const steps = [
    {
      icon: Mic,
      title: "Voix",
      description: "\"Allume la lumière du salon\"",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "IA Locale",
      description: "Analyse et compréhension instantanée",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Wifi,
      title: "Commande MQTT",
      description: "Signal sécurisé vers l'appareil",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Appareil Connecté",
      description: "La lampe IKEA s'allume immédiatement",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold">Comment ça marche</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Démo en Temps Réel
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez comment XENON transforme une simple commande vocale en action instantanée, le tout en préservant votre confidentialité.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Exemple Concret</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-blue-200">"Allume la lumière du salon"</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-purple-400 transform rotate-90 md:rotate-0" />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-orange-200">Lampe IKEA allumée instantanément</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;