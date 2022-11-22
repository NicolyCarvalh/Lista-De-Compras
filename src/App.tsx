import { useState } from 'react'
import Inicial from './Components/Inicial'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicial/>}/>
      </Routes>
    </Router>
  )
}
export default App
