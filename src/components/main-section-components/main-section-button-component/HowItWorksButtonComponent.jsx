import { useTranslation } from "react-i18next"

export default function HowItWorksButtonComponent() {
    const { t } = useTranslation();
    return <button className="btn-2">{t("mainSection.buttonText2")}</button>
}