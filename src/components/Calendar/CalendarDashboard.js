import React from 'react'
import Calendar from 'react-calendar'
import './Calendar.css';
import Events from './Events';
import styled from 'styled-components';

const Container = styled.div`
    height: 94vh;
`
const CalendarDiv = styled.div`
    width: 85vw;
    height: 35vh;
    display: block;
`
const EventsDiv = styled.div`
    width: 85vw;
    height: 50vh;
    display: block;
`

function CalendarDashboard() {
  return (
    <Container>
        <CalendarDiv>
            <Calendar/>
        </CalendarDiv>
        <EventsDiv>
            <Events/>
        </EventsDiv>
    </Container>
  )
}

export default CalendarDashboard