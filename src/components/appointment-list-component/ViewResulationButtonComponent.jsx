import { useContext } from "react"
import { LanguageSwitch } from "../../contexts/LanguageSwitch"
import { translate } from "../../utils/translate";

export default function ViewResulationButtonComponent() {
    const {language} = useContext(LanguageSwitch);
    return <button className="appointment-btn-2">{translate("View", language)} {translate("the_resulation", language)}</button>    
}
