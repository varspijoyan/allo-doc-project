import en from "../locals/en.json";
import ru from "../locals/ru.json";

export const translate = (key, lng) => {
    let language = ru;
    if(lng === "en") {
        language = en;
    }

    if(!language[key]) {
        return key;
    }
    return language[key];
} 