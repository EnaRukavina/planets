import { images } from '../../assets/images/index';
import { PlanetsNavBar } from './PlanetsNavBar';
import {
  GeologyImageContainer,
  PlanetContainer,
  PlanetFactBox,
  PlanetFactsContainer,
  PlanetImage,
  PlanetImageContainer,
  PlanetInfoContainer,
  PlanetName,
  PlanetSource,
  PlanetSummary,
  PlanetTop,
} from './styles';

export const Planet = ({ data, tab, setTab }: any) => {
  return (
    <PlanetContainer>
      <PlanetTop>
        <PlanetImageContainer>
          {tab === 'geology' ? (
            <div>
              <PlanetImage src={images[data.images['structure']]} />
              <GeologyImageContainer>
                <img src={images[data.images[tab]]} />
              </GeologyImageContainer>
            </div>
          ) : (
            <PlanetImage src={images[data.images[tab]]} />
          )}
        </PlanetImageContainer>
        <PlanetInfoContainer>
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
          <PlanetsNavBar setTab={setTab} tab={tab} planetName={data.name} />
        </PlanetInfoContainer>
      </PlanetTop>

      <PlanetFactsContainer>
        <PlanetFactBox>
          <h4>Rotation time</h4>
          <h2>{data.rotation}</h2>
        </PlanetFactBox>
        <PlanetFactBox>
          <h4>Revolution time</h4>
          <h2>{data.revolution}</h2>
        </PlanetFactBox>
        <PlanetFactBox>
          <h4>Radius</h4>
          <h2>{data.radius}</h2>
        </PlanetFactBox>
        <PlanetFactBox>
          <h4>Average temp.</h4>
          <h2>{data.temperature}</h2>
        </PlanetFactBox>
      </PlanetFactsContainer>
    </PlanetContainer>
  );
};
