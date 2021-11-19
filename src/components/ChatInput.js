import React, {useState} from 'react'
import styled from "styled-components"
import Button from '@mui/material/Button';

function ChatInput({channelName, channelId, chatRef}) {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        console.log(input)


        //APIを実装していない為
        /*
        if (!channelId) {
            return false
        }
        */

        //send API

        //

        chatRef?.current?.scrollIntoView({
            behaivior: "smooth",
        })

        setInput("")        
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`}></input>
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
            
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 38px;
        width: 60%;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`