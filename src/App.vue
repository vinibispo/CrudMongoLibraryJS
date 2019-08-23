<template>
  <div id="app">
    <div class="content card">
      <div class="header">
        <div class="search-wrapper">
          <app-search/>
        </div>
        <div class="options">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'
import Search from '@/components/Search.vue'

@Component({
  components: {
    'app-search': Search,
  },
})
export default class App extends Vue {}

</script>

<style src='@/assets/global.css'>
</style>

<style scoped>

#app {
  background-color: #FBFBFC;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.content {
  flex-basis: 700px;
  margin-top: 150px;  
}

</style>
