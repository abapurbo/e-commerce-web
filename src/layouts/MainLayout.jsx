import React from 'react'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './shared/Footer'
import '../layouts/mainContentStyle.css'
export default function MainLayout() {
    return (
        <div>
        {/*navbar section*/}
        <div className='h-26'>
           <Navbar/>
        </div>
        {/* main  section*/}
        <div className='container'>
              <Outlet/>
        </div>
        {/* footer section*/}
        <div>
               <Footer/>
        </div>
        </div>
    )
}
