import { useTranslation } from "react-i18next"

export default function NavBarLinksComponent() {
    const { t } = useTranslation();
    return (
        <ul>
            <li><a href="#">{t("header.navlink1")}</a></li>
            <li><a href="#">{t("header.navlink2")}</a></li>
            <li><a href="#">{t("header.navlink3")}</a></li>
        </ul>
    );
}