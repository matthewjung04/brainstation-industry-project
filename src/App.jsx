import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'
import ProofOfConceptPage from './pages/ProofOfConceptPage/ProofOfConceptPage.jsx'
import './App.scss'

function App() {
 
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/proof-of-concept' element={<ProofOfConceptPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
