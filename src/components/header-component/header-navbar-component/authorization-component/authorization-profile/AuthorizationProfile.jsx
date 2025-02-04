import CreditCard from "./CreditCard";
import FAQ from "./FAQ";
import Logout from "./Logout";
import MyProfile from "./MyProfile";

export default function AuthorizationProfile() {
    return (
        <div className="authorization-profile">
            <MyProfile />
            <CreditCard />
            <FAQ />
            <Logout />
        </div>
    )
}