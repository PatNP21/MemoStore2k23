import React, {useEffect, useState} from 'react'
import NotesHandler from '../../handlers/NotesHandler'
import NotesList from './NotesList'
import NotesMenu from './NotesMenu'
import { useLocation, useParams } from 'react-router-dom'

function NotesDashboard() {
    
    const notes_handler = new NotesHandler()
    const {id} = useParams()
    const [dataIsLoaded, setDataIsLoaded] = useState(false)
    const [selectedItem, setSelectedItem] = useState("select any note to see...")
    const [array, setArray] = useState(
      {id: 1, title: 'sth', content: 'sth'}
    )
  
    useEffect(() => {
      console.log("dashboard")
      console.log(id)
      {id && notes_handler.getUsersNotes(id).then(res => {
        console.log('all is ok')
        setArray(res.data)
        setDataIsLoaded(true)
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })}
    },[])
  
    const selectItem = (el) => {
      console.log(el)
      setSelectedItem({
        id: el.id,
        title: el.title,
        content: el.content,
        creating_date: el.creating_date,
        multimedia: el.multimedia
      })
    }
  
    const unselectDeletedItem = () => {
      setSelectedItem("select any note to see...")
    }

    return (
        <>
          {dataIsLoaded &&
            <>
              <NotesList array={array} selectItem={selectItem}/>
              <NotesMenu item={selectedItem} unselectDeletedItem={unselectDeletedItem} user_id={id}/>
            </>
          }  
        </>
    )
}

export default NotesDashboard