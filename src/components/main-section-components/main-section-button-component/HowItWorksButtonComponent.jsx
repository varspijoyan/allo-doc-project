import { useContext } from "react"
import { LanguageSwitch } from "../../../contexts/LanguageSwitch"
import { translate } from "../../../utils/translate";

export default function HowItWorksButtonComponent() {
    const {language} = useContext(LanguageSwitch);
    return <button className="btn-2">{translate("How_it_works_?", language)}</button>
}