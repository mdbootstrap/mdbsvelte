import { addParameters, configure } from '@storybook/svelte';
import pkg from '../package.json';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    name: `MDBSvelte ${pkg.version}`,
    url: 'https://github.com/SauravKanchan/mdbsvelte',
    panelPosition: 'right',
    showPanel: false,
    theme: themes.dark
  },
});
