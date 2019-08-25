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
        <transition-group v-if='reqAlright && getBooks.length > 0' name='fade'>
          <div v-for='b of getBooks' :key='b.id'>
            <app-book
              :title='b.title'
              :description='b.description'
            />
          </div>
        </transition-group>
        <msg-comp v-elseif="reqAlright && getBooks.length === 0"/>
        <msg-comp v-elseif="isAppLoading"/>
        <msg-comp v-elseif="reqError"/>
      </div>
      <div style="height: 100px;"></div>
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
  @State apiState!: 'error' | 'loading' | 'alright'

  search: string = ''

  get getBooks(): Book[] {
    return this.books.filter(el => el.title.toLowerCase().includes(this.search.toLowerCase()))
  }
  get isAppLoading(): boolean {
    return this.apiState === 'loading'
  }
  get reqError(): boolean {
    return this.apiState === 'error'
  }
  get reqAlright(): boolean {
    return this.apiState === 'alright'
  }
}

</script>

<style src='@/assets/global.css'>
</style>

<style scoped>

.fade-leave, .fade-enter-to {
  opacity: 1;
  transition-duration: .3s;
}

.fade-leave-to, .fade-enter {
  opacity: 0;
  transition-duration: .3s;
}

#app {
  background-color: #FBFBFC;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
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
