import { useContext } from "react";
import logo_footer from "../../../images/logo-footer.svg";
import apple_logo from "../../../images/Logo-apple.svg";
import play_market_logo from "../../../images/Logo-playmarket.svg";
import { LanguageSwitch } from "../../../contexts/LanguageSwitch";
import { translate } from "../../../utils/translate";

export default function FooterTextContainer() {
  const { language } = useContext(LanguageSwitch);
  return (
    <div className="footer-text-container">
      <img src={logo_footer} alt="logo image" />
      <div className="text">
        <p className="text-part-1">
          {translate("Online", language)} -{" "}
          {translate("consultations", language)}{" "}
          {translate("of_specialists_doctors", language)},{" "}
          {translate("what_this_service_offers", language)}.
        </p>
        <p className="text-part-2">
          {translate("In", language)} {translate("our", language)}{" "}
          {translate("web", language)} {translate("and", language)}{" "}
          {translate("mobile", language)} {translate("application", language)}{" "}
          {translate("you_will_find", language)}{" "}
          {translate("doctors", language)} {translate("experts", language)},{" "}
          {translate("who_will_provide_you", language)}{" "}
          {translate("personalized", language)} {translate("help", language)}{" "}
          {translate("online", language)} 24/7.
        </p>
      </div>
      <div className="links">
        <div className="icon">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="icon">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className="icon">
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="application-download-links">
        <div className="footer-link">
          <img src={apple_logo} alt="apple logo" />
          <div className="logo-link">
            <div className="link-text">Download on the</div>
            <div className="font-weight-and-size">App Store</div>
          </div>
        </div>
        <div className="footer-link">
          <img src={play_market_logo} alt="play market logo" />
          <div className="logo-link">
            <div className="link-text">GET IT ON</div>
            <div className="font-weight-and-size">Google Play</div>
          </div>
        </div>
      </div>
    </div>
  );
}
