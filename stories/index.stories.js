import {storiesOf} from '@storybook/svelte';
import MDBContainer from './MDBContainer/Index.svelte'
import Grid from './Grid/Index.svelte'
import Alerts from './Alerts/Index.svelte'
import Buttons from './Buttons/Index.svelte'
import Icon from './Icons/Index.svelte'
import Cards from './Cards/Index.svelte'
import Dropdowns from './Dropdowns/Index.svelte'
import BtnGroups from './ButtonsGroup/Index.svelte'
import MDBJumbotron from "./Jumbotron/Index.svelte";
import ListGroups from "./ListGroups/Index.svelte";
import Badges from "./Badges/Index.svelte";
import Spinners from "./Spinners/Index.svelte";
import Pagination from "./Pagination/Index.svelte";
import GettingStarted from './GettingStarted/Index.svelte'
import Progress from  './Progress/Index.svelte'

const story = Component => () => ({
  Component
});

storiesOf('Intoduction', module)
  .add('Getting Started', story(GettingStarted));

storiesOf('Layout', module)
  .add('Containers', story(MDBContainer))
  .add('Grid', story(Grid));

storiesOf('Components', module)
  .add('Alerts', story(Alerts))
  .add('Buttons', story(Buttons))
  .add('Buttons Groups', story(BtnGroups))
  .add('Cards', story(Cards))
  .add('Dropdowns', story(Dropdowns))
  .add('Jumbotron', story(MDBJumbotron))
  .add('List Groups', story(ListGroups))
  .add('Badges', story(Badges))
  .add('Spinner', story(Spinners))
  .add('Pagination', story(Pagination))
  .add('Progress', story(Progress));

storiesOf('Content', module)
  .add('Icons List', story(Icon));
