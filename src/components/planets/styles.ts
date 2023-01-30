import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const PlanetContainer = styled.div`
  padding: 100px 165px 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const PlanetTop = styled.div`
  display: flex;
  flex: 1;
`;

export const PlanetInfoContainer = styled.div`
  width: 350px;
  margin-left: auto;
`;
export const PlanetName = styled.h1`
  text-transform: uppercase;
  margin-bottom: 23px;
`;

export const PlanetImageContainer = styled.div`
  margin-top: 103px;
  margin-left: 170px;
`;
export const PlanetImage = styled.img`
  width: 290px;
  height: 290px;
`;
export const PlanetSummary = styled.p`
  margin-bottom: 24px;
`;
export const PlanetSource = styled.div``;
export const PlanetNavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const PlanetNavLink = styled(NavLink)<{ isActive?: boolean }>`
  background-color: ${props =>
    props.isActive ? props.theme.colors.lightBlue : ''};
  color: ${props => props.theme.colors.white};
  border: 1px solid
    ${props => (props.isActive ? 'transparent' : 'rgba(255, 255, 255, 0.2)')};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 2.6px;
  padding: 12px 28px;
  transition: ease-out background-color 0.1s;
  :hover {
    background-color: ${props => props.theme.colors.lightBlue};
  }
  span {
    margin-right: 28px;
    opacity: 0.5;
  }
`;
export const PlanetFactsContainer = styled.div`
  display: grid;
  margin-top: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-transform: uppercase;
`;
export const PlanetFactBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 23px;
  h4 {
    opacity: 0.5;
    margin-bottom: 4px;
  }
`;
