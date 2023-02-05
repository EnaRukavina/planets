import styled from 'styled-components';
import { device, getColor, Tab } from '../helpers';
import { PlanetFacts } from './PlanetFacts';
import { PlanetImage } from './PlanetImage';
import { PlanetInfo } from './PlanetInfo';

interface PlanetProps {
  data: any;
  tab: Tab;
  setTab: (tab: Tab) => void;
}
export const Planet = ({ data, tab, setTab }: PlanetProps) => {
  return (
    <PlanetContainer color={getColor(data.name)}>
      <PlanetTop>
        <PlanetImage tab={tab} data={data} />
        <PlanetInfo data={data} tab={tab} setTab={setTab} />
      </PlanetTop>
      <PlanetFacts data={data} />
    </PlanetContainer>
  );
};

const PlanetContainer = styled.div<{ color: string }>`
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
    @media ${device.tablet} {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => `${props.color}99`};
  }

  @media ${device.laptopL} {
    padding: 42px 100px 50px;
  }
  @media ${device.laptop} {
    padding: 42px 50px 50px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    padding: 24px;
    margin-top: 50px;
  }
`;

const PlanetTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  @media ${device.laptop} {
    grid-template-columns: unset;
    grid-template-rows: 450px 1fr;
  }
  @media ${device.tablet} {
    grid-template-rows: 300px 1fr;
  }
`;
