import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components';
import Home from '../Page/Home';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Post from '../Page/Post';
import Setting from '../Page/Setting';
import Friends from '../Page/Friends';


function Content() {
    return (
        <ContentBody>
              <Navbar />
            <Switch>
                <Route exact path="/" component={()=> <Home/>}/>
                <Route path="/post" component={()=> <Post/>}/>
                <Route path="/setting" component={()=> <Setting/>}/>
                <Route path="/friends" component={()=> <Friends/>}/>
               
            </Switch>
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
