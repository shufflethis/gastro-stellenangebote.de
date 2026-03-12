// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { JobBoard } from '../components/JobBoard';
import { ContentSection } from '../components/ContentSection';
import { FAQ } from '../components/FAQ';
import { INDUSTRY_INFO, JOB_ROLES_INFO, FOR_EMPLOYERS, CAREER_PATHS } from '../constants';
import { GeoCities } from '../components/geo/GeoCities';
import { Utensils, Menu, X, Instagram, Linkedin, Facebook, GraduationCap, TrendingUp, Globe, Award } from 'lucide-react';

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-brand-500 p-2 rounded-lg mr-3">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
                Gastro<span className="text-brand-600">Stellen</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#jobs" className="text-gray-600 hover:text-brand-600 font-medium transition">Jobs</a>
              <a href="#branche" className="text-gray-600 hover:text-brand-600 font-medium transition">Branche</a>
              <a href="#arbeitgeber" className="text-gray-600 hover:text-brand-600 font-medium transition">Für Arbeitgeber</a>
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Job inserieren
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-2">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#jobs" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">Jobs finden</a>
              <a href="#branche" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">Über die Branche</a>
              <a href="#arbeitgeber" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">Für Arbeitgeber</a>
              <div className="pt-4">
                 <button className="w-full bg-brand-600 text-white px-3 py-3 rounded-md font-medium shadow-md">
                  Kostenlos registrieren
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        {/* Job Search Section */}
        <JobBoard />

        {/* Content Sections (SEO Optimized) */}
        <ContentSection data={INDUSTRY_INFO} bgGray={true} />
        <ContentSection data={JOB_ROLES_INFO} reversed={true} />
        
        {/* Career Paths Visual */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Dein Weg nach oben</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Karriere in der Gastronomie ist kein Sprint, sondern ein Marathon. Hier sind typische Entwicklungswege.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {CAREER_PATHS.map((path, idx) => (
                <div key={idx} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-brand-500 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{path.title}</h3>
                    <span className="px-3 py-1 bg-brand-900 text-brand-300 text-xs rounded-full uppercase tracking-widest font-semibold border border-brand-700">
                      {path.level}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{path.description}</p>
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase">Voraussetzungen:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {path.requirements.map((req, rIdx) => (
                        <span key={rIdx} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContentSection data={FOR_EMPLOYERS} />

        {/* Geo SEO: German Cities */}
        <GeoCities />

        {/* Career Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Karriere in der Gastronomie</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Die Gastronomie bietet vielfaeltige Karrierechancen -- von der Ausbildung bis zur Fuehrungsposition.
                Hier findest Du wichtige Informationen fuer Deinen beruflichen Weg.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ausbildung</h3>
                <p className="text-sm text-gray-600">
                  Die klassische Ausbildung zur Fachkraft fuer Gastronomie dauert 2 Jahre, zum Koch oder zur Koeachin 3 Jahre.
                  Zahlreiche Betriebe bilden aus und bieten exzellente Uebernahmechancen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Gehalt & Perspektiven</h3>
                <p className="text-sm text-gray-600">
                  Einstiegsgehaelter liegen bei 2.200-2.800 EUR brutto. Mit Erfahrung und Verantwortung steigen die Gehaelter deutlich.
                  Kuechenchefs verdienen 3.500-6.000 EUR und mehr.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Internationale Chancen</h3>
                <p className="text-sm text-gray-600">
                  Gastro-Fachkraefte sind weltweit gefragt. Ob Kreuzfahrtschiff, Alpenresort oder Strandhotel --
                  die Branche oeffnet Tueren ueberall auf der Welt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Weiterbildung</h3>
                <p className="text-sm text-gray-600">
                  Vom Meisterbrief ueber den Fachwirt im Gastgewerbe bis zum Studium im Hotelmanagement --
                  die Weiterbildungsmoeglichkeiten sind vielfaeltig und foerderungsfaehig.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA Section */}
        <section className="py-24 bg-brand-600 relative overflow-hidden">
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-500 rounded-full opacity-50 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-700 rounded-full opacity-50 blur-3xl"></div>
           
           <div className="relative max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
               Bereit für den nächsten Gang?
             </h2>
             <p className="text-brand-100 text-xl mb-10 max-w-2xl mx-auto">
               Egal ob Du Deine Karriere starten willst oder das perfekte Team suchst. Wir bringen zusammen, was zusammengehört.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-white text-brand-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
                 Jetzt Job finden
               </button>
               <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
                 Für Arbeitgeber
               </button>
             </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center text-white mb-4">
                <Utensils className="h-6 w-6 mr-2 text-brand-500" />
                <span className="font-serif font-bold text-xl">GastroStellen</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Die moderne Plattform für Gastronomie-Jobs. Verbindet Leidenschaft mit Professionalität.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Linkedin className="w-5 h-5"/></a>
                <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Facebook className="w-5 h-5"/></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Bewerber</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-500 transition">Jobsuche</a></li>
                <li><a href="#" className="hover:text-brand-500 transition">Karriere-Guide</a></li>
                <li><a href="#" className="hover:text-brand-500 transition">Lebenslauf-Check</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Arbeitgeber</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-500 transition">Inserat aufgeben</a></li>
                <li><a href="#" className="hover:text-brand-500 transition">Preise</a></li>
                <li><a href="#" className="hover:text-brand-500 transition">Recruiting Tipps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/impressum" className="hover:text-blue-400 transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-brand-500 transition">Datenschutz</Link></li>
                <li><Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
                <li><Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link></li>
                <li><a href="#" className="hover:text-brand-500 transition">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Gastro Stellenangebote GmbH. Alle Rechte vorbehalten.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ and React.</p>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
</div>
  );
}

export default Home;