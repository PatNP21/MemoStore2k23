import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 80vw;
    height: 50vh;
    display: block;
    margin: 3vh auto;
    border: 1px solid #aaa;
`

function Events() {
  return (
    <Container>
        You will maintain your events here! :D
    </Container>
  )
}

export default Events