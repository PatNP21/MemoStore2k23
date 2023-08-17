import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    width:100%;
    height:2vh;
    text-align: center;
    color: #000080;
    position: relative;
    left: 0;
    bottom: 0;
`

function Footer() {
  return (
    <Content>
        NoteApp 2023
    </Content>
  )
}

export default Footer