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
import Progress from './Progress/Index.svelte'
import Navbar from './Navbar/Index.svelte';
import FormsBasic from './Forms/Index.svelte';
import InputGroup from './InputGroup/Index.svelte';
import Footer from './Footer/Index.svelte';
import Navs from './Navs/Index.svelte';
import Tables from './Tables/Index.svelte';
import DataTable from './DataTable/Index.svelte';
import Modal from './Modals/Index.svelte';
import Breadcrumb from './Breadcrumb/Index.svelte';
import Chart from './Charts/Index.svelte';

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

storiesOf('Navigation', module)
  .add('Navbar', story(Navbar))
  .add('Footer', story(Footer))
  .add('Navs', story(Navs))
  .add('Breadcrumb', story(Breadcrumb));

storiesOf("Forms", module)
  .add("Basic Examples", story(FormsBasic))
  .add('Input Groups', story(InputGroup));

storiesOf('Tables', module)
  .add('Basic Examples', story(Tables))
  .add('Data Tables', story(DataTable));

storiesOf('Modals', module)
  .add('Basic Examples', story(Modal));

storiesOf('Content', module)
  .add('Icons List', story(Icon));

storiesOf('Charts', module)
  .add('Chart', story(Chart));
