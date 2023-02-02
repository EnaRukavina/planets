import { getColor, Planet, Tab } from '../../helpers';
import { PlanetNavBar, PlanetNavLink } from './styles';

interface IPlanetsNavBarProps {
  setTab: any;
  tab: Tab;
  planetName: Planet;
}

export const PlanetsNavBar = ({
  setTab,
  tab,
  planetName,
}: IPlanetsNavBarProps) => {
  const planetNavBarItems = [
    { num: '01', tab: 'overview', title: 'overview' },
    { num: '02', tab: 'structure', title: 'Internal structure' },
    { num: '03', tab: 'geology', title: 'surface geology' },
  ];
  return (
    <PlanetNavBar>
      {planetNavBarItems.map(item => (
        <PlanetNavLink
          key={item.num}
          onClick={() => setTab(item.tab)}
          isActive={tab === item.tab}
          color={getColor(planetName)}
        >
          <span>{item.num}</span>
          {item.title}
        </PlanetNavLink>
      ))}
    </PlanetNavBar>
  );
};
