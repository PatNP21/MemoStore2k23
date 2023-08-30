import React, {useState, useEffect} from 'react'
import { Link, useNavigate, PathMatch} from 'react-router-dom'
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

    const navigate = useNavigate() 
    const options = ['album', 'notes', 'calendar']
    const [presentId, setPresentId] = useState('0')

    useEffect(() => {
        if (id) {
            setPresentId(id)
        }
    },[])

    return (
        <Grid>{
            options.map(element => {
                return (
                    <Button className="dashNavBtn">
                        <div></div>
                        <Link className="dashNavLink" to={'/dashboard/'+presentId+'/'+element.toLowerCase()} state={presentId} replace>
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