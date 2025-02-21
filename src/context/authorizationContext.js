import { createContext, useCallback, useEffect, useState } from "react";
import { getMe } from "../services/api/auth";
import { api } from "../services/api/api";
const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    
    const signIn = useCallback(({user}) => {
        setUser(user);
        setIsAuthorized(true);
    }, []);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        if(accessToken) {
            getMe().then(data => {
                setUser(data.result);
                setIsAuthorized(true);
            })
        }
    }, [isAuthorized]);

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

