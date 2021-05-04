import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components';
import Cards from '../Card/Cards';

function Content() {
    return (
        <ContentBody>
            <Navbar />
            <Cards />
        </ContentBody>
    )
}

const ContentBody = styled.div`
        flex:12;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            display: none;
        }
`

export default Content
