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
            @add="addBook"
          />
        </div>
      </div>
      <div class="books">
        <transition name='add-book'>
          <app-book v-if='addingBook' class='add-book-edit'
            :adding='true'
            :title='""'
            :description='""'
            @cancel='v => addingBook = false'
          />
        </transition>
        <transition v-if='!adding' name='fade' mode='out-in'>
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
  addingBook: boolean = false

  addBook() {
    this.addingBook = true
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

.add-book-enter, .add-book-leave-to {
  height: 0;
  min-height: 0 !important;
  transform: scale(.6,.6);
  transition: height .4s, transform .4s;
  margin: 0 0 !important;
}

.add-book-enter-to, .add-book-leave {
  height: 92px;
  transform: scale(1,1);
  margin: 20px 0 !important;
  min-height: 0 !important;
  transition: height .4s, transform .4s;
}

.add-book-edit {
  margin: 20px 0;
  overflow: hidden !important;
}

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
