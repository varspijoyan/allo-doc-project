import ViewAppointmentButtonComponent from "./ViewAppointmentButtonComponent";
import ViewResulationButtonComponent from "./ViewResulationButtonComponent";

export default function AddedAppointments(props) {
    return (
        <div className="appointment">
            <div className="appointment-date">
                <div className="date-info">
                    <div className="info">
                        <img src={props.calendarImage} alt="calendar image" />
                        <p className="date">{props.appointmentDate}</p>
                    </div>
                    <div className="info">
                        <img src={props.clockImage} alt="clock image" />
                        <p className="time">{props.time}</p>
                    </div>
                    <div className="info">
                        <img src={props.chatImage} alt="chat" />
                        <p className="chat-type">{props.connectionType}</p>
                    </div>
                </div>
                <div className={`status ${props.statusStyle}`}>
                    <p className="status-type">{props.status}</p>
                </div>
            </div>
            <div className="doc-info-container">
                <div className="about">
                    <img src={props.docImage} alt="doctor image" />
                    <div className="doc-info">
                        <p className="full-name">{props.fullName}</p>
                        <p className="profession">{props.profession}</p>
                        <p className="experience">{props.experience}</p>
                    </div>
                </div>
                <div className="appointment-buttons">
                    <ViewAppointmentButtonComponent />
                    <ViewResulationButtonComponent />
                </div>
            </div>
        </div>
    )
}