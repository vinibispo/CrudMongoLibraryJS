<template>
  <div class="btn" :class="{hover: onHover}" @mouseenter="onHover = true" @mouseleave="onHover = false">
    <div class="path" :style='{backgroundColor: backColor}'></div>
    <span class="name"><i :class="`fas fa-sm fa-${icon}`"></i></span>
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ButtonComp extends Vue {
  @Prop(String) icon!: string
  @Prop(String) backColor!: string

  onHover: boolean = false
}

</script>

<style scoped>

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
