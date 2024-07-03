import React from 'react'
import "../styles/component-styles/dashboardcontainer.css"
import DashboardListBody from './DashboardListBody'

const DashboardContainer = () => {
  return (
    <body className="dash-cont">
      <header className="dash-header">
        <h1 className="dash-title">
          Dashboard
        </h1>
      </header>
      <main className="dash-list-cont">
        <DashboardListBody/>
      </main>
    </body>
  )
}

export default DashboardContainer
