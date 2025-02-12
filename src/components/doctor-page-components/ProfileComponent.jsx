import { useContext } from "react";
import { LanguageSwitch } from "../../contexts/LanguageSwitch";
import { translate } from "../../utils/translate";
import vector from "../../images/Vector2.svg";
import doctorImage from "../../images/doc-img.svg";

export default function ProfileComponent({ docInfo }) {
  const { language } = useContext(LanguageSwitch);
  return (
    <section className="doc-profile-container">
        <div className="navigations">
            <div className="navigation">
                <p>{translate("Doctors", language)}</p>
                <img src={vector} alt="vector image" />
            </div>
            <div className="navigation">
                <p>{translate("Pediatrician", language)}</p>
                <img src={vector} alt="vector image" />
            </div>
                <div className="navigation">
                <p>{translate("Doctor_Profile", language)}</p>
            </div>
        </div>
        <div className="doc-profile">
            <div className="doc-profile-info">
            <img src={doctorImage} alt="doctor image" />
            <div className="name-info">
                <h2 className="doc-name">{`${docInfo.firstName} ${docInfo.lastName}`}</h2>
                <h3 className="doc-profession">{translate(docInfo.profession, language)}</h3>
                <p className="doc-experience">{translate("Experience", language)} {translate(docInfo.experience)} {translate("years", language)}</p>
            </div>
            <div className="duration-and-price">
                <p className="price">900 ₽ / {translate("consultation", language)}</p>
                <p className="duration">30 {translate("minutes", language)}</p>
            </div>
            </div>
        </div>
    </section>
  );
}
