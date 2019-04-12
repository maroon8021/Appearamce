<template>
  <div class="animation-view">
    <button @click="onClick">clicl to move</button>
    <section id="target-section">
      <div>test</div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {moveTo} from '../../components/animation/util'

@Component
export default class AnimationView extends Vue {
  onClick(e:any){
    let targetId = e.currentTarget.dataset.moveTo;
    let elementPositionTop = window.document
      .getElementById(targetId)
      .getBoundingClientRect().top;
    moveTo(true, elementPositionTop);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.animation-view{
  padding: 10%;
  & button{
    margin-bottom: 120%;
  }

}
</style>
