import "../../styles/AppointmentList.css";
import { useContext, useMemo } from "react";
import {LanguageSwitch} from "../../contexts/LanguageSwitch";
import {translate} from "../../utils/translate";
import AddedAppointments from "./AddedAppointments";
import appointmentInfo from "../../locals/appointmentInfo.json";
import { useParams, Link} from "react-router-dom";


export default function AppointmentList() {
    const {language} = useContext(LanguageSwitch);
    const {status} = useParams();
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
            <p className={`title ${language === "ru" ? "ru-title" : "en-title"}`}>{translate("My_appointments", language)}</p>
            <div className="appointment-status">
                <ul>
                    <li className={`status-upcoming ${status === "upcoming" ? "li-active" : ""}`}>
                            <Link className="router-link" to="upcoming">{translate("Upcoming", language)}</Link>
                    </li>
                    <li className={`status-past ${status === "past" ? "li-active" : ""}`}>
                            <Link className="router-link" to="past">{translate("Past", language)}</Link>
                    </li>
                    <li className={`status-cancelled ${status === "cancelled" ? "li-active" : ""}`}>
                            <Link className="router-link" to="cancelled">{translate("Cancelled", language)}</Link>
                    </li>
                </ul>
            </div>
            {filteredAppointments.map((data) => {
                return <AddedAppointments key={data.id} appointmentData={data}/>  
            })}
        </section>
    );
}