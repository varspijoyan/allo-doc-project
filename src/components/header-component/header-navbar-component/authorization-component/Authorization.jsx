import { useEffect, useState, useRef } from "react";
import AuthorizationAvatar from "./AuthorizationAvatar";
import AuthorizationInfo from "./AuthorizationInfo";
import AuthorizationProfile from "./authorization-profile/AuthorizationProfile";

export default function Authorization() {
    const [isOpen, setOpenStatus] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOnBody = (event) => {
            // ref.current - we check if the current (i.e <div className="authorization">) is exist and has no errors
            // !ref.current.contains(event.target) - if we clicked outside the component (i.e on body)
            // if both are true then we set the status to false (the previous status)
            // which by clicking outside the component (on body) the <AuthorizationProfile /> will be closed
            // event.target - body
            if(ref.current && !ref.current.contains(event.target)) {
                setOpenStatus(false);
            }
        };

        document.body.addEventListener("click", handleClickOnBody);
        
        return () => {
            document.body.removeEventListener("click", handleClickOnBody);
        }
    }, []);

    return (
        <div className="authorization" ref={ref} onClick={() => setOpenStatus(prev => !prev)}>
            <AuthorizationAvatar />
            <AuthorizationInfo />
            {isOpen && <AuthorizationProfile />}
        </div>
    )
}