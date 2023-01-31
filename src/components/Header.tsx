import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { planets } from '../helpers';

export const Header = ({ setTab }: any) => {
  return (
    <NavBar>
      <h2>The Planets</h2>
      <NavLinks>
        {planets.map(planet => (
          <StyledNavLink
            key={planet}
            to={`/${planet}`}
            onClick={() => setTab('overview')}
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
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  font-weight: 700;
  font-size: 11px;
  opacity: 0.7;
`;
const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;
