import { theme } from './theme';

export const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
] as const;

export type Planet = typeof planets[number];

export const getColor = (planet: Planet) => {
  switch (planet) {
    case 'Mercury':
      return theme.colors.lightBlue;
    case 'Venus':
      return theme.colors.yellow;
    case 'Earth':
      return theme.colors.purple;
    case 'Mars':
      return theme.colors.darkOrange;
    case 'Jupiter':
      return theme.colors.red;
    case 'Saturn':
      return theme.colors.orange;
    case 'Uranus':
      return theme.colors.teal;
    case 'Neptune':
      return theme.colors.darkBlue;
    default:
      return theme.colors.lightBlue;
  }
};

export type Tab = 'overview' | 'structure' | 'geology';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const getMobileMenuCircleColor = (planet: Planet) => {
  return theme.colors[planet];
};
