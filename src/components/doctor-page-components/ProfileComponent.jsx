import { useTranslation } from "react-i18next";
import vector from "../../images/Vector2.svg";
import doctorImage from "../../images/doc-img.svg";
import { useEffect, useState } from "react";

export default function ProfileComponent({ docInfo }) {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('ru');  
  useEffect(() => {
    // if we remove this, by navigating to doctor page the page will be showed from the bottom 
    window.scrollTo(0, 0); // when we will navigate to the doctor page, by adding scrollTo(0, 0) this should show the page from the top 
  }, []);

  return (
    <section className="doc-profile-container">
        <div className="navigations">
            <div className="navigation">
                <p>{t("doctorPage.topSection.link1")}</p>
                <img src={vector} alt="vector image" />
            </div>
            <div className="navigation">
                <p>{t("doctorPage.topSection.link2")}</p>
                <img src={vector} alt="vector image" />
            </div>
                <div className="navigation">
                <p>{t("doctorPage.topSection.link3")}</p>
            </div>
        </div>
        <div className="doc-profile">
            <div className="doc-profile-info">
            <img src={doctorImage} alt="doctor image" />
            <div className="name-info">
                <h2 className="doc-name">{`${docInfo.firstName} ${docInfo.lastName}`}</h2>
                <h3 className="doc-profession">{t(docInfo.profession, language)}</h3>
                <p className="doc-experience">{t("myAppointmentsSection.doctorExperience")} {t(docInfo.experience)} {t("myAppointmentsSection.experienceYear")}</p>
            </div>
            <div className="duration-and-price">
                <p className="price">900 ₽ / {t("doctorPage.topSection.priceFor")}</p>
                <p className="duration">30 {t("doctorPage.topSection.time")}</p>
            </div>
            </div>
        </div>
    </section>
  );
}
