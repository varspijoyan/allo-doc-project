import { GET_USER, LOGOUT, SIGN_IN } from "../types/authorizationType";

export function authorizationReducer(currentState = {user: null, isAuthorized: false}, action) {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...currentState,
                user: action.data,
                isAuthorized: true
            }
        case GET_USER:
            return {
                ...currentState
            }
        case LOGOUT:
            return {
                ...currentState,
                user: null,
                isAuthorized: false
            }
        default: 
            return currentState;

    }
}