import { useContext } from "react";
import AuthContext from "../../../../context/authorizationContext";
import { useSelector } from "react-redux"
import { getAuthorizationData } from "../../../../store/selectors/authorizationSelector";

export default function AuthorizationInfo() {
    const {user} = useContext(AuthContext);
    // const authData = useSelector(getAuthorizationData);
    // const user = authData.authorization;
    return <p className="full-name">{user.first_name} {user.last_name}</p>
}