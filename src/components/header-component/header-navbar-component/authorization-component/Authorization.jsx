import AuthorizationAvatar from "./AuthorizationAvatar";
import AuthorizationInfo from "./AuthorizationInfo";

export default function Authorization() {
    return (
        <div className="authorization">
            <AuthorizationAvatar />
            <AuthorizationInfo />
        </div>
    )
}