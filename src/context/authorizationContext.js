import { createContext, useCallback, useEffect, useState } from "react";

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
            setIsAuthorized(true);
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

