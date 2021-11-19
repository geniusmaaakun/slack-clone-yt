import React, {useRef, useEffect} from 'react'
import styled from "styled-components"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { selectRoomId } from "../features/appSlice"
import { useSelector } from "react-redux"
import ChatInput from './ChatInput';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null)
    const roomId  = useSelector(selectRoomId)

    //roomId change
    useEffect(() => {
        console.log("change")
        //一番下まで
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        })
    }, [roomId])

    //Api fetch
    const roomDetails = {data: {name:"aaa"}}
    const roomMessages = [
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},
        {message: "aaaa", timestamp: "2021/12/24", user: "abc", userImage: "https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_960_720.jpg"},


    ]

    console.log(roomDetails)

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{roomDetails?.data.name}</strong></h4>
                        <StarBorderIcon></StarBorderIcon>
                    </HeaderLeft>

                    <HeaderRight>
                        <p><InfoIcon />Details</p>
                    </HeaderRight>
                </Header>

                <ChatMessage>
                    {roomMessages?.map((data, id) => {
                        const { message, timestamp, user, userImage} = data

                        return (
                            <Message key={id} message={message} timestamp={timestamp} user={user} userImage={userImage}/>
                        )
                    })}
                </ChatMessage>
                <ChatButton ref={chatRef} />

                <ChatInput 
                    chatRef={chatRef}
                    channelName={roomDetails?.data.name}
                    channelId={roomId}
                />
            </>
            )}

        </ChatContainer>
    )
}

export default Chat

const ChatButton = styled.div`
    padding-bottom: 200px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgreen;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`


const ChatMessage = styled.div`

`