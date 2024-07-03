import React from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    
    const [test, setTest] = useState("test");
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState(items);
    // const handleSearch = ()=>{
    //     const value= even.target.value.toLowerCase();
    //     const filteredItems = items.filter((items)=>{
    //         const itemName = items.drugName.toLowerCase();
    //         return itemName.includes(searchTerm)
    //     })
    // }
    const handleSearch = () =>{
        const filteredData = items.filter(item => item.name.includes(searchTerm));
        setItems(filteredData);
    }

    return (
        <DataContext.Provider value={{test, items, setItems, searchTerm, setSearchTerm, handleSearch}}>
            {children}
        </DataContext.Provider>
    )
}


