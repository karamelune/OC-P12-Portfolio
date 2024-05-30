import React from 'react';

type Language = 'en' | 'fr';

export const LanguageContext = React.createContext({
    language: 'en' as Language,
    setLanguage: (language: Language) => {},
});
