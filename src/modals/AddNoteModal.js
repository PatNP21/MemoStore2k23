import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'

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
const Img = styled.img`
  width: 40%;
  height: fit-content;
  background-image: size;
  display: block;
  margin: 2vh auto;
`

function AddNoteModal({addNote, csfrtoken, user_id}) {

    const {state} = useLocation()
    const {register, handleSubmit} = useForm()
    const [photo, setPhoto] = useState()

    const getCookie = (name) => {
      let cookieValue = null
      if(document.cookie && document.cookie != '') {
        let cookies = document.cookie.split(';')
        console.log(`cookies: ${cookies}`)
        for(let i=0; i < cookies.length; i++) {
          let cookie = cookies[i].trim()
          console.log(cookie)
          if(cookie.substring(0, name.length+1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length+1))
            break
          }
        }
      }
      console.log(`cookieValue: ${cookieValue}`)
      return cookieValue
    }

    useEffect(() => {
      csfrtoken = getCookie('csrftoken')
      console.log(`user_id to add note: ${user_id}`)
    }, [])

    return (
      <Container>
          <div>Enter the title</div>
          <div class="close_icon">
            <i class="fa-sharp fa-solid fa-xmark"></i>
          </div>
          <form onSubmit={handleSubmit(addNote)}>
              <input type="hidden" {...register('csrfmiddlewaretoken')} value={getCookie('csrftoken')}/>
              <input type="hidden" {...register('user_id')} value={user_id}/>
              <input type="text" placeholder='Title' {...register("title")}/><br/>
              <input type="text" placeholder='Content' {...register("content")}/><br/>
              {<label htmlFor='fileInput'>Enter multimedia file</label>}
              {<input 
                type="file"
                {...register('multimedia')} 
                id="fileInput" 
                accept='.jpg'
                onChange={e => {
                  let el = URL.createObjectURL(e.target.files[0])
                  setPhoto(el)
                }}
              />}<br/>
              <Img src={photo}/>
              <input type="submit" value="Add note"/>
          </form>
      </Container>
    )
}

export default AddNoteModal