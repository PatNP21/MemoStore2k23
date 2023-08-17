import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:grid;
  grid-template-rows: 4vh 6vh;
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  border-radius: 0 10px 10px 0;
  font-size: 24px;
  font-weight: 400;
  text-align:left;
  min-height:40px;
  justify-content:center;
  align-items: center;
  height: 4vh;
  display:block;
  margin-left: 5px;
  color: gray;
`
const Content = styled.div`
  text-align: left;
  display:block;
  inline-size: 90%;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: 20px;
  margin: 5px;
  color:#000080;
  min-height:40px;
  height: 6vh;
`

function NoteItemView(props) {
  return (
    <Container>
      <Title>
        {props.title}
      </Title>
      <Content>
        {props.content}
      </Content>
    </Container>
  )
}

export default NoteItemView