import styled from 'styled-components';
import { images } from '../assets/images';
import { device, Tab } from '../helpers';
import { PlanetsNavBar } from './PlanetsNavBar';

interface PlanetInfoProps {
  data: any;
  tab: Tab;
  setTab: (tab: Tab) => void;
}
export const PlanetInfo = ({ data, tab, setTab }: PlanetInfoProps) => {
  return (
    <PlanetInfoContainer>
      <div>
        <PlanetName>{data.name}</PlanetName>
        <div>
          <PlanetSummary>{data[tab].content}</PlanetSummary>
          <PlanetSource>
            <span>Source:</span>
            <a href={data[tab].source} target='_blank' rel='noreferrer'>
              Wikipedia
            </a>
            <img src={images.iconSource} />
          </PlanetSource>
        </div>
      </div>
      <PlanetsNavBar setTab={setTab} tab={tab} planetName={data.name} />
    </PlanetInfoContainer>
  );
};

const PlanetInfoContainer = styled.div`
  width: 350px;
  margin-top: 40px;
  @media ${device.laptop} {
    display: grid;
    width: 100%;
    grid-template-columns: 1.2fr 1fr;
    gap: 70px;
  }
  @media ${device.tablet} {
    display: flex;
    text-align: center;
  }
`;

const PlanetName = styled.h1`
  text-transform: uppercase;
  margin-bottom: 23px;
  @media ${device.laptop} {
    font-size: 48px;
  }
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

const PlanetSummary = styled.p`
  min-height: 150px;
  @media ${device.laptop} {
    font-size: 12px;
    line-height: 22px;
  }
  @media ${device.tablet} {
    min-height: unset;
  }
`;

const PlanetSource = styled.div`
  margin: 20px 0 23px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    margin: 0 6px;
    color: ${(props) => props.theme.colors.white};
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    justify-content: center;
  }
`;
