import React from 'react'
import styled from 'styled-components'
import Card from './Card'
function Cards() {
    return (
        <GroupCards>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </GroupCards>
    )
}

const GroupCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export default Cards
