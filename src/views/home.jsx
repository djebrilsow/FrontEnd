import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
   <div>
     
  {/* START PAGE CONTAINER */}
  <div className="page-container">
    {/* SidBar */}
    <SideBar/>
    {/* PAGE CONTENT */}
    <div className="page-content">
         <Header/>    
            <Outlet/>           
      </div>
   
    </div>
    </div>
  )
}

export default Home