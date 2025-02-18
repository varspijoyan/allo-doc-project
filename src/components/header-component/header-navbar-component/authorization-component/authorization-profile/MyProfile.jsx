import { useTranslation } from "react-i18next";
import userImg from "../../../../../images/user.svg";

export default function MyProfile() {
    const { t } = useTranslation();
    return (
        <div className="profile">
            <img src={userImg} alt="User image" />
            <p className="title">{t("authProfile.profileLink1")}</p>
        </div>
    )
}