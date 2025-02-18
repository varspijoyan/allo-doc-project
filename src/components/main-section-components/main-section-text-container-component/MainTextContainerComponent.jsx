import MakeAnAppointmentButtonComponent from "../main-section-button-component/MakeAnAppointmentButtonComponent";
import HowItWorksButtonComponent from "../main-section-button-component/HowItWorksButtonComponent";
import { useTranslation } from "react-i18next";

export default function MainTextContainerComponent() {
    const { t } = useTranslation();

    return (
        <div className="main-section-text-container">
            <h1 className="heading">{t("mainSection.heading")} 24/7</h1>
            <div className={`h1-border ${language === "ru" ? "ru-h1-border" : "en-h1-border"}`}></div>
            <p className="desc">{t("mainSection.descriptionPart1")} <b>{t("mainSection.higlightDescriptionWithBTeg1")}</b> <span className={`b-1 ${language === "ru" ? "ru-b-1" : "en-b-1"}`}></span> {t("mainSection.descriptionPart2")} {t("mainSection.descriptionPart3")} <b>{t("mainSection.highlightDescriptionWithBTeg4")}</b> <span className={`b-2 ${language === "ru" ? "ru-b-2" : "en-b-2"}`}></span> {t("mainSection.descriptionPart4")} {t("mainSection.descriptionPart2")} {t("mainSection.descriptionPart5")} <span className="highlight-blue">App Store</span> {t("mainSection.descriptionPart6")} <span className="highlight-blue">Google Play</span></p>
            <div className="buttons">
                <MakeAnAppointmentButtonComponent />
                <HowItWorksButtonComponent />
            </div>
        </div>
    )
}