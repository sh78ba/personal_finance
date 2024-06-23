
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [useremail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("useremail");
        setToken(storedToken);
        setUsername(storedUsername);
        setUserEmail(storedEmail);
        setLoading(false);
    }, []);

    const handleLogout = () => {
        setToken(null);
        setUsername(null);
        setUserEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("useremail");
    };

    return (
        <AuthContext.Provider value={{ token, setToken, username, setUsername, useremail, setUserEmail, loading,handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
