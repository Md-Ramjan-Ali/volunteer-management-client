import React from 'react';
import { Outlet } from 'react-router';
// import { ToastContainer } from 'react-toastify';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const AuthLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default AuthLayout;