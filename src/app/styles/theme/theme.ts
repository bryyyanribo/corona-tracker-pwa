export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#08090A',
    '--foreground-secondary': '#41474D',
    '--foreground-tertiary': '#FFF',
    '--foreground-quaternary': '#F4FAFF',
    '--foreground-light': '#41474D',

    '--background-default': '#FFF',
    '--background-secondary': '#A3B9CC',
    '--background-tertiary': '#5C7D99',
    '--background-light': '#FFFFFF',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#000',
    '--primary-light': '#B2FFE7',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5)',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground-default': '#5C7D99',
    '--foreground-secondary': '#A3B9CC',
    '--foreground-tertiary': '#000',
    '--foreground-quaternary': '#E5E5E5',
    '--foreground-light': '#FFFFFF',

    '--background-default': '#797C80',
    '--background-secondary': '#41474D',
    '--background-tertiary': '#08090A',
    '--background-light': '#41474D',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#fff',
    '--primary-light': '#B2FFE7',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(8, 9, 10, 0.5)',
  },
};
