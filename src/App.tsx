import styled, { ThemeProvider } from 'styled-components/macro';
import './App.css';
import { Header } from './components/Header';
import { theme } from './theme';
import stars from './assets/images/background-stars.svg';
import { Route, Routes } from 'react-router';
import data from './data.json';
import { Planet } from './components/PlanetContainer';
import { useEffect, useState } from 'react';
import { Tab } from './helpers';
import { MobileContext } from './Context';

function App() {
  const [tab, setTab] = useState<Tab>('overview');
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <MobileContext.Provider value={isMobile}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header setTab={setTab} />
          <Routes>
            <Route
              path={'/'}
              element={<Planet data={data[0]} tab={tab} setTab={setTab} />}
            />
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
    </MobileContext.Provider>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.black};
  background-image: ${`url(${stars})`};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;
