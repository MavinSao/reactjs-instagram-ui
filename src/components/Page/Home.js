import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { motion } from "framer-motion"

function Home() {
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
        </GroupCards>
    )
}

const GroupCards = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export default Home
