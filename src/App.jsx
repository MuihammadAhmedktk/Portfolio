import './App.css'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Services from './pages/Services'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Contact from './pages/Contact'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Routes >
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route  path="/services" element={<Services />} />
    <Route  path="/Resume" element={<Resume />} />
    <Route path='/Work' element={<Work />} />
    <Route path='/Contact' element={<Contact />} />
    </Route>
    </Routes>
    </BrowserRouter>
    
    
    
  )
}

export default App
