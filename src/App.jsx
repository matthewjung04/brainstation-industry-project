import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ConsumerSellerPage from './pages/ConsumerSellerPage/ConsumerSellerPage.jsx'
import MonitoringDashboardPage from './pages/MonitoringDashboardPage/MonitoringDashboardPage.jsx';

import './App.scss'

function App() {
 
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/consumer-seller' element={<ConsumerSellerPage />}/>
        <Route path='/consumer-seller/:data' element={<ConsumerSellerPage />}/>
        <Route path='/monitoring-dashboard' element={<MonitoringDashboardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
