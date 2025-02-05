import { useContext } from "react"
import {translate} from "../../../utils/translate"
import {LanguageSwitch} from "../../../contexts/LanguageSwitch";
import MakeAnAppointmentButtonComponent from "../main-section-button-component/MakeAnAppointmentButtonComponent";
import HowItWorksButtonComponent from "../main-section-button-component/HowItWorksButtonComponent";
export default function MainTextContainerComponent() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="main-section-text-container">
            <h1 className="heading">{translate("Online", language)} {translate("consultations", language)} {translate("from_doctors", language)} {translate("specialists", language)} 24/7</h1>
            <div className={`h1-border ${language === "ru" ? "ru-h1-border" : "en-h1-border"}`}></div>
            <p className="desc">{translate("Consult", language)} <b>{translate("now", language)}</b> <span className={`b-1 ${language === "ru" ? "ru-b-1" : "en-b-1"}`}></span> {translate("or", language)} {translate("by", language)} <b>{translate("previous_appointment", language)}</b> <span className={`b-2 ${language === "ru" ? "ru-b-2" : "en-b-2"}`}></span> {translate("from_your", language)} {translate("computer", language)} {translate("or", language)} {translate("by_using_our_application", language)}, {translate("available_in", language)} <span className="highlight-blue">App Store</span> {translate("and", language)} <span className="highlight-blue">Google Play</span></p>
            <div className="buttons">
                <MakeAnAppointmentButtonComponent />
                <HowItWorksButtonComponent />
            </div>
        </div>
    )
}