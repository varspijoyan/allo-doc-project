import FooterTextContainer from "./FooterTextContainerComponent/FooterTextContainerComponent";
import "../../styles/Footer.css";
import FooterNavLinks from "./FooterNavLinks/FooterNavLinks";
import messageImg from "../../images/message.svg";
import locationImg from "../../images/place.svg";
import clockImg from "../../images/clock.svg";
import phoneImg from "../../images/phone-call.svg";


export default function Footer() {
    const {language} = useContext(LanguageSwitch);
    return (
        <footer>
            <FooterTextContainer />
            <FooterNavLinks />
            <div className="info-footer">
                <div className="information">
                    <img src={messageImg} alt="message image" />
                    <p>allodoc@mail.com</p>
                </div>
                <div className="information">
                    <img src={locationImg} alt="location image" />
                    <p>{translate("Moscow_._st_._,_Lenina_54_,_office_51", language)}</p>
                </div>
                <div className="information">
                    <img src={clockImg} alt="clock image" />
                    <p>{translate("Mon_-_Sun_from_9_AM_to_6_PM", language)}</p>
                </div>
                <div className="information">
                    <img src={phoneImg} alt="phone image" />
                    <p>8 800 555 35 35</p>
                </div>
            </div>
        </footer>
    )
}