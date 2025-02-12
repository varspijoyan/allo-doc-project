import { useContext } from "react"
import { LanguageSwitch } from "../../contexts/LanguageSwitch"
import { translate } from "../../utils/translate";
import { Link } from "react-router-dom";

export default function ViewAppointmentButtonComponent({ doctorId }) {
    const { language } = useContext(LanguageSwitch);
    return (
            <Link className="router-btn-link" to={`/doctor-profile/${doctorId}`}>
                <button className="appointment-btn-1">
                    {translate("View", language)} {translate("the_appointment", language)}
                </button>
            </Link>
    );
}
