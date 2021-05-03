import React from 'react'
import styled from 'styled-components';

function Menu() {
    return (
        <MenuBar>
            <a><img src="logo/icons8-a_home.png"/></a>
            <a><img src="logo/icons8-birdhouse.png"/></a>
            <a><img src="logo/icons8-fireplace.png"/></a>
            <a><img src="logo/icons8-herbal_medicine.png"/></a>
            <a><img src="logo/icons8-home_button.png"/></a>
            <a><img src="logo/icons8-nest.png"/></a>
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
    >a{
        margin: 25px 0px;
    }
`

export default Menu
