import React from 'react'
import "../styles/component-styles/dashboardlistbody.css"
import DashboardListItem from './DashboardListItem'
import SearchFilter from './SearchFilter'


const DashboardListBody = () => {
  return (
      <body className="dash-list-body">
        <SearchFilter/>
        <main className="dash-list-item">
          <div className="list-header">
            <ul className='list-container'>
                <li className='dash-list-id'>ID</li>
                <li className='dash-list-name'>Name</li>
                <li className='dash-list-desc'>Description</li>
                <li className='dash-list-quant'>Quantity</li>
                <li className='dash-list-cat'>Category</li>
            </ul>
          </div>
            <div className="list-list">
              <DashboardListItem/>
            </div>
        </main>
      </body>
  )
}

export default DashboardListBody
