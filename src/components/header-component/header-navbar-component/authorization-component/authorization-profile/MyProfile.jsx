import { useContext } from "react";
import userImg from "../../../../../images/user.svg";
import { LanguageSwitch } from "../../../../../contexts/LanguageSwitch";
import { translate } from "../../../../../utils/translate";
export default function MyProfile() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="profile">
            <img src={userImg} alt="User image" />
            <p className="title">{translate("My_profile", language)}</p>
        </div>
    )
}