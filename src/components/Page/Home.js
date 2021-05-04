import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { motion } from "framer-motion"

function Home() {

    let data = [
        "albert-vincent-wu-MnHjG6zg1Tw-unsplash.jpeg",
        "alexandros-giannakakis-1z6w-uFxVX4-unsplash.jpeg",
        "benjamin-wedemeyer-GYJ2gxaoZTE-unsplash.jpeg",
        "damir-kopezhanov-P9_1VLFQ10Y-unsplash.jpeg",
        "delfina-iacub-JDAs0hvaEVI-unsplash.jpeg",
        "filip-baotic-dw0pZI7OsSA-unsplash.jpeg",
        "gift-habeshaw-xlNqj5Fd_5I-unsplash.jpeg",
        "kevser-xa3zvVw10z8-unsplash.jpeg",
        "krissara-lertnimanorladee-E1WrndIdVk8-unsplash.jpeg",
        "parker-coffman-1EFn62rgy_I-unsplash.jpeg",
        "redcharlie-H6_xpbD8WFE-unsplash.jpeg",
        "redcharlie-iCPpeZnGrlM-unsplash.jpeg",
        "taisiia-shestopal-41Vqiccdlzk-unsplash.jpeg"
    ];

    return (
        <GroupCards>
            {
                data.map((img,i)=><Card key={i} img={img}/>)
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
