import { useContext } from "react"
import AuthContext from "../../../../context/authorizationContext"

export default function AuthorizationInfo() {
    const {user} = useContext(AuthContext);
    return <p className="full-name">{user.first_name} {user.last_name}</p>
}