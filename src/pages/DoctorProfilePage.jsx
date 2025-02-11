import { useParams } from "react-router-dom";
import ProfileComponent from "../components/doctor-page-components/ProfileComponent.jsx";
import { useEffect, useState } from "react";
import docInfo from "../locals/appointmentInfo.json";

export default function DoctorProfilePage() {
    const [doctor, setDoctor] = useState({});
    const { docId } = useParams();

    useEffect(() => {
        const foundDoctor = docInfo.find(doc => doc.id === docId);

        if (foundDoctor) {
            setDoctor(foundDoctor);
        }
    }, [docId]);

    if (!doctor) {
        return <h1>Doctor not found</h1>;
    }

    return <ProfileComponent />;
}
