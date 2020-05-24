export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--background-default': '#FFF',
    '--background-tertiary': '#2B2D2F',
    '--foreground-tertiary': '#FFF',
    '--foreground-quaternary': '#F4FAFF',
    '--primary-dark': '#000',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--background-default': '#797C80',
    '--background-tertiary': '#08090A',
    '--foreground-quaternary': '#E5E5E5',
    '--foreground-tertiary': '#000',
    '--primary-dark': '#fff',
  },
};
