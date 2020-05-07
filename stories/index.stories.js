import {storiesOf} from '@storybook/svelte';
import MDBContainer from './MDBContainer/Index.svelte'
import Grid from './Grid/Index.svelte'
import Alerts from './Alerts/Index.svelte'
import Buttons from './Buttons/Index.svelte'
import Icon from './Icons/Index.svelte'
import Cards from './Cards/Index.svelte'


const story = Component => () => ({
  Component
});

storiesOf('Layout', module)
  .add('Containers', story(MDBContainer))
  .add('Grid', story(Grid));

storiesOf('Components', module)
  .add('Alerts', story(Alerts))
  .add('Buttons', story(Buttons))
  .add('Cards', story(Cards));

storiesOf('Content', module)
  .add('Icons List', story(Icon));
