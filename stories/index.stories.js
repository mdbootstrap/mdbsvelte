import {storiesOf} from '@storybook/svelte';
import MDBContainer from './MDBContainer/Index.svelte'


const story = Component => () => ({
  Component
});

storiesOf('Layout', module)
  .add('Get Started', story(MDBContainer))
