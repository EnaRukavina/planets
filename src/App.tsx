import styled, { ThemeProvider } from 'styled-components/macro';
import './App.css';
import { Header } from './components/Header';
import { theme } from './theme';
import stars from './assets/images/background-stars.svg';
import { Route, Routes } from 'react-router';
import data from './data.json';
import { Planet } from './components/Planets/PlanetContainer';
import { useState } from 'react';
import { Tab } from './helpers';

function App() {
  const [tab, setTab] = useState<Tab>('overview');
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header setTab={setTab} />
        <Routes>
          {data.map((x, i) => (
            <Route
              key={x.name}
              path={`/${x.name}`}
              element={<Planet data={data[i]} tab={tab} setTab={setTab} />}
            />
          ))}
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

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
