import { useContext } from "react"
import {LanguageSwitch} from "../../../contexts/LanguageSwitch";
import {translate} from "../../../utils/translate";
export default function AppointmentTextContainerComponent() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="appointment-text-container">
            <h1 className="appointment-section-heading">{translate("Make_an_appointment_with_a_doctor", language)}</h1>
            <div className={`heading-border ${language === "ru" ? "ru-heading-border" : "en-heading-border"}`}></div>
            <p className="appointment-section-desc">{translate("More_than", language)} 1500 {translate("doctors", language)} {translate("and", language)} {translate("more_than", language)} 50 {translate("different", language)} {translate("specializations", language)}</p>
            <ul>
                <li>
                    <div className="circle"></div>
                    <p className="service">{translate("Reception_at_a_time_for_you", language)}</p>
                </li>
                <li>
                    <div className="circle"></div>
                    <p className="service">{translate("Doctors_with_more_than_8_years_of_experience", language)}</p>
                </li>
                <li>
                    <div className="circle"></div>
                    <p className="service">{translate("We_will_clearly_explain_the_cause_of_the_illness_and_give_detailed_recommendations", language)}</p>
                </li>
            </ul>
            <a href="#" className="link">{translate("Make_an_appointment", language)}</a>
        </div>
    )
}