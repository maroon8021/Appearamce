<template>
  <div class="apm-header" :class="colorClassName">
    <div class="title">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ApmHeader extends Vue {
  @Prop() private title!: string;
  @Prop() private color!: string;

  private colorClassName: string = this.color || 'green';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.apm-header{
  display: flex;
  padding: 0.5rem 0;
  & .title{
    font-size: 1.4rem;
    color: #333;
    padding-left: 5%;
  }

  &.green{
    background-color: #00897B;
    & .title{
      color: #fff;
    }
  }

  &.blue{
    background-color: #0288D1;
    & .title{
      color: #fff;
    }
  }
}
</style>
