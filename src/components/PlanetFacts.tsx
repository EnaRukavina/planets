import styled from "styled-components";
import { device } from "../helpers";

export const PlanetFacts = ({ data }: any) => {
  return (
    <>
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
    </>
  );
};

const PlanetFactsContainer = styled.div`
  display: grid;
  margin-top: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-transform: uppercase;
  @media ${device.laptop} {
    gap: 10px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const PlanetFactBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 23px;
  @media ${device.laptop} {
    padding: 15px;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    opacity: 0.5;
    margin-bottom: 4px;
    @media ${device.laptop} {
      font-size: 8px;
      line-height: 16px;
      letter-spacing: 0.73px;
    }
    @media ${device.tablet} {
      margin-bottom: 0px;
    }
  }
  h2 {
    @media ${device.laptop} {
      font-size: 24px;
      line-height: 1.5;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
  }
`;
