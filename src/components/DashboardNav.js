import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Handlebars from 'handlebars'
import styled from 'styled-components'

const Grid = styled.div`
    float: left;
    width: 15vw;
    height: 94vh;
    margin:0;
    background: linear-gradient(#7777e7, #8888f8);
`

/*const Button = styled.button`
    display: block;
`*/

function DashboardNav({id}) {
    const options = ['album', 'notes']

    useEffect(() => {
        Handlebars.registerHelper('loud', (string) => {
            return string.toUpperCase()
        })
    },[])

    return (
        <Grid>{
            options.map(element => {
                return (
                    <Button className="dashNavBtn">
                        <div></div>
                        <Link className="dashNavLink" to={'/dashboard/'+id+'/'+element.toLowerCase()} state={id}>
                            {element.toUpperCase()}
                        </Link>
                        <div></div>
                    </Button>
                )
            })
            
        }</Grid>
    )
}

export default DashboardNav