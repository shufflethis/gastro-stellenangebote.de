import { JobCategory, JobListing, ContentSectionData, FAQItem, CareerPath } from './types';

// Placeholder Job Data
export const FEATURED_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Versand- & Lagermitarbeiter (m/w/d) als Shipping & Receiving Clerk',
    employer: 'Elevate Aircraft Seating GmbH',
    location: 'Kaiserslautern',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Versand- & Lagermitarbeiter (m/w/d) als Shipping & Receiving Clerk',
    postedDate: '2026-03-22'
  },
  {
    id: '2',
    title: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    employer: 'Serviscope AG',
    location: 'Köln',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    postedDate: '2026-03-22'
  },
  {
    id: '3',
    title: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    employer: 'Serviscope AG',
    location: 'Troisdorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    postedDate: '2026-03-22'
  },
  {
    id: '4',
    title: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    employer: 'Scheidt & Bachmann Signalling Systems GmbH',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    postedDate: '2026-03-22'
  },
  {
    id: '5',
    title: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    employer: 'Scheidt & Bachmann Signalling Systems GmbH',
    location: 'Mönchengladbach',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    postedDate: '2026-03-22'
  },
  {
    id: '6',
    title: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    employer: 'Gemeinde HudeSofort-Bewerbung',
    location: 'Hude (Oldb)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    postedDate: '2026-03-22'
  },
  {
    id: '7',
    title: 'Fachkraft - Gastronomie',
    employer: 'Geier. Die Bäckerei GmbH',
    location: 'Deutsch-Wagram',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    postedDate: '2026-03-20'
  },
  {
    id: '8',
    title: 'Fachkraft - Gastronomie',
    employer: 'Geier. Die Bäckerei GmbH',
    location: 'Zistersdorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    postedDate: '2026-03-20'
  },
  {
    id: '9',
    title: 'Fachkraft - Gastronomie',
    employer: 'Gerstner Exhibition Congress Catering Messe Wien',
    location: 'Wien,Leopoldstadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    postedDate: '2026-03-20'
  },
  {
    id: '10',
    title: 'Servicemitarbeiter in der Gastronomie (m/w/d)',
    employer: 'Weingut Holler',
    location: 'Hösbach',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicemitarbeiter in der Gastronomie (m/w/d)',
    postedDate: '2026-03-20'
  },
  {
    id: '11',
    title: 'Servicekraft in der Gastronomie',
    employer: 'Jonas Jensen',
    location: 'Glückstadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft in der Gastronomie',
    postedDate: '2026-03-19'
  },
  {
    id: '12',
    title: 'Servicekraft in der Gastronomie (m/w/d)',
    employer: 'dasrößle eG',
    location: 'Todtnau',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft in der Gastronomie (m/w/d)',
    postedDate: '2026-03-19'
  },
  {
    id: '13',
    title: 'Servicekraft Gastronomie',
    employer: 'Seelounge - Inhaber Matthias Schwedler',
    location: 'Senftenberg, Niederlausitz',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie',
    postedDate: '2026-03-16'
  },
  {
    id: '14',
    title: 'Mitarbeiter (m/w/d) Gastronomie',
    employer: 'Lühmann Tankstellen Betriebs GmbH & Co. KG',
    location: 'Bad Wildungen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Gastronomie',
    postedDate: '2026-03-16'
  },
  {
    id: '15',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    employer: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    postedDate: '2026-03-15'
  },
  {
    id: '16',
    title: 'Zahnarzt (m/w/d)',
    employer: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Zahnarzt (m/w/d)',
    postedDate: '2026-03-15'
  },
  {
    id: '17',
    title: 'Zahnarzt (m/w/d)',
    employer: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Zahnarzt (m/w/d)',
    postedDate: '2026-03-15'
  },
  {
    id: '18',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    employer: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedDate: '2026-03-15'
  },
  {
    id: '19',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    employer: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedDate: '2026-03-15'
  },
  {
    id: '20',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    employer: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    postedDate: '2026-03-15'
  },
  {
    id: '21',
    title: 'Fachkraft für Gastronomie (m/w/d)',
    employer: 'NGD Norddeutsche Gesellschaft für Diakonie e. V.',
    location: 'Flensburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie (m/w/d)',
    postedDate: '2026-03-13'
  },
  {
    id: '22',
    title: 'Fachkraft für Gastronomie',
    employer: 'Volkswagen',
    location: 'Wolfsburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    postedDate: '2026-03-13'
  },
  {
    id: '23',
    title: 'Fachkraft für Gastronomie',
    employer: 'Hofmeister',
    location: 'Ehingen (Donau)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    postedDate: '2026-03-13'
  },
  {
    id: '24',
    title: 'Fachkraft für Gastronomie',
    employer: 'Hofmeister',
    location: 'Bietigheim-Bissingen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    postedDate: '2026-03-13'
  },
  {
    id: '25',
    title: 'Fachkraft für Gastronomie',
    employer: 'Hofmeister',
    location: 'Sindelfingen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    postedDate: '2026-03-13'
  }
];

