import { useState, useEffect } from "react"


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
    const {language} = useContext(LanguageSwitch);
    return <button disabled={isDisabled} className={`appointment-btn-2 ${buttonStyle}`}>{translate("View", language)} {translate("the_resulation", language)}</button>    
}
