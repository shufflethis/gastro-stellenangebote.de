import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Busy Restaurant Kitchen" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
          Entdecke Deine Zukunft <br />
          <span className="text-brand-500">in der Gastronomie</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl font-light">
          Von der Sterneküche bis zum Szene-Café. Finde Jobs, die zu Deiner Leidenschaft passen. 
          Die Nr. 1 Jobbörse für Hotellerie & Gastronomie in D-A-CH.
        </p>

        {/* Search Bar */}
        <div className="bg-white p-2 rounded-lg shadow-xl max-w-3xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-md">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Jobtitel, Schlagwort (z.B. Sous Chef)" 
              className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-500"
            />
          </div>
          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-md">
            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Stadt oder Region" 
              className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-500"
            />
          </div>
          <button className="bg-brand-600 hover:bg-brand-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200">
            Job finden
          </button>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-300">
          <span>Beliebt:</span>
          <span className="underline cursor-pointer hover:text-white">Berlin</span>
          <span className="underline cursor-pointer hover:text-white">München</span>
          <span className="underline cursor-pointer hover:text-white">Service</span>
          <span className="underline cursor-pointer hover:text-white">Küche</span>
        </div>
      </div>
    </div>
  );
};