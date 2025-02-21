import { createContext, useCallback, useEffect, useState } from "react";
import { getMe } from "../services/api/auth";
const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    
    const signIn = useCallback(({user, accessToken}) => {
        localStorage.setItem('accessToken', accessToken)
        setUser(user);
        setIsAuthorized(true);
    }, []);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken) {
            getMe().then(data => {
                setUser(data.result);
                setIsAuthorized(true);
            })
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setIsAuthorized(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            user, 
            signIn, 
            isAuthorized, 
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

