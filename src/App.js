import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
import GlobalStyle from './components/Style/GlobleStyle';

const Layout = styled.div`
    display: flex;    
    >div{
      height: 100vh;
    }
`

function App() {
  return (
    <Layout>
      <GlobalStyle/>
      <Menu />
      <Content />
      <Profile />
    </Layout>
  );
}

export default App;
