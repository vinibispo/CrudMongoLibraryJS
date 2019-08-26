import Vue from 'vue'
import Vuex from 'vuex'

const getId = () => {
  let d = new Date().getTime()
  let d2 = (performance && performance.now && (performance.now() * 1000)) || 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = Math.random() * 16
      if (d > 0) {
          r = (d + r) % 16 | 0
          d = Math.floor(d / 16)
      } else {
          r = (d2 + r) % 16 | 0
          d2 = Math.floor(d2 / 16)
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

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
    addBook(state: State, {title, description}: {title: string, description: string}) {
      state.books.push({
        title, description, id: getId(),
      })
    },
    editBook(state: State, {title, description, id}: {title: string, id: string, description: string}) {
      const i = state.books.findIndex(el => el.id === id)
      const slice = state.books.slice()
      slice.splice(i, 1, {
        id, description, title,
      })
      state.books = slice.slice()
    },
  },
  actions: {

  },
})
