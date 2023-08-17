import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import UserHandler from '../handlers/UserHandler'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: auto auto;
`
const Form = styled.div`
    display: grid;
    grid-template-rows: 10vh 40vh 10vh;
    width: 45vw;
    height: 70vh;
    margin: 10vh auto;
`
const Input = styled.input`
    margin:2vh auto;
    border: 1px solid gray;
    border-radius: 20px;
    display:block;
    width:25vw;
    height:6vh;
`

function Register() {
    const user_handler = new UserHandler()
    const {register, handleSubmit} = useForm()
    const [dataSendingDone, setDataSendingDone] = useState(false)

    const registerData = (data) => {
        let check_repeat_password = (data.password === data.repeatPassword)

        if(check_repeat_password) {
            user_handler.registerNewUser(data).then(res => {
                console.log(res)
                setDataSendingDone(true)
            }).catch(err => {
                alert("error occured!")
                console.log(err)
            })
        } else {
            alert('Fields are not the same!')
        }
    }

    return (
        <>
            <Grid>
                <div className='registerGridPart'></div>
                <Form className='registerGridPart'>
                    <div></div>
                    {dataSendingDone ? 
                        <div>The activation link has been sent to entered email address!</div> : 
                        <form onSubmit={handleSubmit(registerData)}> 
                            <Input {...register('username')} type="text" class="text_input" placeholder='Username'/>
                            <Input {...register('email')} type="text" class="text_input" placeholder='E-mail'/>
                            <Input {...register('password')} pattern="[A-Za-z0-9]{10,30}" title="Password has to contain uppercase letters, lowercase letter and digit. Length should have the length between 10 and 30." type="password" class="text_input" placeholder='Set password'/>
                            <Input {...register('repeatPassword')} type="password" class="text_input" placeholder='Repeat password'/>
                            <Input type="submit" value="Submit"/>
                        </form>
                    }
                    <div></div>
                </Form>
            </Grid>
        </>
  )
}

export default Register