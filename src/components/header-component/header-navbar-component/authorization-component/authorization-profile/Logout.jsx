import { useTranslation } from "react-i18next";
import logoutImg from "../../../../../images/logout.svg";

export default function Logout() {
    const { t } = useTranslation();

    return (
        <div className="profile">
            <img src={logoutImg} alt="logout image" />
            <p className="title">{t("authProfile.profileLink3")}</p>
        </div>
    )
}