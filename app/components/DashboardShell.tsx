import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function DashboardShell({children}: { children: JSX.Element }) {
  return (
    <>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
            <h1>{children}</h1>
        </div>
    </>
  )
}

export default DashboardShell