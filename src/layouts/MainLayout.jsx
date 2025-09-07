import React from 'react'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './shared/Footer'

export default function MainLayout() {
    return (
        <>
        {/*navbar section*/}
        <div>
           <Navbar/>
        </div>
        {/* main  section*/}
        <div>
              <Outlet/>
        </div>
        {/* footer section*/}
        <div>
               <Footer/>
        </div>
        </>
    )
}
