import {create} from '@storybook/theming/create';
import pkg from "../package";

export default create({
  name: "MDBSvelte",
  base: "dark",
  brandTitle: `MDBSvelte ${pkg.version}`,
  showAddonPanel: false,
  showSearchBox: true,
  brandUrl: "https://github.com/SauravKanchan/mdbsvelte"
});
