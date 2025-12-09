import React, { useState } from 'react';
import { FEATURED_JOBS } from '../constants';
import { getCareerAdvice } from '../services/geminiService';
import { AiAdviceResponse } from '../types';
import { Briefcase, MapPin, Clock, Sparkles, Loader2 } from 'lucide-react';

export const JobBoard: React.FC = () => {
  const [aiInput, setAiInput] = useState('');
  const [aiResult, setAiResult] = useState<AiAdviceResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAiConsult = async () => {
    if (!aiInput.trim()) return;
    setLoading(true);
    const result = await getCareerAdvice(aiInput);
    setAiResult(result);
    setLoading(false);
  };

  return (
    <section id="jobs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AI Assistant Section */}
        <div className="mb-16 bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="md:flex gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-brand-600" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">KI-Karriere-Check</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Unsicher, welcher Gastro-Job zu Dir passt? Beschreibe Deine Stärken, Vorlieben und Erfahrungen, 
                und unsere KI findet die perfekte Rolle für Dich.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Z.B. 'Ich bin nachtaktiv, liebe laute Musik und mixe gerne Getränke...'" 
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && handleAiConsult()}
                />
                <button 
                  onClick={handleAiConsult}
                  disabled={loading}
                  className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Analysieren'}
                </button>
              </div>
            </div>
            
            {/* AI Result Display */}
            {(aiResult || loading) && (
              <div className="flex-1 mt-8 md:mt-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[200px]">
                 {loading ? (
                   <div className="h-full flex items-center justify-center text-gray-400">
                     <span className="animate-pulse">KI denkt nach...</span>
                   </div>
                 ) : aiResult ? (
                   <div>
                     <h3 className="font-bold text-lg text-brand-700 mb-2">{aiResult.suggestion}</h3>
                     <p className="text-sm text-gray-600 mb-4 italic">{aiResult.reasoning}</p>
                     <div>
                       <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Empfohlene Jobs:</span>
                       <div className="flex flex-wrap gap-2 mt-2">
                         {aiResult.matchedRoles.map((role, idx) => (
                           <span key={idx} className="px-3 py-1 bg-brand-100 text-brand-800 text-sm rounded-full font-medium">
                             {role}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 ) : null}
              </div>
            )}
          </div>
        </div>

        {/* Job Listings Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Aktuelle Top-Jobs</h2>
            <p className="mt-2 text-gray-600">Die frischesten Angebote der Woche.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-brand-600 font-medium hover:text-brand-700">
            Alle Jobs anzeigen &rarr;
          </a>
        </div>

        {/* Job Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_JOBS.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium uppercase tracking-wide">
                  {job.category}
                </span>
                <span className="text-xs text-gray-400">{job.postedDate}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-brand-600 font-medium text-sm mb-4">{job.employer}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {job.type}
                </div>
                {job.salaryRange && (
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-semibold mr-2">€</span>
                    {job.salaryRange}
                  </div>
                )}
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                {job.description}
              </p>

              <button className="w-full bg-gray-50 text-gray-900 border border-gray-200 py-2 rounded-lg font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors">
                Details ansehen
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
           <a href="#" className="text-brand-600 font-medium hover:text-brand-700">
            Alle Jobs anzeigen &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};