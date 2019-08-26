import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface Book {
  id: string
  title: string
  description: string
}

interface State {
  apiState: 'error' | 'loading' | 'alright'
  books: Book[]
}

export default new Vuex.Store({
  state: {
    apiState: 'alright',
    books: [
      {
        id: 'book1',
        title: 'book1',
        description: 'desc1',
      },
      {
        id: 'book2',
        title: 'book2',
        description: 'desc2',
      },
      {
        id: 'book3',
        title: 'book3',
        description: 'desc3',
      },
    ],
  } as State,
  mutations: {
    deleteBookById(state: State, id: string) {
      const i = state.books.findIndex(el => el.id === id)
      state.books.splice(i, 1)
    },
  },
  actions: {

  },
})
