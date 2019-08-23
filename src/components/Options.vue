<template>
  <div class="card options">
    <div class="btn-wrapper">
      <opt-button/>
    </div>
    <div class="btn-wrapper">
      <opt-button/>
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
export default class SearchComp extends Vue {}

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
