<template>
  <div>
    <input v-model="search"/>
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
