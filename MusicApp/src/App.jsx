import {Routes, Route} from 'react-router-dom';
import './App.css'
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';


function App() {

  return (
      <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
  )
}

export default App
