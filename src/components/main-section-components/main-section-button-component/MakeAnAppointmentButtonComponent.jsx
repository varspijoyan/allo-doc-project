
export default function MakeAnAppointmentButtonComponent() {
    const {language} = useContext(LanguageSwitch);
    return <button className="btn-1">{translate("Make_an_appointment", language)}</button>
}