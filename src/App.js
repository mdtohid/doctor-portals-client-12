import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
