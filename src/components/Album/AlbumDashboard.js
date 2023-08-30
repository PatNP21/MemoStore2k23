import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import AlbumHandler from '../../handlers/AlbumHandler'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const ControlPanel = styled.div`
    width: 80vw;
    height: 10vh;
`
const SubmitBtn = styled.button`
    display: inline-block;

`
const Gallery = styled.div`
    width: 80vw;
    height: 70vh;
`
const Img = styled.img`
    width:20vw;
    height:20vh;
    float:left;
    margin: 10px 10px;
    cursor: pointer;
`

function AlbumDashboard({id}) {

    const album_handler = new AlbumHandler()
    const params = useParams()
    const {register, handleSubmit} = useForm()
    const [file, setFile] = useState()
    const [images, setImages] = useState([])

    const sendImage = () => {
        if(!id) {
            id = params.id
        }
        console.log(file)
        try {
            let res = album_handler.sendImage(file, id).then(() => {
                setTimeout(() => window.location.reload(), 5000)
            })
            console.log(res)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(!id) {
            id = params.id
        }
        album_handler.getImages(id).then(res => {
            console.log(res)
            setImages(res.data.resources)
            console.log(images)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <ControlPanel>
                <label className='label' htmlFor='fileinput'>
                    Press here to select image from your device...
                </label>
                <input 
                    id="fileinput"
                    type="file"
                    name="thefile"
                    accept='.jpg'
                    onChange={e => {
                        URL.createObjectURL(e.target.files[0])
                        setFile(e.target.files[0])
                        if(file) {sendImage()}
                    }}
                />
                {/*<SubmitBtn onClick={sendImage}>
                    send image
                </SubmitBtn>*/}
            </ControlPanel>
            
            <Gallery>
                {images && images.map(item => {
                    return (
                        <>
                            <Img src={item.secure_url}/>
                        </>
                    )
                })}
            </Gallery>
        </div>
    )
}

export default AlbumDashboard