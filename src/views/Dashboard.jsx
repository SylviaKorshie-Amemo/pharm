import React from 'react'
import "../styles/view-styles/dashboard.css"
import Sidebar from '../components/Sidebar'
import DashboardContainer from '../components/DashboardContainer'
import DashboardListBody from '../components/DashboardListBody'

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <Sidebar/>
      <DashboardContainer/>
    </div>
  )
}

export default Dashboard
