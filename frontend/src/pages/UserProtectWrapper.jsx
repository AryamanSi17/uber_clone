import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Redirect immediately if no token
        if (!token) {
            navigate('/login');
            return; // Stop further execution
        }

        // Verify the user's profile using the token
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data); // Set user data in context
                    setIsLoading(false); // Stop loading state
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem('token'); // Remove invalid token
                navigate('/login'); // Redirect to login
            });
    }, [token, navigate, setUser]);

    // Show loading screen while verifying user
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Render children if user is authenticated
    return <>{children}</>;
};

export default UserProtectWrapper;
