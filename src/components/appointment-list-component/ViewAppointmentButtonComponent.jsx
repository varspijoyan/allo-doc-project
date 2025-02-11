import { useContext } from "react"
import { LanguageSwitch } from "../../contexts/LanguageSwitch"
import { translate } from "../../utils/translate";
import { Link } from "react-router-dom";

export default function ViewAppointmentButtonComponent({ doctorId }) {
    const { language } = useContext(LanguageSwitch);
    return (
        <button className="appointment-btn-1">
            <Link to={`/doctor-profile/${doctorId}`}>
                {translate("View", language)} {translate("the_appointment", language)}
            </Link>
        </button>
    );
}
