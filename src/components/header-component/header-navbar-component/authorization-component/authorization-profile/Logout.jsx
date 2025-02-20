import { useTranslation } from "react-i18next";
import logoutImg from "../../../../../images/logout.svg";
import { useContext } from "react";
import AuthContext from "../../../../../context/authorizationContext";

export default function Logout() {
    const { t } = useTranslation();
    const {logout} = useContext(AuthContext);
    return (
        <div className="profile" onClick={() => {
            logout();
        }}>
            <img src={logoutImg} alt="logout image" />
            <p className="title">{t("authProfile.profileLink3")}</p>
        </div>
    )
}