import { GoogleGenAI } from "@google/genai";
import { AiAdviceResponse } from "../types";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real prod environment, ensure this is handled via a backend proxy to hide the key, 
// or use allow-listed domains if using client-side calls. 
// Since this is a client-side demo, we assume the environment variable or a safe context.

const ai = new GoogleGenAI({ apiKey });

export const getCareerAdvice = async (userProfile: string): Promise<AiAdviceResponse> => {
  if (!apiKey) {
    // Fallback if no key is present for demo purposes
    return {
      suggestion: "Bitte konfigurieren Sie Ihren API-Schlüssel für personalisierte Ratschläge.",
      matchedRoles: ["Koch", "Servicekraft"],
      reasoning: "Ohne API-Schlüssel zeigen wir Standardvorschläge an. Die Gastronomie bietet für jeden etwas!"
    };
  }

  try {
    const prompt = `
      Du bist ein erfahrener Karriereberater für die Gastronomie. 
      Analysiere die folgende Beschreibung eines Nutzers und schlage passende Jobrollen vor.
      
      Nutzerprofil: "${userProfile}"
      
      Antworte strikt im JSON-Format mit diesem Schema:
      {
        "suggestion": "Eine kurze, ermutigende Zusammenfassung (max 2 Sätze)",
        "matchedRoles": ["Rolle 1", "Rolle 2", "Rolle 3"],
        "reasoning": "Detaillierte Erklärung warum diese Rollen passen (ca. 50 Wörter)"
      }
      Antworte auf Deutsch.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("Keine Antwort von Gemini");

    const data = JSON.parse(text) as AiAdviceResponse;
    return data;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      suggestion: "Entschuldigung, unser Karriere-Assistent macht gerade Pause.",
      matchedRoles: [],
      reasoning: "Bitte versuchen Sie es später erneut."
    };
  }
};