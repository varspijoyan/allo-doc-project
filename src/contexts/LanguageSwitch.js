import { createContext, useState} from "react";

export const LanguageSwitch = createContext();

export default function LanguageSwitchProvider({children}) {
    const [language, setLanguage] = useState("ru");
    function switchLangs(lng) {
        setLanguage(lng)
    }
    return (
        <LanguageSwitch.Provider value={{language, switchLangs}}>
            {children}
        </LanguageSwitch.Provider>
    )
}

