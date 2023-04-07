import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Home from './Components/Home/Home/Home';
import Login from './Components/Shared/Login/Login';
import Navbar from './Components/Shared/Navbar/Navbar';
import RequireAuth from './Components/Shared/RequireAuth/RequireAuth';
import Signup from './Components/Shared/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MyAppointments from './Components/Dashboard/MyAppointments/MyAppointments';
import MyReview from './Components/Dashboard/MyReview/MyReview';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard>
              <Route index element={<MyAppointments></MyAppointments>}></Route>
              <Route path='/myReview' element={<MyReview></MyReview>}></Route>
            </Dashboard>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
