import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { motion } from "framer-motion"

function Home() {

    let data = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,5,6,7,2];

    return (
        <GroupCards>
            {
                data.map((s,i)=><Card key={i}/>)
            }
        </GroupCards>
    )
}

const GroupCards = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export default Home
