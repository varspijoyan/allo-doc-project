import { api } from "./api";

export async function login(email) {
    try {
        const res = await api.post("/user/auth/patient/sign_in", {email});
        return res.date;
    } catch (error) {
        console.error("An error occurred while trying to send email", error);
    }
}

export async function verify(email, otp) {
    try {
        const res = await api.post("/user/auth/verify_otp", {email, otp});
        return res.data;
    } catch (error) {
        console.error("An error occurred while trying to send verification", error);
    }
}