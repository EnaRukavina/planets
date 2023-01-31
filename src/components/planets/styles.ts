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
export const PlanetImage = styled.img``;
export const GeologyImageContainer = styled.div`
  position: absolute;
`;
export const PlanetSummary = styled.p`
  min-height: 150px;
`;
export const PlanetSource = styled.div`
  margin: 20px 0 23px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    margin: 0 6px;
    color: ${props => props.theme.colors.white};
  }
`;

export const PlanetNavLink = styled.a<{ isActive?: boolean; color?: string }>`
  color: ${props => props.theme.colors.white};
  border: 1px solid
    ${props => (props.isActive ? 'transparent' : 'rgba(255, 255, 255, 0.2)')};
  background-color: ${props => props.isActive && props.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 2.6px;
  padding: 12px 28px;
  transition: ease-out background-color 0.1s;
  cursor: pointer;
  span {
    margin-right: 28px;
    opacity: 0.5;
  }
  :hover {
    background-color: ${props => props.color};
  }
`;

export const PlanetNavBar = styled.div<{ color?: string; isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 90px;
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
