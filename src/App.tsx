import styled, { ThemeProvider } from 'styled-components/macro';
import './App.css';
import { Header } from './components/Header';
import { theme } from './theme';
import stars from './assets/images/background-stars.svg';
import { Route, Routes } from 'react-router';
import { Earth } from './components/planets/Earth';
import { Mercury } from './components/planets/Mercury';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.colors.black};
  background-image: ${`url(${stars})`};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <Routes>
          <Route path='/earth' element={<Earth />} />
          <Route path='/mercury' element={<Mercury />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
