import { Routes, Route, Link } from 'react-router-dom';
import  { Link } from 'react-router-dom';
import  NavBar from './NavBar.jsx';
import server from "./server.js"
import './App.css'


const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/employees' element={<ul><li>Employees</li></ul>} />   
      </Routes>
    </>
  )
}

export default App;
