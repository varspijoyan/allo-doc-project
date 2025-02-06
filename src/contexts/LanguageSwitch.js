import { createContext, useState, useCallback} from "react";

export const LanguageSwitch = createContext();

export default function LanguageSwitchProvider({children}) {
    const [language, setLanguage] = useState("ru");
    const switchLangs = useCallback((lng) => {
        setLanguage(lng);
    }, []);
    return (
        <LanguageSwitch.Provider value={{language, switchLangs}}>
            {children}
        </LanguageSwitch.Provider>
    )
}

