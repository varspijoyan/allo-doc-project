import Authorization from "./authorization-component/Authorization";
import NavBarLinksComponent from "./NavBarLinksComponent";
import NotificationComponent from "./NotificationComponent";

export default function HeaderNavBar() {
    return (
        <nav>
            <NavBarLinksComponent />
            <NotificationComponent />
            <Authorization />
        </nav>
    )
}