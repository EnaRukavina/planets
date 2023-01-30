import { images } from '../../assets/images/index';
import {
  PlanetContainer,
  PlanetFactBox,
  PlanetFactsContainer,
  PlanetImage,
  PlanetImageContainer,
  PlanetInfoContainer,
  PlanetName,
  PlanetNavBar,
  PlanetNavLink,
  PlanetSource,
  PlanetSummary,
  PlanetTop,
} from './styles';

export const Mercury = () => {
  let activeStyle = {
    textDecoration: 'underline',
    background: 'red',
  };
  return (
    <PlanetContainer>
      <PlanetTop>
        <PlanetImageContainer>
          <PlanetImage src={images.planetMercury} />
        </PlanetImageContainer>

        <PlanetInfoContainer>
          <PlanetName>Mercury</PlanetName>
          <PlanetSummary>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </PlanetSummary>
          <PlanetSource>
            Source: <a href=''>Wikipedia</a>
          </PlanetSource>
          <PlanetNavBar>
            <PlanetNavLink
              to='/overview'
              isActive
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span>01</span>
              Overview
            </PlanetNavLink>
            <PlanetNavLink to='/internal'>
              <span>02</span>Internal structure
            </PlanetNavLink>
            <PlanetNavLink to='/geology'>
              <span>03</span>Surface geology
            </PlanetNavLink>
          </PlanetNavBar>
        </PlanetInfoContainer>
      </PlanetTop>

      <PlanetFactsContainer>
        <PlanetFactBox>
          <h4>Rotation time</h4>
          <h2>58.6 days</h2>
        </PlanetFactBox>
        <PlanetFactBox>
          <h4>Revolution time</h4>
          <h2>87.97 days</h2>
        </PlanetFactBox>
        <PlanetFactBox>
          <h4>Radius</h4>
          <h2>2,439.7 km</h2>
        </PlanetFactBox>
        <PlanetFactBox>
          <h4>Average temp.</h4>
          <h2>430°c</h2>
        </PlanetFactBox>
      </PlanetFactsContainer>
    </PlanetContainer>
  );
};
