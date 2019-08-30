<template>
  <div class="book-wrapper card" :class='{hover: id !== undefined}'>
    <div class="book" @click='toggleShow'>
      <div class="title">
        <span v-if='!editing'>{{title}}</span>
        <input v-else class='input' placeholder='Title...' v-model='inpTitle'/>
        <transition name='fade'>
          <div class="options">
            <template v-if='!editing'>
              <span @click.prevent='EditBook'><i class="fas icon fa-sm fa-edit"></i></span>
              <span @click.prevent='deleteBook'><i class="fas icon fa-sm fa-trash"></i></span>
            </template>
            <template v-else>
              <span @click.prevent='cancel'><i class="fas special cancel fa-lg fa-times"></i></span>
              <span @click.prevent='confirm'><i class="fas special check fa-lg fa-check"></i></span>
            </template>
          </div>
        </transition>
      </div>
      <transition name='desc-trans'>
        <div v-show='showing' class="desc">
          <span v-if="!editing">{{description}}</span>
          <input v-else class='input' placeholder='Description...' v-model='inpDesc'/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'

@Component
export default class BookComp extends Vue {
  @Prop(Boolean) adding!: string
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(String) id!: string

  @Mutation deleteBookById!: (id: string) => void
  @Mutation addBook!: (obj: {title: string, description: string}) => void
  @Mutation editBook!: (obj: {id: string, title: string, description: string}) => void

  inpTitle: string = ''
  inpDesc: string = ''
  editing: boolean = false

  showing: boolean = false

  created() {
    this.inpTitle = this.title
    this.inpDesc = this.description

    if (!this.id) {
      this.showing = true
      this.editing = true
    }
  }

  cancel() {
    this.$emit('cancel')
    if (this.id)
      this.editing = false
  }
  confirm() {
    if (!this.id) {
      this.addBook({
        title: this.inpTitle,
        description: this.inpDesc,
      })
      this.$emit('cancel')
    } else if (this.editing === true) {
      this.editBook({
        id: this.id,
        description: this.inpDesc,
        title: this.inpTitle,
      })
      this.editing = false
    }
  }
  toggleShow() {
    if (this.id && this.editing !== true)
      this.showing = !this.showing
  }
  EditBook() {
    this.editing = true
    this.showing = true
  }
  deleteBook() {
    this.deleteBookById(this.id)
  }
}

</script>

<style scoped>

.icon {
  transition: color .3s;
  margin-left: 8px;
}

.input {
  background: none;
  border: none;
  box-sizing: 100%;
  width: 100%;
  font-size: 1em;
  font-family: 'Work Sans';
  outline: none;
}

.icon:hover {
  color: white;
}

.cancel {
  color: #FF5757;
}

.check {
  color: #5DFF57;
  margin-left: 6px;
}

.options {
  position: absolute;
  right: 7px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.book-wrapper {
  margin-bottom: 6px;
  cursor: pointer;
  transition: background-color .3s;
  min-height: 40px;
}

.book-wrapper.hover:hover {
  background-color: #9ECBEC;
}

.title {
  position: relative;
}

.desc, .title {
  padding: 11px;
  box-sizing: border-box;
}

.desc {
  height: 50px;
  overflow: hidden;
  transition-duration: .3s;
}

.desc-trans-enter, .desc-trans-leave-to {
  height: 0;
  padding: 0;
  padding-left: 11px;
  transition-duration: .3s;
}

.desc-trans-enter-to, .desc-trans-leave {
  height: 50px;
  padding: 11px;
}

</style>
