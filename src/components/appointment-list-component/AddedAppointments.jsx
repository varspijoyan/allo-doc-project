import ViewAppointmentButtonComponent from "./ViewAppointmentButtonComponent";
import ViewResulationButtonComponent from "./ViewResulationButtonComponent";
import calendarImg from "../../images/calendar.svg";
import clockImg from "../../images/clock.svg";
import chatImg from "../../images/conversation.svg";
import videoCameraImg from "../../images/video-camera.svg";
import docImg from "../../images/doc-img.svg";
import { useTranslation } from "react-i18next";

export default function AddedAppointments({appointmentData}) {
    const { t } = useTranslation();

    const statusType = appointmentData.status.planned
                        ? t("myAppointmentsSection.status1") 
                        : appointmentData.status.It_took_place 
                        ? t("myAppointmentsSection.status2")
                        : t("myAppointmentsSection.status3")
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
                        <img src={appointmentData.connectedType === "myAppointmentsSection.connectionType1" ? videoCameraImg: chatImg} alt="chat" />
                        <p className="chat-type">{t(appointmentData.connectedType)}</p>
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
                        <p className="profession">{t(appointmentData.profession)}</p>
                        <p className="experience">{`${t("myAppointmentsSection.doctorExperience")} ${appointmentData.experience} ${t("myAppointmentsSection.experienceYear")}`}</p>
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