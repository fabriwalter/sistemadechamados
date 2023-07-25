import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function signIn(email, password) {
        console.log(email);
        console.log(password);
        alert('LOGADO COM SUCESO');
    }
    
    return(
        <AuthContext.Provider 
        value={{
            signed: !!null,
            user,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;