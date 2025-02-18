
import userImg from "../../../../../images/user.svg";

export default function MyProfile() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="profile">
            <img src={userImg} alt="User image" />
            <p className="title">{translate("My_profile", language)}</p>
        </div>
    )
}