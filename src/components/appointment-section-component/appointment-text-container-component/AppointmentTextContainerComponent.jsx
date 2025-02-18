import { useTranslation } from "react-i18next"
import i18n from "../../../i18n";

export default function AppointmentTextContainerComponent() {
    const { t } = useTranslation();
    const language = i18n.language;
    return (
        <div className="appointment-text-container">
            <h1 className="appointment-section-heading">{t("makeAnAppointmentSection.heading")}</h1>
            <div className={`heading-border ${language === "ru" ? "ru-heading-border" : "en-heading-border"}`}></div>
            <p className="appointment-section-desc">{t("makeAnAppointmentSection.description")}</p>
            <ul>
                <li>
                    <div className="circle"></div>
                    <p className="service">{t("makeAnAppointmentSection.service1")}</p>
                </li>
                <li>
                    <div className="circle"></div>
                    <p className="service">{t("makeAnAppointmentSection.service2")}</p>
                </li>
                <li>
                    <div className="circle"></div>
                    <p className="service">{t("makeAnAppointmentSection.service3")}</p>
                </li>
            </ul>
            <a href="#" className="link">{t("makeAnAppointmentSection.link")}</a>
        </div>
    )
}