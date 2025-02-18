
import creditCardImg from "../../../../../images/credit-card.svg";

export default function CreditCard() {
    const {language} = useContext(LanguageSwitch);
    return (
        <div className="profile">
            <img src={creditCardImg} alt="Credit card image" />
            <p className="title">{translate("Top_up_the_balance", language)}</p>
        </div>
    )
}