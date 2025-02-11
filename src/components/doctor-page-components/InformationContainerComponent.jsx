import { useContext } from "react"
import { LanguageSwitch } from "../../contexts/LanguageSwitch"
import calendar from "../../images/appointment 1.svg";
import education from "../../images/mortarboard 1.svg";
import emergencyLogoImg from "../../images/Group 541.svg";
import moreInfoImg from "../../images/Group 542.svg";
import { translate } from "../../utils/translate";

export default function InformationContainerComponent({docInfo}) {
    const {language} = useContext(LanguageSwitch);
    return (
        <section className="information-container">
            <div className="all-informations">
                <div className="inf">
                    <div className="inf-heading">
                        <img src={calendar} alt="calendar image" />
                        <p className="highlight-blue-color">{translate("Next_entry", language)}</p>
                    </div>
                    <p className="desc">{docInfo.date}</p>
                </div>
                <div className="inf">
                    <div className="inf-heading">
                        <img src={education} alt="image" />
                        <p className="highlight-blue-color">{translate("Education", language)}</p>
                    </div>
                    <p className="desc">{docInfo.admissionYear} - {translate(docInfo.education, language)}</p>
                </div>
                <div className="inf">
                    <div className="inf-heading">
                        <img src={emergencyLogoImg} alt="image icon" />
                        <p className="highlight-blue-color">{translate("Specializes_in_treatment", language)}</p>
                    </div>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="inf">
                    <div className="inf-heading">
                        <img src={moreInfoImg} alt="image icon" />
                        <p className="highlight-blue-color">{translate("Additionally", language)}</p>
                    </div>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </section>
    )
}