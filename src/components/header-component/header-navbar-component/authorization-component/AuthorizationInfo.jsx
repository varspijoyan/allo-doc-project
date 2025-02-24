import { useContext } from "react";
import AuthContext from "../../../../context/authorizationContext";
import { useSelector } from "react-redux"
import { getAuthorizationData, getUserData } from "../../../../store/selectors/authorizationSelector";

export default function AuthorizationInfo() {
    const user = useSelector(getUserData);
    return <p className="full-name">{user?.first_name} {user?.last_name}</p>
}