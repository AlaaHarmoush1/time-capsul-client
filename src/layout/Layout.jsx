import React from 'react';
import Navbar from "./navbar";
import Footer from './footer';
import '../styles/index.css'
import "../styles/utilities.css";


const Layout = ({ children }) => {
  return (
    <>
    <div className="min-h-screen flex flex-col w-full bg-red-400">
        <Navbar />
            <main className="">{children}</main>
        <Footer className=""/>
    </div>
    </>
  )
}

export default Layout