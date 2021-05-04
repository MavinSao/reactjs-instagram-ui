import React from 'react'
import styled from 'styled-components'
function ProfileHeader() {
    return (
        <HeaderBar>
            <img alt="img" src="icon/chat.png" />
            <img alt="img" src="icon/notification.png" /> 
            <img alt="img" src="icon/lock.png" /> 
        </HeaderBar>
    )
}

const HeaderBar = styled.div`
    display: flex;
    justify-content: flex-end;
    img{
        padding: 12px;
    }

`



export default ProfileHeader
