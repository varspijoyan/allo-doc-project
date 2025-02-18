
import logoutImg from "../../../../../images/logout.svg";

export default function Logout() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="profile">
            <img src={logoutImg} alt="logout image" />
            <p className="title">{translate("Logout", language)}</p>
        </div>
    )
}