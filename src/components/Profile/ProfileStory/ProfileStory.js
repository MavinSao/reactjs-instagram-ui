import React from 'react'
import styled from 'styled-components'
import Story from './Story'

function ProfileStory() {
    return (
        <PstoryStyle>
            <h3>Your Stories</h3>
            <div className="story-group">
                <Story />
                <Story />
                <Story />
                <Story />
            </div>
        </PstoryStyle>
    )
}

const PstoryStyle = styled.div`
    .story-group{
        display: flex;
        margin: 20px 0px;
    }
    .story-group > div{
        margin: 0px 5px;
    }
`


export default ProfileStory
