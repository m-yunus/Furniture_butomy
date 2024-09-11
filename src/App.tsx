import { Outlet } from "react-router-dom";
import { Footer, Navbar } from './components/common/index';

import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  
  return (
    <>
  
      <Navbar />
      <ToastContainer/>
      <Outlet />
     
      <Footer />
    </>
  )
}

export default App;