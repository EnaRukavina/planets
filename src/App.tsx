import styled, { ThemeProvider } from 'styled-components/macro';
import './App.css';
import { Header } from './components/Header';
import { theme } from './theme';
import stars from './assets/images/background-stars.svg';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  background-image: ${`url(${stars})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <Header />
        <Header />
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
