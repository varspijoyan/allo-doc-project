import { api } from "./api";

export async function login(email) {
    try {
        const res = await api.post("/user/auth/patient/sign_in", {email});
        return res.data;
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

export async function getUser() {
    try {
        const req = await api.get('/api/user/me');
        return req.data;
    } catch (error) {
        console.log("error");
    }
}