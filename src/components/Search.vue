<template>
  <div class="card search">
    <input
      v-model="search"
      class="input"
    />
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class SearchComp extends Vue {
  @Prop(String) value!: string

  search: string = ''

  created() {
    this.search = this.value
  }

  @Watch('search')
  onChange() {
    this.$emit('input', this.search)
  }
}

</script>

<style scoped>

.search {
  position: relative;
  height: 100%;
}

.input {
  width: 100%;
  position: absolute;
  top: 50%;
  padding: 0 8px;
  transform: translateY(-50%);
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 1em;
  font-family: 'Work Sans';
}

</style>
