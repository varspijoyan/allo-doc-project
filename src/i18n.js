import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locals/en.json";
import ru from "./locals/ru.json";

i18n
.use(initReactI18next)
.init({
    debugger: true,
    fallbackLng: 'ru',
    resources: {
        ru,
        en
    }
});

export default i18n;