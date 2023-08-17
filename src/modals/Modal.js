import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    z-index: -1,
    perspective: 1000px;
    width: 40vw;
    height: 20vh;
    border-radius: 10px;
    box-shadow: 0 0 3px gray;
    background-color: #fff;
    transform: translate(-50%, -90%);
`

function Modal({info, turnOff}) {
  return (
    <Container>
        <p>{info}</p>
        <button onClick={turnOff}>
            OK
        </button>
    </Container>
  )
}

export default Modal