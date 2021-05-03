import React from 'react'
import styled from 'styled-components'

function Profile() {
    return (
        <ProfileDiv>
            <h1>Profile</h1>
        </ProfileDiv>
    )
}

const ProfileDiv = styled.div`
        flex:4;
        display: flex;
        justify-content: center;
        align-items: center;

`

export default Profile
