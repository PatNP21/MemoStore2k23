import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NotesHandler from '../../handlers/NotesHandler'
import NoteItemView from './NoteItem/NoteItemView'

const Container = styled.div`
  width: 40vw;
  height: 90vh;
  margin: 2vh 2vw;
  border-left: 2px solid #6666d6;
  float:left;
  overflow-y: scroll;
`
const Button = styled.button`
  margin:2vh 1vw;
  border: 1px solid #000080;
  border-radius:0 10px 10px 0;
  width: 95%;
  height: 12vh;
  background-color:#fff;
`

function NotesList({array, selectItem}) {

  return (
    <Container>
      {
        array.length > 0 &&
          array.map(item => {
            return <Button
                onClick={() => {
                  console.log(item)
                  selectItem(item)
                }}
              >
                <NoteItemView 
                  title={item.title}
                  content={item.content}
                /> 
              </Button>
          })
      }
    </Container>
  )
}

export default NotesList