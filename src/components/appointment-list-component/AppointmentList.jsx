import "../../styles/AppointmentList.css";
import { useContext, useState, useMemo } from "react";
import {LanguageSwitch} from "../../contexts/LanguageSwitch";
import {translate} from "../../utils/translate";
import AddedAppointments from "./AddedAppointments";
import appointmentInfo from "../../locals/appointmentInfo.json";

export default function AppointmentList() {
    const {language} = useContext(LanguageSwitch);
    const [activeStatusLink, setActiveStatusLink] = useState("status-upcoming");
    const filteredAppointments = useMemo(() => {
        return appointmentInfo.filter((data) => {
            if(activeStatusLink === "status-upcoming")
                return data.status.planned;
            if(activeStatusLink === "status-past")
                return data.status.It_took_place;
            if(activeStatusLink === "status-cancelled")
                return data.status.cancelled;
            return false;
        });
    }, [activeStatusLink, appointmentInfo]);
    return (
        <section className="appointment-list">
            <p className={`title ${language === "ru" ? "ru-title" : "en-title"}`}>{translate("My_appointments", language)}</p>
            <div className="appointment-status">
                <ul>
                    <li 
                        className={`status-upcoming ${activeStatusLink === "status-upcoming" ? "li-active" : ""}`}
                        onClick={() => setActiveStatusLink("status-upcoming")}>{translate("Upcoming", language)}</li>
                    <li 
                        className={`status-past ${activeStatusLink === "status-past" ? "li-active" : ""}`}
                        onClick={() => setActiveStatusLink("status-past")}>{translate("Past", language)}</li>
                    <li 
                        className={`status-cancelled ${activeStatusLink === "status-cancelled" ? "li-active" : ""}`}
                        onClick={() => setActiveStatusLink("status-cancelled")}>{translate("Cancelled", language)}</li>
                </ul>
            </div>
            {filteredAppointments.map((data) => {
                return <AddedAppointments key={data.id} appointmentData={data}/>  
            })}
        </section>
    );
}