
export default function NavBarLinksComponent() {
   
    return (
        <ul>
            <li><a href="#">{translate("How_to_use_?", language)}</a></li>
            <li><a href="#">{translate("My_appointments", language)}</a></li>
            <li><a href="#">{translate("Make_an_appointment_with_a_doctor", language)}</a></li>
        </ul>
    )
}