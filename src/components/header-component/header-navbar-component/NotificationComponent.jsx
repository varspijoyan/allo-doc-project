import notification from "../../../images/Уведомления.svg";
export default function NotificationComponent() {
    return (
        <div className="notifications">
            <img src={notification} alt="Notification Image" />
            <div className="amount">3</div>
        </div>
    )
}