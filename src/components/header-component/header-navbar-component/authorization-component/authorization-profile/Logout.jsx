import { useContext } from "react";
import logoutImg from "../../../../../images/logout.svg";
import { LanguageSwitch } from "../../../../../contexts/LanguageSwitch";
import { translate } from "../../../../../utils/translate";

export default function Logout() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="profile">
            <img src={logoutImg} alt="logout image" />
            <p className="title">{translate("Logout", language)}</p>
        </div>
    )
}