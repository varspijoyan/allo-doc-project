import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ViewAppointmentButtonComponent({ doctorId }) {
    const { t } = useTranslation();
    return (
            <Link className="router-btn-link" to={`/doctor-profile/${doctorId}`}>
                <button className="appointment-btn-1">
                    {t("myAppointmentsSection.buttonText1")}
                </button>
            </Link>
    );
}
