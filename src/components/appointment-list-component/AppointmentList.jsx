import "../../styles/AppointmentList.css";
import { useContext, useState } from "react";
import {LanguageSwitch} from "../../contexts/LanguageSwitch";
import {translate} from "../../utils/translate";
import AddedAppointments from "./AddedAppointments";

import calendarImg from "../../images/calendar.svg";
import clockImg from "../../images/clock.svg";
import chatImg from "../../images/conversation.svg";
import videoCameraImg from "../../images/video-camera.svg";
import docImg from "../../images/doc-img.svg";
import appointmentInfo from "../../locals/appointmentInfo.json";

export default function AppointmentList() {
    const {language} = useContext(LanguageSwitch);
    const [activeStatusLink, setActiveStatusLink] = useState("status-upcoming");
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
            {appointmentInfo.map((data) => {
                if(activeStatusLink === "status-upcoming" && data.status.planned) {
                    return <AddedAppointments
                            calendarImage = {calendarImg}
                            appointmentDate = {data.date}
                            clockImage = {clockImg}
                            time = {`${data.time.hours}:${data.time.minutes}:${data.time.seconds}`}
                            chatImage = {data.connectionType === "Video_connection" ? videoCameraImg : chatImg}
                            connectionType = {translate(data.connectionType, language)}
                            status = {translate("Planned", language)}
                            docImage = {docImg}
                            fullName = {`${data.firstName} ${data.lastName}`}
                            profession = {translate(data.profession, language)}
                            experience = {`${translate(data.experience)} 15 ${translate("years")}`}
                            statusStyle = "planned" />
                }
                
                if(activeStatusLink === "status-past" && data.status.It_took_place) {
                    return <AddedAppointments
                            calendarImage = {calendarImg}
                            appointmentDate = {data.date}
                            clockImage = {clockImg}
                            time = {`${data.time.hours}:${data.time.minutes}:${data.time.seconds}`}
                            chatImage = {data.connectionType === "Video_connection" ? videoCameraImg : chatImg}
                            connectionType = {translate(data.connectionType, language)}
                            status = {translate("It_took_place", language)}
                            docImage = {docImg}
                            fullName = {`${data.firstName} ${data.lastName}`}
                            profession = {translate(data.profession, language)}
                            experience = {`${translate(data.experience)} 15 ${translate("years")}`}
                            statusStyle = "it-took-place" />
                }

                if(activeStatusLink === "status-cancelled" && data.status.cancelled) {
                    return <AddedAppointments 
                        calendarImage = {calendarImg}
                        appointmentDate = {data.date}
                        clockImage = {clockImg}
                        time = {`${data.time.hours}:${data.time.minutes}:${data.time.seconds}`}
                        chatImage = {data.connectionType === "Video_connection" ? videoCameraImg : chatImg}
                        connectionType = {translate(data.connectionType, language)}
                        status = {translate("Cancelled", language)}
                        docImage = {docImg}
                        fullName = {`${data.firstName} ${data.lastName}`}
                        profession = {translate(data.profession, language)}
                        experience = {`${translate(data.experience)} 15 ${translate("years")}`}
                        statusStyle = "cancelled" />
                }
            })}
        </section>
    );
}