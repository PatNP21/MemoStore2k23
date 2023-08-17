import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import AlbumHandler from '../../handlers/AlbumHandler'
import styled from 'styled-components'

const Gallery = styled.div`
    width: 80vw;
    height: 70vh;
`
const Img = styled.img`
    width:20vw;
    height:20vh;
    float:left;
    margin: 10px 10px;
`

function AlbumDashboard() {

    const album_handler = new AlbumHandler()
    const {register, handleSubmit} = useForm()
    const [file, setFile] = useState()
    const [images, setImages] = useState([])

    const sendImage = () => {
        console.log(file)
        album_handler.sendImage(file).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        album_handler.getImages().then(res => {
            console.log(res)
            setImages(res.data.resources)
            console.log(images)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <input 
                type="file"
                name="thefile"
                onChange={e => {
                    URL.createObjectURL(e.target.files[0])
                    setFile(e.target.files[0])
                }}
            />

            <button onClick={sendImage}>send image</button>
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