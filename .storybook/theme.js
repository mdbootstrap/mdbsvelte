import { create } from '@storybook/theming/create';
import pkg from "../package";

export default create({
  base: "dark",
  brandTitle: `MDBSvelte ${pkg.version}`,
  brandUrl: "https://github.com/SauravKanchan/mdbsvelte"
});
