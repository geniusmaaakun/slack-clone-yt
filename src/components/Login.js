import React from 'react'
import styled from "styled-components"
import Button from '@mui/material/Button';


function Login() {
    const signIn = (e) => {
        e.preventDefault()

        //login state更新
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/7a/8d/7a/7a8d7a16-bfef-f7ba-20b4-a52636431fb5/source/512x512bb.jpg" alt="" />
                <h1>Sign in to the SlackClone</h1>
                <p>slackclone.com</p>
                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`
const LoginInnerContainer = styled.div`
    padding: 180px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); 
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > Button {
        margin-top: 50px;
        text-transform: inherit;
        background-color: #da8c48 !important;
        color: white;
    } 
`