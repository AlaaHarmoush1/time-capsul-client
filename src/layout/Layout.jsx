import React from 'react';
import Navbar from "./navbar";
import Footer from './footer';
import '../styles/index.css'
import "../styles/utilities.css";


const Layout = ({ children }) => {
  return (
    <>
    <div className="min-h-screen flex flex-col w-full items-center ">
        <Navbar />
            <main className="">{children}</main>
        <Footer className="bottom-0 left-0 right-0 "/>
    </div>
    </>
  )
}

export default Layout