import HeaderLogoComponent from "./header-logo-component/HeaderLogoComponent";
import HeaderNavBar from "./header-navbar-component/HeaderNavBar";
import Language from "./Language";
import "../../styles/Header.css"
export default function Header() {
    return (
        <header>
            <HeaderLogoComponent />
            <HeaderNavBar />
            <Language />
        </header>
    );
}