// Rich Content for SEO
export const INDUSTRY_INFO: ContentSectionData = {
  id: 'branche',
  title: 'Die Gastronomie: Ein Wirtschaftsmotor mit Herz',
  subtitle: 'Warum eine Karriere in der Gastronomie mehr ist als nur ein Job.',
  content: [
    'Die Gastronomie- und Hotelleriebranche ist einer der bedeutendsten Arbeitgeber im deutschsprachigen Raum. Sie steht für Vielfalt, Leidenschaft und direkte menschliche Interaktion wie kaum ein anderer Sektor. In einer zunehmend digitalisierten Welt bleibt das Bedürfnis nach kulinarischem Genuss, Gastfreundschaft und Erlebnissen bestehen – und wächst sogar. Wer hier arbeitet, gestaltet Lebensqualität.',
    'Ob im Sternerestaurant, in der Gemeinschaftsverpflegung, im hippen Foodtruck oder im luxuriösen 5-Sterne-Hotel: Die Bandbreite der Möglichkeiten ist riesig. Die Branche sucht händeringend nach Talenten, die nicht nur ihr Handwerk verstehen, sondern auch Gastgeber aus Leidenschaft sind. Dabei haben sich die Arbeitsbedingungen in den letzten Jahren deutlich gewandelt. Viele Arbeitgeber setzen heute auf moderne Arbeitszeitmodelle, faire Bezahlung und umfassende Weiterbildungsmöglichkeiten, um dem Fachkräftemangel entgegenzuwirken.',
    'Ein Job in der Gastro bedeutet Teamwork in Reinform. In der Küche muss jeder Handgriff sitzen, im Service ist Koordination alles. Diese Schule des Lebens vermittelt Soft Skills, die branchenübergreifend von unschätzbarem Wert sind: Stressresistenz, Kommunikationsstärke, Multitasking und emotionale Intelligenz. Wer in der Gastronomie besteht, kann überall arbeiten.'
  ],
  image: 'https://picsum.photos/id/431/800/600',
  imageAlt: 'Ein geschäftiges Restaurantteam bei der Arbeit',
  bullets: [
    'Krisensichere Jobs durch stetige Nachfrage nach Erlebnissen',
    'Internationale Karrieremöglichkeiten weltweit',
    'Schnelle Aufstiegschancen für engagierte Talente',
    'Direktes Feedback und tägliche Erfolgserlebnisse'
  ]
};

export const JOB_ROLES_INFO: ContentSectionData = {
  id: 'berufe',
  title: 'Berufsbilder in der Gastronomie',
  subtitle: 'Finden Sie Ihre Nische in der Welt des Geschmacks.',
  content: [
    'Die Vielfalt der Berufe in der Gastronomie ist beeindruckend. Jeder Bereich erfordert spezifische Talente und bietet eigene Entfaltungsmöglichkeiten. Hier ein detaillierter Überblick über die wichtigsten Säulen der Branche.',
    '**Die Küche:** Das Herzstück jedes Betriebs. Vom Commis de Cuisine über den Chef de Partie bis zum Executive Chef – hierarchische Strukturen sorgen für Ordnung im kreativen Chaos. Köche sind Handwerker und Künstler zugleich. Sie benötigen Disziplin, ein feines Gespür für Aromen und organisatorisches Talent.',
    '**Der Service:** Das Gesicht zum Gast. Servicekräfte sind Verkäufer, Psychologen und Diplomaten. Vom Restaurantfachmann bis zum Sommelier geht es hier um Fachwissen über Speisen und Getränke sowie die Kunst, Wünsche von den Augen abzulesen.',
    '**Die Bar:** Bühne und Labor. Bartender mixen nicht nur Drinks, sie inszenieren Erlebnisse. Warenkunde, Kreativität und Entertainer-Qualitäten sind hier gefragt.',
    '**Das Management:** Die Strategen im Hintergrund. Restaurantleiter, F&B Manager und Hoteldirektoren steuern die wirtschaftlichen Geschicke, führen Teams und entwickeln Konzepte.'
  ],
  image: 'https://picsum.photos/id/292/800/600',
  imageAlt: 'Ein Koch bereitet ein Gericht detailverliebt zu',
  bullets: [
    'Küche: Kreativität, Handwerk, Timing',
    'Service: Kommunikation, Verkauf, Etikette',
    'Bar: Mixologie, Socializing, Präzision',
    'Management: Führung, Zahlenverständnis, Strategie'
  ]
};

