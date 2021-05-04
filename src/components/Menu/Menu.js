import React from 'react'
import styled from 'styled-components';

function Menu() {
    return (
        <MenuBar>
            <img alt="home" src="icon/Home.png" />
            <img alt="img" src="icon/Post.png" />
            <img alt="img" src="icon/Setting.png" />
            <img alt="img" src="icon/friends.png" />
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
