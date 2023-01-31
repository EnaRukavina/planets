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
