import React, {useState, useEffect} from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import Header from './elements/Header'
import styled from 'styled-components'

const Grid = styled.div`
  width: 100%;
  height: 94vh;
`
const Div = styled.div`
  float:left;
  height: 100%;
  width: fit-content;
`

function Dashboard() {

  const {id} = useLocation().state

  return (
    <>
      <Header/>
      <Grid>
        <Div>
          <DashboardNav id={id}/>
        </Div>
        <Div>
          <Outlet/>
        </Div>
      </Grid>
    </>
  ) 
}

export default Dashboard