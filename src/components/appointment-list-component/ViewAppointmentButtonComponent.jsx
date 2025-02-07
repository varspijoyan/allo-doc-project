import { useContext } from "react"
import { LanguageSwitch } from "../../contexts/LanguageSwitch"
import { translate } from "../../utils/translate";

export default function ViewAppointmentButtonComponent() {
    const {language} = useContext(LanguageSwitch);
    return <button className="appointment-btn-1">{translate("View", language)} {translate("the_appointment", language)}</button>
}