import React from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    
    const [test, setTest] = useState("test")

    return (
        <DataContext.Provider value={{test}}>
            {children}
        </DataContext.Provider>
    )
}


