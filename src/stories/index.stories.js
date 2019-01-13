/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'
import ApmHeader from '../layouts/Header.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))


storiesOf('ApmHeader', module)
  .add('default', () => ({
    components: { ApmHeader },
    template: '<apm-header title="Default"/>'
  }))
  .add('with color blue', () => ({
    components: { ApmHeader },
    template: '<apm-header title="With Blue" color="blue"/>'
  }))
  .add('with color white', () => ({
    components: { ApmHeader },
    template: '<apm-header title="With White" color="white"/>'
  }))