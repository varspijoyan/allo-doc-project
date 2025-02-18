import { useTranslation } from "react-i18next";
import creditCardImg from "../../../../../images/credit-card.svg";

export default function CreditCard() {
    const { t } = useTranslation();
    return (
        <div className="profile">
            <img src={creditCardImg} alt="Credit card image" />
            <p className="title">{t("authProfile.profileLink2")}</p>
        </div>
    )
}