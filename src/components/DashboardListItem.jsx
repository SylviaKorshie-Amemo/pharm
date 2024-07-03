import React, { useContext, useEffect, useState } from 'react'
import "../styles/component-styles/dashboardlistitem.css"
import axios from 'axios';
import { DataContext } from '../context/DataContext';


const DashboardListItem = () => {

const {items, setItems, searchTerm} = useContext(DataContext)  
useEffect(()=>{
  const fetchSearchResult = async () =>{
    const response = await axios.get("http://localhost:3500/drugs");
    setItems(response.data)};

    fetchSearchResult();
<b>BbB</b>
}, [items]);

  return (
    <div className='dashboard-list-item'>
      {!searchTerm ? (
        items.map(items =>(
      <div className="dash-list" key={("http://localhost:3500/drugs")}>
        <div className="item-listing1">{items.id}</div>
        <div className="item-listing2">{items.drugName}</div>
        <div className="item-listing3">{items.description.slice(0, 40) + "..."}</div>
        <div className="item-listing4">{items.quantity}</div>
        <div className="item-listing5">{items.category}</div>
      </div> ))
      ):(
        items.map(items =>(
          <div className="dash-list" key={("http://localhost:3500/drugs")}>
            <div className="item-listing1">{items.id}</div>
            <div className="item-listing2">{items.drugName}</div>
            <div className="item-listing3">{items.description.slice(0, 40) + "..."}</div>
            <div className="item-listing4">{items.quantity}</div>
            <div className="item-listing5">{items.category}</div>
          </div>))
      )
  }
    </div>
  )
}

export default DashboardListItem
