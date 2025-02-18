import { useTranslation } from "react-i18next"

export default function FooterNavLinks() {
    const { t } = useTranslation();

    return (
        <div className="footer-nav-links-container">
            <ul>
                <li><a href="#">{t("footer.footerLink1")}</a></li>
                <li><a href="#">FAQ({t("footer.footerLink2")})</a></li>
                <li><a href="#">{t("footer.footerLink3")}</a></li>
                <li><a href="#">{t("footer.footerLink4")}</a></li>
                <li><a href="#">{t("footer.footerLink5")}</a></li>
                <li><a href="#">{t("footer.footerLink6")}</a></li>
            </ul>
        </div>
    )
}