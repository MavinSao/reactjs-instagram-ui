import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
import GlobalStyle from './components/Style/GlobleStyle';

import React, { useState} from "react";

import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes/Themes"

import { BrowserRouter as Router} from "react-router-dom";

const Layout = styled.div`
    display: flex;    
    >div{
      height: 100vh;
    }
`

function App() {


  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <Layout>
          <GlobalStyle/>
          <Menu changeTheme={themeToggler} theme={theme}/>
          <Content />
          <Profile />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
