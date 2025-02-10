import "../../styles/AppointmentList.css";
import { useContext, useState, useMemo, useEffect} from "react";
import {LanguageSwitch} from "../../contexts/LanguageSwitch";
import {translate} from "../../utils/translate";
import AddedAppointments from "./AddedAppointments";
import appointmentInfo from "../../locals/appointmentInfo.json";
import { useParams, Link} from "react-router-dom";


export default function AppointmentList() {
    const {language} = useContext(LanguageSwitch);
    const {status} = useParams();
    const [activeStatusLink, setActiveStatusLink] = useState("upcoming" || status);
    const filteredAppointments = useMemo(() => {
        return appointmentInfo.filter((data) => {
            if(activeStatusLink === "upcoming")
                return data.status.planned;
            if(activeStatusLink === "past")
                return data.status.It_took_place;
            if(activeStatusLink === "cancelled")
                return data.status.cancelled;
            return false;
        });
    }, [activeStatusLink]);

    return (
        <section className="appointment-list">
            <p className={`title ${language === "ru" ? "ru-title" : "en-title"}`}>{translate("My_appointments", language)}</p>
            <div className="appointment-status">
                <ul>
                    <li 
                        className={`status-upcoming ${activeStatusLink === "upcoming" ? "li-active" : ""}`}
                        onClick={() => setActiveStatusLink("upcoming")}>
                            <Link className="router-link" to="upcoming">{translate("Upcoming", language)}</Link>
                    </li>
                    <li 
                        className={`status-past ${activeStatusLink === "past" ? "li-active" : ""}`}
                        onClick={() => setActiveStatusLink("past")}>
                            <Link className="router-link" to="past">{translate("Past", language)}</Link>
                    </li>
                    <li 
                        className={`status-cancelled ${activeStatusLink === "cancelled" ? "li-active" : ""}`}
                        onClick={() => setActiveStatusLink("cancelled")}>
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