import React from 'react'
import styled from 'styled-components';

function Menu() {
    return (
        <MenuBar>
            <img alt="img" src="logo/icons8-a_home.png" />
            <img alt="img" src="logo/icons8-birdhouse.png" />
            <img alt="img" src="logo/icons8-fireplace.png" />
            <img alt="img" src="logo/icons8-herbal_medicine.png" />
            <img alt="img" src="logo/icons8-home_button.png" />
            <img alt="img" src="logo/icons8-nest.png" />
        </MenuBar>
    )
}

const MenuBar = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f7f7f7;
    >img{
        margin: 25px 0px;
    }
`

export default Menu
