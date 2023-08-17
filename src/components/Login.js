import React from 'react'
import {useForm} from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link, useNavigate} from 'react-router-dom'
import UserHandler from '../handlers/UserHandler'
import styled from 'styled-components'
import Footer from './elements/Footer';

const Grid = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: auto auto;
`

const Form_ = styled.div`
    display: grid;
    grid-template-rows: 10vh 40vh 10vh;
    width: 50vw;
    height: 85vh;
`
const Input = styled.input`
    margin:2vh auto;
    box-shadow: 0 0 3px gray;
    display:block;
    width:20vw;
    height:4vh;
`

function Login() {

    const user_handler = new UserHandler()

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const login = (data) => {
        console.log(data)
        user_handler.loginToTheService(data).then(res => {
            console.log(res)
            navigate(`/dashboard/${res.data.id}`, {state: {id: res.data.id}})
        }).catch(err => {
            console.error(err)
            navigate('/error500')
        })
    }

    return (
        <>
            <Grid>
                <div className='loginGridPart'></div>
                <Form_ className='loginGridPart'>
                    <div></div>
                    <Form className="form_login" onSubmit={handleSubmit(login)}> 
                        <Form.Control className="mb-3 text_input" {...register('email')} type="text" placeholder='E-mail'/>
                        <Form.Control {...register('password')} type="password" className="mb-3 text_input" placeholder='Set password'/>
                        <Form.Label className='mb-3-text'>
                            Forgot password?
                        </Form.Label>
                        <Form.Control className='mb-3' type="submit" value="Submit"/>
                    </Form>
                    <div className='toRegisterPanel'>
                        <div>or</div>
                        <Link to="/register">Create a new account</Link>
                    </div>
                </Form_>
            </Grid>
            <Footer/>
        </>
  )
}
export default Login