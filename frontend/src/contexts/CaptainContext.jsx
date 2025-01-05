import React, { createContext, useState ,useEffect} from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: ''
        }
    });
    useEffect(() => {
        console.log("Captain in context:", captain);
    }, [captain]);
    
    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;