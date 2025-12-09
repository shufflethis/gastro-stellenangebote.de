import React from 'react';
import { IMPRESSUM_TEXT } from '../constants';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ImpressumModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col relative animate-fade-in-up">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Impressum</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto whitespace-pre-line text-gray-600 leading-relaxed">
          {IMPRESSUM_TEXT}
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end">
          <button 
            onClick={onClose} 
            className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};