import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ConsumerPage from './pages/ConsumerPage/ConsumerPage.jsx'
import SellerPage from './pages/SellerPage/SellerPage.jsx'
import ProductInspectorPage from './pages/ProductInspectorPage/ProductInspectorPage.jsx'
import './App.scss'

function App() {
 
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/consumer' element={<ConsumerPage />}/>
        <Route path='/consumer/:item' element={<ConsumerPage />}/>
        <Route path='/seller' element={<SellerPage />}/>
        <Route path='/seller/:item' element={<SellerPage />}/>
        <Route path='/product-inspector' element={<ProductInspectorPage />}/>
        <Route path='/product-inspector/:item' element={<ProductInspectorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
