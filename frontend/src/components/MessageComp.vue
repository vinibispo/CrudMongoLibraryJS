<template>
  <div class="card search">
    <i class="fas fa-sm fa-search icon"></i>
    <input
      class="input"
      placeholder="Pesquisar..."
      v-model="search"
    />
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SearchComp extends Vue {
}

</script>

<style scoped>

</style>
