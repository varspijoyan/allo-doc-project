import { useActionState, useState } from "react";
import { verify, login } from "../services/api/auth";
import "../styles/SignIn.css";
import UsernameForm from "./UsernameForm";
import { api } from "../services/api/api";

export default function SignInPage() {
  const [isShow, setIsShow] = useState(false); // to show otp input field
  const [isOtpVerified, setIsOtpVerified] = useState(false); // to show username form after otp verification
  const [data, action, isPending] = useActionState(async (data, state) => {
    const email = state.get("email");
    const otp = state.get("otp");

    if (otp) {
      if (!email || !otp) {
        return { data: {}, error: "Email or OTP is required" };
      } else {
        try {
          const data = await verify(email, otp);
          if (data.status === 200) {
            const accessToken = data.result.accessToken;
            localStorage.setItem('accessToken', accessToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            setIsOtpVerified(true)
          }
          return { data, error: null };
        } catch (error) {
          return {
            data: {},
            error: "Something went wrong while trying to verify",
          };
        }
      }
    } else {
      if (!email) {
        return { data: {}, error: "Email is required" };
      } else {
        try {
          const data = await login(email);
          if (data.status === 200) {
            setIsShow(true);
          }
        } catch (error) {
          return {
            data: {},
            error: "Something went wrong while sending the email",
          };
        }
      }
    }
  });

  return (
    <>
      {isOtpVerified ? (
        <UsernameForm /> 
      ) : (
        <div className="sign-in-form">
          <h1>Sign In</h1>
          <form className="signin-form" action={action}>
              <input type="email" name="email" id="email" placeholder="Enter your email address" />
              { isShow && <input type="text" name="otp" id="otp" placeholder="Enter your verification code"/> }
              <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </> 
    
  );
}
