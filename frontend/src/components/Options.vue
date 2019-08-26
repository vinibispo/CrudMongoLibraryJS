<template>
  <transition name='fade' mode='out-in'>
    <div v-if='!confirm' class="card options" key='!confirm'>
      <div class="btn-wrapper">
        <div class="btn" :class="{hover: onHover}" @mouseenter="onHover = true" @mouseleave="onHover = false" @click="$emit('click')">
          <div class="path" style='background-color: #6657FF'></div>
          <span class="name"><i class="fas fa-sm fa-trash"></i></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class OptionsComp extends Vue {
  @Prop(Boolean) confirm!: boolean

  onHover: boolean = false
}

</script>

<style scoped>

.card {
  height: 100%;
  overflow: hidden;
}

.options {
  display: flex;
}

.btn-wrapper {
  flex-basis: 100%;
}

.btn, .content, .path {
  width: 100%;
  height: 100%;
}

.btn {
  position: relative;
  cursor: pointer;
}

.path {
  clip-path: circle(0px);
  position: absolute;
  transition-duration: .4s;
}

.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition-duration: .4s;
}

.btn.hover .path {
  clip-path: circle(50px);
}

.btn.hover .name {
  color: white;
}

</style>
