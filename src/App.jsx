import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Contact from './Contact'
import ContextApi from './ContextApi'
import Hooks from './Hooks/Hooks'
import Navbar from './Navbar'


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ContextApi/>} />
            <Route path="/hooks" element={<Hooks/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App