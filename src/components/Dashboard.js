import React, {useState, useEffect} from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import Header from './elements/Header'

function Dashboard() {

  const {id} = useLocation().state

  return (
    <>
      <Header/>
      <DashboardNav id={id}/>
      <Outlet/>
    </>
  ) 
}

export default Dashboard