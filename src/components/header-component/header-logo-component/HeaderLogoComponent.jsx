import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";

export default function HeaderLogoComponent() {
    return <Link to="/"><img className="logo" src={logo} alt="Logo image" /></Link>
}