
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={SignUp}  path='/' />
        <Route Component={Login}   path='/login'/>
        <Route Component={Home}  path='/home' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
