import './App.css'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import Dasboard from "./views/Dashboard"
import Inventory from './views/Inventory'
import Transactions from './views/Transactions'
import A from './components/AddInventory'
import B from './components/DashboardListBody'
import C from './components/DashboardListItem'
import D from './components/EditInventory'
import E from './components/SearchFilter'
import F from './components/Sidebar'
import G from './components/TransactionHistoryBody'
import H from './components/TransactionHistoryListItem'
import I from './components/DashboardContainer'
import J from './components/InventoryContainer'
import K from './components/TransactionHistoryContainer'

function App() {

  return (
    <div className='app'>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Dasboard/>} />
          <Route path='/inventory' element={<Inventory/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/a' element={<A/>} />
          <Route path='/b' element={<B/>} />
          <Route path='/c' element={<C/>} />
          <Route path='/d' element={<D/>} />
          <Route path='/e' element={<E/>} />
          <Route path='/f' element={<F/>} />
          <Route path='/g' element={<G/>} />
          <Route path='/h' element={<H/>} />
          <Route path='/i' element={<I/>} />
          <Route path='/j' element={<J/>} />
          <Route path='/k' element={<K/>} />
        </Routes>
      </DataProvider>
    </div>
  )
}

export default App
