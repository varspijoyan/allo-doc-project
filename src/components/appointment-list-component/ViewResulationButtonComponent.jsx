import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";


export default function ViewResulationButtonComponent({appointmentDataStatus}) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [buttonStyle, setButtonStyle] = useState("");
    useEffect(() => {
        if(appointmentDataStatus.planned) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    },[appointmentDataStatus]) // based on appointmentStatus value, disbled value should be changed

    useEffect(() => {
        if(appointmentDataStatus.It_took_place) {
            setButtonStyle("it-took-place-bg-color");
        } else if(appointmentDataStatus.cancelled) {
            setButtonStyle("cancelled-bg-color");
        }
    }, [appointmentDataStatus])
    const { t } = useTranslation();
    return <button disabled={isDisabled} className={`appointment-btn-2 ${buttonStyle}`}>{t("myAppointmentsSection.buttonText2")}</button>    
}
