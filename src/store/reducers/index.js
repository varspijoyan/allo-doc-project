import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";

const rootReducer = combineReducers({authorization: authorizationReducer});
export default rootReducer;