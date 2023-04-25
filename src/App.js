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
import MyAppointments from './Components/Dashboard/MyAppoitments/MyAppointments';
import MyReview from './Components/Dashboard/MyReview/MyReview';
import MyHistory from './Components/Dashboard/MyHistory/MyHistory';
import Users from './Components/Dashboard/Users/Users';
import RequireAdmin from './Components/Shared/RequireAdmin/RequireAdmin';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import ManageDoctor from './Components/Dashboard/ManageDoctor/ManageDoctor';
import Payment from './Components/Dashboard/Payment/Payment';


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
              </Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyAppointments/>} />
          <Route path='review' element={<MyReview/>} />
          <Route path='history' element={<MyHistory/>} />
          <Route path='/dashboard/payment/:id' element={<Payment/>} />
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>} />
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor/></RequireAdmin>} />
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>} />
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor/></RequireAdmin>} />
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
