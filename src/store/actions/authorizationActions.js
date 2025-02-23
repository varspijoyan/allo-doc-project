import { GET_USER, LOGOUT, SIGN_IN } from "../types/authorizationType";

export function signIn(user) {
    return {
        type: SIGN_IN,
        data: user
    }
}

export function getMe() {
    return {
        type: GET_USER,

    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}