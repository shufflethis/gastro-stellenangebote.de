import React from 'react';
import { MapPin } from 'lucide-react';

interface CityData {
  name: string;
  region: string;
  description: string;
}

const GERMAN_CITIES: CityData[] = [
  {
    name: 'Berlin',
    region: 'Berlin',
    description: 'Deutschlands Hauptstadt bietet eine vielfaeltige Gastro-Szene von Street Food bis Sternerestaurant. Besonders gefragt: internationale Kueche und innovative Konzepte.',
  },
  {
    name: 'Muenchen',
    region: 'Bayern',
    description: 'Die bayerische Metropole verbindet traditionelle Wirtshauskultur mit moderner Gastronomie. Hohe Nachfrage nach Servicekraeften und Brauereifachleuten.',
  },
  {
    name: 'Hamburg',
    region: 'Hamburg',
    description: 'Die Hafenstadt punktet mit Fischrestaurants, Szene-Bars und einer lebendigen Catering-Branche. Viele Jobs in der gehobenen Gastronomie.',
  },
  {
    name: 'Koeln',
    region: 'Nordrhein-Westfalen',
    description: 'Brauhauskultur trifft auf moderne Kueche. Koeln bietet zahlreiche Stellen in Hotellerie, Event-Gastronomie und Gemeinschaftsverpflegung.',
  },
  {
    name: 'Frankfurt am Main',
    region: 'Hessen',
    description: 'Die Bankenmetropole hat eine florierende Business-Gastronomie. Hoher Bedarf an qualifizierten Koechinnen und Koechen sowie Servicefachkraeften.',
  },
  {
    name: 'Stuttgart',
    region: 'Baden-Wuerttemberg',
    description: 'Schwaebi­sche Kueche und internationale Restaurants praeegen die Region. Besonders gesucht: Fachkraefte fuer Betriebsgastronomie und Catering.',
  },
  {
    name: 'Duesseldorf',
    region: 'Nordrhein-Westfalen',
    description: 'Die Rheinmetropole bietet Jobs in der Altstadt-Gastronomie, gehobenem Dining und in der Messe-Gastronomie.',
  },
  {
    name: 'Leipzig',
    region: 'Sachsen',
    description: 'Leipzigs Gastro-Szene waechst rasant. Besonders Bars, Cafes und kreative Restaurantkonzepte suchen engagiertes Personal.',
  },
  {
    name: 'Dresden',
    region: 'Sachsen',
    description: 'Zwischen Barockarchitektur und Neustadt-Szene bietet Dresden vielfaeltige Karrierechancen in der Gastronomie und Hotellerie.',
  },
  {
    name: 'Nuernberg',
    region: 'Bayern',
    description: 'Franken und seine kulinarische Tradition schaffen zahlreiche Arbeitsplaetze in der regionalen Gastronomie und im Tourismus.',
  },
  {
    name: 'Hannover',
    region: 'Niedersachsen',
    description: 'Messestadt mit starker Nachfrage nach Event-Catering, Hotelservice und Restaurantfachkraeften.',
  },
  {
    name: 'Dortmund',
    region: 'Nordrhein-Westfalen',
    description: 'Das Ruhrgebiet bietet eine aufstrebende Gastro-Szene mit vielen Moeglichkeiten fuer Quereinsteiger und Fachkraefte.',
  },
];

export const GeoCities: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Gastro-Jobs in Deiner Stadt
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finde Stellenangebote in der Gastronomie in den groessten Staedten Deutschlands.
            Von Berlin bis Muenchen -- ueberall werden Fachkraefte gesucht.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GERMAN_CITIES.map((city, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                <h3 className="text-lg font-bold text-gray-900">{city.name}</h3>
              </div>
              <p className="text-xs text-brand-600 font-medium mb-3">{city.region}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{city.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
