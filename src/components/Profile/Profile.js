import React from 'react'
import styled from 'styled-components'
import ProfileHeader from './Header/ProfileHeader'
import ProfileContent from './ProfileContent/ProfileContent'
import ProfileStory from './ProfileStory/ProfileStory'

function Profile() {
    return (
        <ProfileDiv>
            <ProfileHeader />
            <ProfileContent />
            <ProfileStory />
        </ProfileDiv>
    )
}

const ProfileDiv = styled.div`
        flex:3;
        display: flex;
        box-sizing: border-box;
        padding: 15px;
        flex-direction: column;

`

export default Profile
