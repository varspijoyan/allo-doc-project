import "../../styles/AppointmentList.css";
import { useMemo } from "react";
import AddedAppointments from "./AddedAppointments";
import appointmentInfo from "../../locals/appointmentInfo.json";
import { useParams, Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function AppointmentList() {
    const { t } = useTranslation(); 
    const {status} = useParams();
    const language = i18n.language;
    const filteredAppointments = useMemo(() => {
        return appointmentInfo.filter((data) => {
            if(status === "upcoming")
                return data.status.planned;
            if(status === "past")
                return data.status.It_took_place;
            if(status === "cancelled")
                return data.status.cancelled;
            return false;
        });
    }, [status]);

    return (
        <section className="appointment-list">
            <p className={`title ${language === "ru" ? "ru-title" : "en-title"}`}>{t("myAppointmentsSection.heading")}</p>
            <div className="appointment-status">
                <ul>
                    <li className={`status-upcoming ${status === "upcoming" ? "li-active" : ""}`}>
                            <Link className="router-link" to="upcoming">{t("myAppointmentsSection.link1")}</Link>
                    </li>
                    <li className={`status-past ${status === "past" ? "li-active" : ""}`}>
                            <Link className="router-link" to="past">{t("myAppointmentsSection.link2")}</Link>
                    </li>
                    <li className={`status-cancelled ${status === "cancelled" ? "li-active" : ""}`}>
                            <Link className="router-link" to="cancelled">{t("myAppointmentsSection.link3")}</Link>
                    </li>
                </ul>
            </div>
            {filteredAppointments.map((data) => {
                return <AddedAppointments key={data.id} appointmentData={data}/>  
            })}
        </section>
    );
}