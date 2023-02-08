import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { images } from '../assets/images';
import {
  device,
  getColor,
  getMobileMenuCircleColor,
  planets,
} from '../helpers';

export const Header = ({ setTab }: any) => {
  const pathname = useLocation()?.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setTab('overview');
    isMenuOpen && setIsMenuOpen(false);
  };
  return (
    <NavBar>
      <NavTitle to='/Mercury'>The Planets</NavTitle>
      <HamburgerMenu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      >
        <img src={images.iconHamburger} />
      </HamburgerMenu>
      {isMenuOpen && (
        <Menu>
          <NavLinks>
            {planets.map((planet) => (
              <MobileNavMenuItem
                color={getMobileMenuCircleColor(planet)}
                key={planet}
                onClick={handleMenuItemClick}
                to={`/${planet}`}
              >
                <div className='circle' />
                <p>{planet}</p>
                <img src={images.iconChevron} />
              </MobileNavMenuItem>
            ))}
          </NavLinks>
        </Menu>
      )}
      <NavLinks>
        {planets.map((planet) => (
          <StyledNavLink
            key={planet}
            to={`/${planet}`}
            onClick={() => setTab('overview')}
            color={getColor(planet)}
            isActive={`/${planet}` === pathname}
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
  @media ${device.tablet} {
    padding: 16px 24px;
    flex-direction: row;
  }
`;
const NavTitle = styled(NavLink)`
  color: white;
  font-size: 40px;
  text-decoration: none;
  font-family: 'Antonio', sans-serif;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5px;
  font-weight: 500;
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
  @media ${device.tablet} {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)<{ isActive: boolean }>`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  position: relative;
  top: 2px;

  :after {
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    background: ${(props) => props.color};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    left: ${(props) => (props.isActive ? 0 : '50%')};
    @media ${device.tablet} {
      display: none;
    }
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

const HamburgerMenu = styled.button<{ isMenuOpen: boolean }>`
  display: none;
  @media ${device.tablet} {
    all: unset;
    display: flex;
    padding: 5px;
    opacity: ${(props) => (props.isMenuOpen ? 0.3 : 1)};
  }
`;

const MobileNavMenuItem = styled(NavLink)<{ color: string }>`
  display: flex;
  width: 100%;
  padding: 20px 0;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 15px;
  :not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .circle {
    background-color: ${(props) => props.color};
    height: 20px;
    width: 20px;
    border-radius: 100%;
  }
  p {
    flex: 1;
    margin-left: 25px;
  }
`;
const Menu = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    padding: 24px;
    background-color: ${(props) => props.theme.colors.black};
    position: absolute;
    height: calc(100% - 61px);
    top: 61px;
    width: 100%;
    left: 0;
    z-index: 10;
    overflow: auto;
    animation-name: anim-open;
    animation-duration: 0.4s;
    ::-webkit-scrollbar {
      display: none;
    }
    @keyframes anim-open {
      0% {
        height: 0;
      }
      100% {
        height: calc(100% - 61px);
      }
    }

    ${NavLinks} {
      display: flex;
      flex-direction: column;
      opacity: 1;
      gap: 0;
      margin-top: 0;
    }
  }
`;
