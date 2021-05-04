import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Nav>
            <h2>Logo</h2>
            <input className="search-bar" type="text" placeholder="search" />
        </Nav>
    )
}

const Nav = styled.div`
    position:sticky;
    top:0;
    left:0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid #f7f7f7;


    .search-bar{
        height: 30px;
        width: 200px;
        border-radius: 10px;
        border: none;
        background: #f7f7f7;
        padding-left: 10px;
    }


`


export default Navbar
