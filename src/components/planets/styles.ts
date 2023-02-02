import styled from 'styled-components/macro';
import { device } from '../../helpers';

export const PlanetContainer = styled.div<{ color: string }>`
  padding: 42px 165px 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => `${props.color}99`};
  }

  @media ${device.laptopL} {
    padding: 42px 100px 50px;
  }
  @media ${device.laptop} {
    padding: 42px 50px 50px;
  }
`;
export const PlanetTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  @media ${device.laptop} {
    grid-template-columns: unset;
    grid-template-rows: 450px 1fr;
  }
`;

export const PlanetInfoContainer = styled.div`
  width: 350px;
  margin-top: 40px;
  @media ${device.laptop} {
    display: grid;
    width: 100%;
    grid-template-columns: 1.2fr 1fr;
    gap: 70px;
  }
`;
export const PlanetName = styled.h1`
  text-transform: uppercase;
  margin-bottom: 23px;
  @media ${device.laptop} {
    font-size: 48px;
  }
`;

export const PlanetImageContainer = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  position: relative;
  justify-content: center;
`;
export const PlanetImage = styled.img`
  width: 100%;
  @media ${device.laptop} {
    width: 70%;
  }
`;
export const GeologyImageContainer = styled.div`
  position: absolute;
  width: 160px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  img {
    width: 100%;
    position: relative;
    top: 170px;
  }
`;
export const PlanetSummary = styled.p`
  min-height: 150px;
  @media ${device.laptop} {
    font-size: 12px;
    line-height: 22px;
  }
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
  @media ${device.laptop} {
    font-size: 12px;
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
    background-color: ${props =>
      props.isActive ? props.color : props.theme.colors.darkGray};
    border: 1px solid transparent;
  }

  @media ${device.laptop} {
    font-size: 10px;
  }
`;

export const PlanetNavBar = styled.div<{ color?: string; isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 90px;
  @media ${device.laptop} {
    min-width: 280px;
  }
`;

export const PlanetFactsContainer = styled.div`
  display: grid;
  margin-top: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-transform: uppercase;
  @media ${device.laptop} {
    gap: 10px;
  }
`;
export const PlanetFactBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 23px;
  @media ${device.laptop} {
    padding: 15px;
  }
  h4 {
    opacity: 0.5;
    margin-bottom: 4px;
    @media ${device.laptop} {
      font-size: 8px;
      line-height: 16px;
      letter-spacing: 0.73px;
    }
  }
  h2 {
    @media ${device.laptop} {
      font-size: 24px;
      line-height: 1.5;
    }
  }
`;
