import { useContext } from "react";
import { LanguageSwitch } from "../../contexts/LanguageSwitch";

export default function Language() {
    const { language, switchLangs } = useContext(LanguageSwitch);

    return (
        <div className="languages">
            <div 
                onClick={() => switchLangs("ru")}
                className={`ru ${language === "ru" ? "lang-active" : ""}`}>
                RU
            </div>
            <div 
                onClick={() => switchLangs("en")}
                className={`en ${language === "en" ? "lang-active" : ""}`}>
                EN
            </div>
        </div>
    );
}
