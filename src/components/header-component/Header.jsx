import HeaderLogoComponent from "./header-logo-component/HeaderLogoComponent";
import HeaderNavBar from "./header-navbar-component/HeaderNavBar";
import Language from "./Language";

export default function Header() {
    return (
        <header>
            <HeaderLogoComponent />
            <HeaderNavBar />
            <Language />
        </header>
    )
}