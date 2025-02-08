import { useContext, useState, useEffect } from "react"
import { LanguageSwitch } from "../../contexts/LanguageSwitch"
import { translate } from "../../utils/translate";

export default function ViewResulationButtonComponent({appointmentDataStatus}) {
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        setIsDisabled(prev => !prev);
        console.log("Effect hook");
    }, [appointmentDataStatus]); // based on appointmentStatus value, disbled value should be changed
    const {language} = useContext(LanguageSwitch);
    return <button disabled={isDisabled} className="appointment-btn-2">{translate("View", language)} {translate("the_resulation", language)}</button>    
}
