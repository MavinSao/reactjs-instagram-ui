import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
    return (
        <MenuBar>
            <Link to="/"><img alt="home" src="icon/Home.png" /></Link> 
            <Link to="/post"><img alt="img" src="icon/Post.png" /></Link> 
            <Link to="/setting"><img alt="img" src="icon/Setting.png" /></Link> 
            <Link to="/friends"><img alt="img" src="icon/friends.png" /></Link> 
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
