import { useTranslation } from "react-i18next"

export default function MakeAnAppointmentButtonComponent() {
    const { t } = useTranslation();
    return <button className="btn-1">{t("mainSection.buttonText1")}</button>
}