<template>
  <div id="app">
    <div class="content">
      <div class="header">
        <div class="search-wrapper">
          <app-search
            v-model="search"
          />
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
export default class App extends Vue {

  search: string = ''
}

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
  align-items: flex-start;
}

.content {
  flex-basis: 700px;
  margin-top: 150px;  
}

.search-wrapper {
  height: 40px;
}

</style>
