import React from 'react'
import styled from 'styled-components'
function ProfileHeader() {
    return (
        <HeaderBar>
            <img alt="img" src="icon/icons8-bell_filled.png" />
            <img alt="img" src="icon/icons8-bell_filled.png" />
            <img alt="img" src="icon/icons8-bell_filled.png" />
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
