import Navbar from './Navbar'
import './App.css'
import Home from './Home'
import About from './About'
import CoreConcept from './Coreconcept'
import Howwork from './Howwork'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/core' element={<CoreConcept />} />
     <Route path='/working' element={<Howwork />} />

     </Routes>
     <Footer />
    </>
  )
}

export default App
