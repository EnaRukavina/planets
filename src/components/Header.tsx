import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { device, getColor, planets } from '../helpers';

export const Header = ({ setTab }: any) => {
  return (
    <NavBar>
      <NavTitle>The Planets</NavTitle>
      <NavLinks>
        {planets.map(planet => (
          <StyledNavLink
            key={planet}
            to={`/${planet}`}
            onClick={() => setTab('overview')}
            color={getColor(planet)}
          >
            {planet}
          </StyledNavLink>
        ))}
      </NavLinks>
    </NavBar>
  );
};

const NavBar = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media ${device.laptop} {
    flex-direction: column;
    padding: 30px;
  }
`;
const NavTitle = styled.h2`
  @media ${device.laptop} {
    font-size: 28px;
    line-height: 1;
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  font-weight: 700;
  font-size: 11px;
  opacity: 0.7;
  @media ${device.laptop} {
    margin-top: 30px;
  }
`;
const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  position: relative;
  top: 2px;

  :after {
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${props => props.color};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;
