import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/usermaster/Login';
import Register from './components/usermaster/Register';
import Navbar from './components/usermaster/dashboardComponent/Navbar';
import Header from './components/usermaster/dashboardComponent/Header';
import Dashboard from './components/usermaster/dashboardComponent/Dashboard';
import Shipments from './components/usermaster/dashboardComponent/Shipments';
import ForgotPassword from './components/usermaster/dashboardComponent/ForgotPassword';
import PasswordReset from './components/usermaster/dashboardComponent/PasswordReset';
import Fpassword from './components/usermaster/dashboardComponent/Fpassword';
import {ToastContainer} from 'react-toastify';
function App() {

let auth = window.localStorage.getItem('st')
 if (auth) {
  return (
    <div className="App">
    <ToastContainer theme='colored'></ToastContainer>
    <BrowserRouter>
    <Header/>
    <Navbar>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
      {/* <Route path='/login' element={<Login/>}></Route> */}
     
      <Route path='/shipments' element={<><Shipments/></>}/>

    </Routes>
    </Navbar>
    </BrowserRouter>
    </div>
  );
}
else{
  return(
    
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

               <Route path='/password-reset' element={<PasswordReset/>}></Route>
      <Route path='/forgotpassword/:id/:token' element={<ForgotPassword/>}></Route> 

            <Route path='/fpass' element={<Fpassword/>} />
          </Routes>
        </BrowserRouter>
        </div>
  )
}
}

export default App;
