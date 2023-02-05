import { useContext } from 'react';
import styled from 'styled-components';
import { MobileContext } from '../Context';
import { device, getColor, Planet, Tab } from '../helpers';

interface IPlanetsNavBarProps {
  setTab: (tab: Tab) => void;
  tab: Tab;
  planetName: Planet;
}

export const PlanetsNavBar = ({
  setTab,
  tab,
  planetName,
}: IPlanetsNavBarProps) => {
  const isMobile = useContext(MobileContext);
  const planetNavBarItems: {
    num: string;
    tab: Tab;
    title: string;
  }[] = [
    { num: '01', tab: 'overview', title: 'overview' },
    {
      num: '02',
      tab: 'structure',
      title: isMobile ? 'structure' : 'Internal structure',
    },
    {
      num: '03',
      tab: 'geology',
      title: isMobile ? 'surface' : 'surface geology',
    },
  ];
  return (
    <PlanetNavBar>
      {planetNavBarItems.map((item) => (
        <PlanetNavLink
          key={item.num}
          onClick={() => setTab(item.tab)}
          isActive={tab === item.tab}
          color={getColor(planetName)}
        >
          <span className='number'>{item.num}</span>
          <span className='title'>{item.title}</span>
        </PlanetNavLink>
      ))}
    </PlanetNavBar>
  );
};

const PlanetNavLink = styled.a<{ isActive?: boolean; color?: string }>`
  color: ${(props) => props.theme.colors.white};
  border: 1px solid
    ${(props) => (props.isActive ? 'transparent' : 'rgba(255, 255, 255, 0.2)')};
  background-color: ${(props) => props.isActive && props.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 2.6px;
  padding: 12px 28px;
  transition: ease-out background-color 0.1s;
  cursor: pointer;
  :hover {
    background-color: ${(props) =>
      props.isActive ? props.color : props.theme.colors.darkGray};
    border: 1px solid transparent;
  }
  @media ${device.laptop} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 9px;
    background-color: transparent;
    border: 0;
    border-bottom: 4px solid
      ${(props) => (props.isActive ? `${props.color}` : 'transparent')};
    margin: 0 20px;
    padding: 0 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50px;
    :hover {
      background-color: transparent;
      border: 0;
      border-bottom: 4px solid
        ${(props) => (props.isActive ? `${props.color}` : 'transparent')};
    }
  }

  .number {
    margin-right: 28px;
    opacity: 0.5;
    @media ${device.tablet} {
      display: none;
    }
  }

  .title {
    @media ${device.tablet} {
      position: relative;
      top: 2px;
    }
  }
`;

const PlanetNavBar = styled.div<{ color?: string; isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
  margin-bottom: 90px;
  @media ${device.laptop} {
    min-width: 280px;
  }
  @media ${device.tablet} {
    position: absolute;
    top: 61px;
    left: 0;
    flex-direction: row;
    gap: 0;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    overflow-x: auto;
    min-width: 0;
    margin-bottom: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
