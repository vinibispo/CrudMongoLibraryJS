<template>
  <div class="message">
    <span class="name">{{msg}}</span>
    <i :class="`fas fa-${icon} fa-7x ${spin ? 'fa-spin' : ''}`"></i>
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class MessageComp extends Vue {
  @Prop(Boolean) spin!: boolean
  @Prop(String) icon!: string
  @Prop(String) msg!: string
}

</script>

<style scoped>

.name {
  margin-top: 40px;
  margin-bottom: 40px;
}

.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  color: #707070;
  opacity: .6;
}

</style>
