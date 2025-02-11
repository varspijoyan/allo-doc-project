import ViewAppointmentButtonComponent from "./ViewAppointmentButtonComponent";
import ViewResulationButtonComponent from "./ViewResulationButtonComponent";
import calendarImg from "../../images/calendar.svg";
import clockImg from "../../images/clock.svg";
import chatImg from "../../images/conversation.svg";
import videoCameraImg from "../../images/video-camera.svg";
import docImg from "../../images/doc-img.svg";
import { translate } from "../../utils/translate";
import { useContext } from "react";
import { LanguageSwitch } from "../../contexts/LanguageSwitch";

export default function AddedAppointments({appointmentData}) {
    const {language} = useContext(LanguageSwitch);
    const statusType = appointmentData.status.planned
                        ? translate("Planned", language) 
                        : appointmentData.status.It_took_place 
                        ? translate("It_took_place", language)
                        : translate("Cancelled", language);
    const statusStyle = appointmentData.status.planned 
                        ? "planned"
                        : appointmentData.status.It_took_place
                        ? "it-took-place"
                        : "cancelled";

    return (
        <div className="appointment">
            <div className="appointment-date">
                <div className="date-info">
                    <div className="info">
                        <img src={calendarImg} alt="calendar image" />
                        <p className="date">{appointmentData.date}</p>
                    </div>
                    <div className="info">
                        <img src={clockImg} alt="clock image" />
                        <p className="time">{appointmentData.time}</p>
                    </div>
                    <div className="info">
                        <img src={appointmentData.connectedType === "Video_connection" ? videoCameraImg: chatImg} alt="chat" />
                        <p className="chat-type">{translate(appointmentData.connectedType, language)}</p>
                    </div>
                </div>
                <div className={`status ${statusStyle}`}>
                    <p className="status-type">{statusType}</p>
                </div>
            </div>
            <div className="doc-info-container">
                <div className="about">
                    <img src={docImg} alt="doctor image" />
                    <div className="doc-info">
                        <p className="full-name">{`${appointmentData.firstName} ${appointmentData.lastName}`}</p>
                        <p className="profession">{translate(appointmentData.profession, language)}</p>
                        <p className="experience">{`${translate("Experience", language)} ${appointmentData.experience} ${translate("years", language)}`}</p>
                    </div>
                </div>
                <div className="appointment-buttons">
                    <ViewAppointmentButtonComponent doctorId={appointmentData.id} />
                    <ViewResulationButtonComponent appointmentDataStatus={appointmentData.status}/>
                </div>
            </div>
        </div>
    )
}