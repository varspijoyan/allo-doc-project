import AppointmentList from "../components/appointment-list-component/AppointmentList";
import AppointmentSection from "../components/appointment-section-component/AppointmentSection";
import MainSection from "../components/main-section-components/MainSection";

export default function MainPage() {
    return (
        <>
            <MainSection />
            <AppointmentSection />
            <AppointmentList />
        </>
    );
}