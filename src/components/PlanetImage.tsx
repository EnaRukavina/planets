import styled from 'styled-components';
import { images } from '../assets/images';
import { device, Tab } from '../helpers';

interface PlanetImageProps {
  tab: Tab;
  data: any;
}
export const PlanetImage = ({ tab, data }: PlanetImageProps) => {
  return (
    <PlanetImageContainer>
      {tab === 'geology' ? (
        <>
          <PlanetImg src={images[data.images['structure']]} />
          <GeologyImageContainer>
            <img src={images[data.images[tab]]} />
          </GeologyImageContainer>
        </>
      ) : (
        <PlanetImg src={images[data.images[tab]]} alt={data.name} />
      )}
    </PlanetImageContainer>
  );
};

const PlanetImageContainer = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  position: relative;
  justify-content: center;
  @media ${device.tablet} {
    flex: 1;
  }
`;

const PlanetImg = styled.img`
  width: 100%;
  @media ${device.laptop} {
    width: 70%;
  }
  @media ${device.tablet} {
    width: 50%;
  }
`;

const GeologyImageContainer = styled.div`
  position: absolute;
  width: 160px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  @media ${device.tablet} {
    width: 80px;
  }
  img {
    width: 100%;
    position: relative;
    top: 100px;
  }
`;
