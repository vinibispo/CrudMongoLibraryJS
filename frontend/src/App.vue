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
          <app-options
            :confirm='confirmOptions'
            @add="addBook"
            @cancel="cancelOptions"
          />
        </div>
      </div>
      <div class="books">
        <transition name='fade' mode='out-in'>
          <transition-group key='tras' v-if='showBooks' name='fade'>
            <div v-for='b of getBooks' :key='b.id'>
              <app-book
                :title='b.title'
                :description='b.description'
                :id='b.id'
              />
            </div>
          </transition-group>
          <app-msg key='doesnotexit' v-else-if="booksNotFound"
            icon='search'
            msg='Esse livro não existe na sua biblioteca.'
          />
          <app-msg key='naotemlivro' v-else-if="noBooksOnLibrary"
            icon='sad-cry'
            msg='Você não tem livros na biblioteca.'
          />
          <app-msg key='errorondownload' v-else-if="reqError"
            icon='sad-tear'
            msg='Um erro ocorreu ao baixar os livros.'
          />
          <app-msg key='beingdownloaded' v-else-if="isAppLoading"
            icon='circle-notch'
            msg='Os seus livros estão sendo baixados.'
            :spin='true'
          />
        </transition>
      </div>
      <div style="height: 50px;"></div>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

import Search from '@/components/Search.vue'
import Options from '@/components/Options.vue'
import BookComp from '@/components/Book.vue'
import Message from '@/components/MessageComp.vue'

import { Book } from './store'

@Component({
  components: {
    'app-search': Search,
    'app-msg': Message,
    'app-options': Options,
    'app-book': BookComp,
  },
})
export default class App extends Vue {
  @State books!: Book[]
  @State apiState!: 'error' | 'loading' | 'alright'

  search: string = ''
  optionType: 'add' | '' = ''
  confirmOptions: boolean = false

  addBook() {
    this.optionType = 'add'
    this.confirmOptions = true
  }
  cancelOptions() {
    this.confirmOptions = false
    this.optionType = ''
  }

  get getBooks(): Book[] {
    return this.books.filter(el => el.title.toLowerCase().includes(this.search.toLowerCase()))
  }
  get showBooks(): boolean {
    return this.reqAlright && this.getBooks.length > 0
  }
  get booksNotFound(): boolean {
    return this.reqAlright && this.getBooks.length === 0 && this.search !== ''
  }
  get noBooksOnLibrary(): boolean {
    return this.reqAlright && this.getBooks.length === 0 && this.search === ''
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

#app {
  background-color: white;
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
  flex-basis: 94.5%;
}

.options-wrapper {
  height: 40px;
  flex-basis: 6.5%;
  margin-left: 20px;
}

.books {
  margin-top: 20px;
}

.header {
  display: flex;
}

</style>
