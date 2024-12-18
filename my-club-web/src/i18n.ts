import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {germanTranslationResource} from "./util/lang/de";


const resources = {
    de: germanTranslationResource,
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "de",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;