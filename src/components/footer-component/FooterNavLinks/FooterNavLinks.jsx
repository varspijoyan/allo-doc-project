export default function FooterNavLinks() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="footer-nav-links-container">
            <ul>
                <li><a href="#">{translate("How_to_use_?", language)}</a></li>
                <li><a href="#">FAQ({translate("answers_to_the_questions", language)})</a></li>
                <li><a href="#">{translate("For", language)} {translate("doctors", language)}</a></li>
                <li><a href="#">{translate("About_the_service", language)}</a></li>
                <li><a href="#">{translate("Contacts", language)}</a></li>
                <li><a href="#">{translate("User_agreement", language)}</a></li>
            </ul>
        </div>
    )
}