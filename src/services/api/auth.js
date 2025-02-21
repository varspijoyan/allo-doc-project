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

export async function getMe() {
    try {
        const res = await api.get('/user/me');
        return res.data;
    } catch (error) {
        console.error("An error occurred while getting the user info");
    }
}

export async function updateMe(first_name, last_name) {
    try {
        const res = await api.put('/user/update_me', {first_name, last_name});
        return res.data;
    } catch (error) {
        console.error("An error occurred while updating user first name and last name");
    }
}