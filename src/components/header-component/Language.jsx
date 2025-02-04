import { useContext } from "react";
import { LanguageSwitch } from "../../contexts/LanguageSwitch"; // Correct path

export default function Language() {
    const { language, switchLangs } = useContext(LanguageSwitch); // Use the context here

    return (
        <div className="languages">
            <div 
                onClick={() => switchLangs("ru")} // Corrected the function name to match the provider
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
