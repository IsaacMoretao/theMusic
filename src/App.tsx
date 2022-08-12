import './input.css'
import { Principal } from './Pages/Principal'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal/>}/>
    </Routes>
  )
}

export default App
