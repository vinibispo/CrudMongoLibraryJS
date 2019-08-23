<template>
  <div id="app">
    <div class="content">
      <div class="header">
        <div class="search-wrapper">
          <app-search
            v-model="search"
          />
        </div>
        <div class="options-wrapper">
          <app-options/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'
import Search from '@/components/Search.vue'
import Options from '@/components/Options.vue'

@Component({
  components: {
    'app-search': Search,
    'app-options': Options,
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
  flex-basis: 85%;
}

.options-wrapper {
  height: 40px;
  flex-basis: 15%;
  margin-left: 20px;
}

.header {
  display: flex;
}

</style>
