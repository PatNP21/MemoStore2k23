import React, {useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    z-index: -1,
    perspective: 1000px;
    width: 70vw;
    height: 80vh;
    border-radius: 10px;
    box-shadow: 0 0 3px gray;
    background-color: #fff;
    transform: translate(-50%, -90%);
`
const BtnsPanel = styled.div`
    width: 60vw;
    height: 10vh;
    display: inline-block;
    margin: 0 auto;
`

function DeleteNoteModal({item, deleteNote, cancelDeleting}) {
  return (
    <Container>
        <div>Do you want to delete the item {item._id.toString()}</div>
        <div class="close_icon">
            <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
        <BtnsPanel>
            <button onClick={cancelDeleting}>Cancel</button>
            <button onClick={deleteNote(item._id, item)}>OK</button>
        </BtnsPanel>
    </Container>
  )
}

export default DeleteNoteModal