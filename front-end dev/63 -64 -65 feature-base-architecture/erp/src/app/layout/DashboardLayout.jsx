import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../feature/dashboard/components/Navbar'

const DashbordLayout = () => {
  return (
   <div className='h-screen grid grid-cols-[1fr_7fr] '>
    <Navbar />
    <div className='p-4'><Outlet /></div>
    </div>
  
  )
}

export default DashbordLayout