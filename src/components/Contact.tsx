import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

type SubjectKey = 'demo' | 'investment' | 'partnership' | 'press' | 'career' | 'other';
type Persona = 'Investisseur' | 'Développeur' | 'Journaliste' | 'Utilisateur';

const SUBJECT_LABELS: Record<SubjectKey, string> = {
  demo: "Demander une démo",
  investment: "Opportunité d'investissement",
  partnership: "Partenariat",
  press: "Demande presse",
  career: "Opportunité de carrière",
  other: "Autre",
};

// ⚠️ Définis VITE_WEB3FORMS_KEY dans ton .env (UUID v4)
const WEB3FORMS_ACCESS_KEY = "5107d47b-d779-4a06-a4bc-244b8da36b31"

const uuidV4Regex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '' as SubjectKey | '',
    message: '',
  });
  const [persona, setPersona] = useState<Persona | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sentOk, setSentOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSentOk(false);

    // Champs requis
    if (!formData.name || !formData.email || !formData.subject || !formData.message || !persona) {
      setError("Merci de compléter tous les champs, y compris “Vous êtes…”.");
      return;
    }

    // Clé requise + format UUID
    if (!WEB3FORMS_ACCESS_KEY || !uuidV4Regex.test(WEB3FORMS_ACCESS_KEY)) {
      setError("Clé Web3Forms invalide. Ajoute VITE_WEB3FORMS_KEY (UUID) dans ton .env puis relance Vite.");
      return;
    }

    try {
      setIsSending(true);

      const subjectLabel = SUBJECT_LABELS[formData.subject as SubjectKey] ?? formData.subject;

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[XENON] ${subjectLabel} — ${formData.name} (${persona})`,
          message: formData.message,
          from_name: 'XENON Website',
          persona,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSentOk(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setPersona(null);
      } else {
        setError(data.message || "Une erreur est survenue pendant l’envoi.");
      }
    } catch (err: any) {
      setError(err?.message || "Impossible d’envoyer le message (réseau).");
    } finally {
      setIsSending(false);
    }
  };

  const personaOption = (label: Persona, emoji: string) => {
    const selected = persona === label;
    return (
      <button
        type="button"
        onClick={() => setPersona(label)}
        className={[
          "text-center p-3 rounded-lg border transition-all",
          selected
            ? "bg-white/20 border-white/40 ring-2 ring-white/30"
            : "bg-white/5 border-white/10 hover:bg-white/10"
        ].join(' ')}
        aria-pressed={selected}
      >
        <div className="text-2xl mb-1">{emoji}</div>
        <div className="text-sm font-semibold">{label}</div>
      </button>
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-semibold">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Envie de Collaborer ?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Que vous soyez investisseur, développeur, journaliste ou simplement curieux, 
            nous serions ravis d'échanger avec vous sur l'avenir de la domotique intelligente.
          </p>
        </div>

        {/* Alertes */}
        {sentOk && (
          <div className="max-w-2xl mx-auto mb-6 rounded-xl border border-green-400/40 bg-green-500/10 p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <p className="text-sm text-green-100">
              Message envoyé ✅ On revient vers vous rapidement.
            </p>
          </div>
        )}
        {error && (
          <div className="max-w-2xl mx-auto mb-6 rounded-xl border border-red-400/40 bg-red-500/10 p-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-300" />
            <p className="text-sm text-red-100">{error}</p>
          </div>
        )}
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Colonne infos */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entrons en Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-blue-200">pro.contact.xenon@gmail.com</p>
                    <p className="text-sm text-gray-300 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Téléphone</h4>
                    <p className="text-blue-200">+33 6 63 99 50 97</p>
                    <p className="text-sm text-gray-300 mt-1">Lun-Ven 12h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Adresse</h4>
                    <p className="text-blue-200">
                      ETNA<br />7 Rue Maurice Grandcoing<br />94200 Ivry-sur-Seine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ligne 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              {/* Vous êtes… */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Vous êtes…
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {personaOption('Investisseur', '💼')}
                  {personaOption('Développeur', '👨‍💻')}
                  {personaOption('Journaliste', '📰')}
                  {personaOption('Utilisateur', '🏠')}
                </div>
                <input type="hidden" name="persona" value={persona ?? ''} readOnly aria-hidden="true" />
              </div>
              
              {/* Sujet */}
             <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all"
                  required
                >
                  <option value="">Choisir un sujet</option>
                  <option value="demo">Demander une démo</option>
                  <option value="investment">Opportunité d'investissement</option>
                  <option value="partnership">Partenariat</option>
                  <option value="press">Demande presse</option>
                  <option value="career">Opportunité de carrière</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all resize-none"
                  placeholder="Parlez-nous de votre projet, vos questions ou vos idées..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className={`w-full flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all transform shadow-xl ${
                  isSending
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                }`}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSending ? "Envoi en cours…" : "Envoyer le message"}
              </button>

              <p className="text-xs text-blue-200/80">
                En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour vous recontacter.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
