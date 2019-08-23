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
      <div class="books">
        <span v-for='b of books' :key='b.id'>
          <app-book
            :title='b.title'
            :description='b.description'
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

import Search from '@/components/Search.vue'
import Options from '@/components/Options.vue'
import BookComp from '@/components/Book.vue'

import { Book } from './store'

@Component({
  components: {
    'app-search': Search,
    'app-options': Options,
    'app-book': BookComp,
  },
})
export default class App extends Vue {
  @State books!: Book[]

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

.books {
  margin-top: 20px;
}

.header {
  display: flex;
}

</style>
