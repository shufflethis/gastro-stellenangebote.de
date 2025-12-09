import React from 'react';
import { ContentSectionData } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  data: ContentSectionData;
  reversed?: boolean;
  bgGray?: boolean;
}

export const ContentSection: React.FC<Props> = ({ data, reversed = false, bgGray = false }) => {
  return (
    <section id={data.id} className={`py-20 ${bgGray ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               {data.image && (
                 <img 
                   src={data.image} 
                   alt={data.imageAlt} 
                   className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                 />
               )}
               {/* Decorative Element */}
               <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-brand-100 rounded-full -z-10 ${reversed ? '-left-6 right-auto' : ''}`}></div>
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-xl text-brand-600 font-medium mb-6">
                {data.subtitle}
              </p>
            )}
            
            <div className="prose prose-lg text-gray-600 mb-8">
              {data.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {data.bullets && (
              <ul className="space-y-3">
                {data.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};