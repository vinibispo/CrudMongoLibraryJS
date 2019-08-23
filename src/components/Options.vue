<template>
  <div class="card options">
    <div class="btn-wrapper">
      <opt-button back-color='#6657FF'/>
    </div>
    <div class="btn-wrapper">
      <opt-button back-color='#FF5757'/>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'
import Button from '@/components/OptionsButton.vue'

@Component({
  components: {
    'opt-button': Button,
  }
})
export default class OptionsComp extends Vue {}

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
  flex-basis: 50%;
}

</style>
