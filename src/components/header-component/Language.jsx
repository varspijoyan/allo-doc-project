import { useCallback, useState } from "react";
import i18n from "../../i18n";

export default function Language() {
    const [language, setLanguage] = useState('ru')
    const changeLanguage = useCallback((lng) => {
        i18n.changeLanguage(lng); //  changing language
        setLanguage(lng); // updating state
    }, []);
    return (
        <div className="languages">
            <div 
                onClick={() => changeLanguage('ru')}
                className={`ru ${language === "ru" ? "lang-active" : ""}`}>
                RU
            </div>
            <div 
                onClick={() => changeLanguage('en')}
                className={`en ${language === "en" ? "lang-active" : ""}`}>
                EN
            </div>
        </div>
    );
}
