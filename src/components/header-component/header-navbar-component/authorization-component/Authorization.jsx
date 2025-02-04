import { useState } from "react";
import AuthorizationAvatar from "./AuthorizationAvatar";
import AuthorizationInfo from "./AuthorizationInfo";
import AuthorizationProfile from "./authorization-profile/AuthorizationProfile";

export default function Authorization() {
    const [isOpen, setOpenStatus] = useState(false);
    return (
        <div className="authorization" onClick={() => setOpenStatus(prev => !prev)}>
            <AuthorizationAvatar />
            <AuthorizationInfo />
            {isOpen && <AuthorizationProfile />}
        </div>
    )
}