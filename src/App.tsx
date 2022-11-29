import { useState } from 'react'
import Inicial from './Components/Inicial'
import Produtos from './Components/Produtos'
import Edicao from './Components/Edicao'
import { FaTrashAlt } from "react-icons/fa";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/Produtos' element={<Produtos/>}/>
        <Route path='/Edicao' element={<Edicao/>}/>
      </Routes>
    </Router>
  )
}
export default App
