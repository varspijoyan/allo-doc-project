import img from "../../images/OBJECTS.svg";
import AppointmentTextContainerComponent from "./appointment-text-container-component/AppointmentTextContainerComponent";
import "../../styles/Appointment.css";
export default function AppointmentSection() {
    return (
        <section className="appointment-section">
            <img src={img} alt="Image" /> 
            <AppointmentTextContainerComponent />        
        </section>
    )
}