import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const AuthLayout = () => {
  const {state}=useNavigation()
  return (
    <div>
      <Navbar></Navbar>
      {state == "loading" ? <Loading /> : <Outlet></Outlet>}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default AuthLayout;