export const FOR_EMPLOYERS: ContentSectionData = {
  id: 'arbeitgeber',
  title: 'Für Arbeitgeber: Finden Sie die Besten',
  content: [
    'Der Wettbewerb um qualifiziertes Personal ist härter denn je. Auf gastro-stellenangebote.de erreichen Sie gezielt Fachkräfte, die aktiv nach neuen Herausforderungen suchen. Unsere Plattform ist nicht nur eine Jobbörse, sondern ein Hub für Karriereentwicklung.',
    'Nutzen Sie unsere GEO-optimierten (Generative Engine Optimization) Stellenanzeigen, um auch in KI-gestützten Suchen gefunden zu werden. Wir helfen Ihnen, Ihre Arbeitgebermarke (Employer Branding) zu stärken. Zeigen Sie potenziellen Bewerbern, was Ihren Betrieb besonders macht: Ist es das familiäre Team, die innovative Küche oder die außergewöhnliche Location?',
    'Wir bieten transparente Preismodelle und einfache Verwaltung Ihrer Inserate. Egal ob Sie eine einzelne Aushilfe für die Sommersaison oder einen neuen Küchendirektor suchen – wir haben die Reichweite.'
  ],
  image: 'https://picsum.photos/id/42/800/600',
  imageAlt: 'Ein zufriedener Restaurantbesitzer im Gespräch',
  bullets: [
    'Zielgruppengenaue Ansprache',
    'Hohe Sichtbarkeit in Suchmaschinen',
    'Einfaches Bewerbermanagement',
    'Support bei der Erstellung attraktiver Anzeigen'
  ]
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Wie finde ich den passenden Job in der Gastronomie?",
    answer: "Nutzen Sie unsere Filterfunktionen nach Region, Jobkategorie und Anstellungsart. Achten Sie auch auf die detaillierten Beschreibungen der Unternehmenskultur in den Anzeigen."
  },
  {
    question: "Brauche ich eine abgeschlossene Ausbildung?",
    answer: "Für viele Fachpositionen (z.B. Koch, Hotelfachmann) ist eine Ausbildung Standard. Es gibt jedoch zahlreiche Quereinsteiger-Möglichkeiten, besonders im Service oder als Küchenhilfe, bei denen 'Training on the Job' angeboten wird."
  },
  {
    question: "Wie sind die Arbeitszeiten in der Gastronomie?",
    answer: "Die Gastronomie arbeitet dann, wenn andere frei haben. Das bedeutet oft Abends, am Wochenende und an Feiertagen. Viele moderne Betriebe bieten jedoch mittlerweile 4-Tage-Wochen, geregelte Dienstpläne und Arbeitszeitkonten an."
  },
  {
    question: "Was ist GEO (Generative Engine Optimization)?",
    answer: "GEO bedeutet, dass unsere Inhalte so strukturiert sind, dass KI-Systeme wie ChatGPT, Gemini oder Perplexity sie optimal lesen und Nutzern als Antwort vorschlagen können. Das erhöht die Sichtbarkeit von Stellenanzeigen massiv."
  },
  {
    question: "Was kostet eine Stellenanzeige?",
    answer: "Für Bewerber ist die Nutzung zu 100% kostenlos. Arbeitgeber können zwischen verschiedenen Paketen wählen, beginnend bei einem kostenlosen Basiseintrag bis hin zu Premium-Platzierungen."
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    title: "Vom Azubi zum Küchendirektor",
    level: "Experte",
    description: "Der klassische Weg beginnt mit einer Ausbildung zum Koch/zur Köchin. Nach den Wanderjahren als Commis und Chef de Partie folgt der Meistertitel oder die Position als Sous Chef, bis hin zur Gesamtleitung der Küche.",
    requirements: ["Ausbildung", "Internationale Erfahrung", "Führungskompetenz", "Kaufmännisches Denken"]
  },
  {
    title: "Quereinstieg Systemgastronomie",
    level: "Management",
    description: "Ideal für Organisationstalente. Einstieg oft als Schichtleiter, schnelle Aufstiegsmöglichkeiten zum Restaurant General Manager oder Bezirksleiter durch interne Schulungsprogramme.",
    requirements: ["Studium oder kaufm. Ausbildung", "Hands-on Mentalität", "Zahlenverständnis"]
  }
];

export const IMPRESSUM_TEXT = `
Angaben gemäß § 5 TMG

Social Media Venture GmbH
Schliemannstraße 23
10437 Berlin

Vertreten durch:
Thomas Sander (Geschäftsführer)

Kontakt:
Telefon: +49 30 959 988 700
E-Mail: info@socialmediaventure.com

Umsatzsteuer-ID:
Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
DE298885799

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Thomas Sander
Schliemannstraße 23
10437 Berlin

Haftungsausschluss (Disclaimer):

Haftung für Inhalte
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Haftung für Links
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
`;
