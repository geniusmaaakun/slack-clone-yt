import React from 'react'
import {useDispatch} from "react-redux"
import styled from "styled-components"
import {enterRoom} from "../features/appSlice"

//gFirebaseGogleAuthでSNS系のAuthが出来そう


function SidebarOption({ Icon , title, addChannelOption, id }) {
    //gun!!
    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name")
        //db add
        if (!channelName) {
            //add
        }

    }

    const selectChannel = () => {
        //db select dataFetch & GoToPage
        if (id) {
            //更新
            dispatch(enterRoom({
                roomId: id,
            }))
        }

    }

    return (
        <SidebarContainer
        onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span>{title}
                </SidebarOptionChannel>
            )}
        </SidebarContainer>
    )
}

export default SidebarOption


const SidebarContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;

    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color:; #340c36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`
