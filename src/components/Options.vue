<template>
  <div class="card search">
    <input
      v-model="search"
      class="input"
    />
  </div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SearchComp extends Vue {}

</script>

<style scoped>

</style>
