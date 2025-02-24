import { useTranslation } from "react-i18next";
import logoutImg from "../../../../../images/logout.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../store/actions/authorizationActions";

export default function Logout() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    return (
        <div className="profile" onClick={() => {
            dispatch(logout())
        }}>
            <img src={logoutImg} alt="logout image" />
            <p className="title">{t("authProfile.profileLink3")}</p>
        </div>
    )
}