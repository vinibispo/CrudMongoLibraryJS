<template>
  <div class="book-wrapper">
    <div class="book">
      <div class="title">
        <input v-model="tit" class="input"/>
      </div>
      <div class="desc">
        <input v-model="description" class="input"/>        
      </div>
    </div>
    <div class="options">
      <span class="save">Salvar</span>
      <span class="cancel">Cancelar</span>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class BookComp extends Vue {
  @Prop({type: String, default: ''}) title!: string
  @Prop({type: String, default: ''}) description!: string

  tit: string = ''
  desc: string = ''

  created() {
    this.tit = this.title
    this.desc = this.description
  }
}

</script>

<style scoped>

.cancel {
  margin-left: 4px;
  color: #FF5757;
}

.save {
  color: #6657FF;
}

.book-wrapper {
  margin-bottom: 6px;
  cursor: pointer;
  transition: transform .3s, height .3s;
  position: relative;
}

.book-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 9px rgba(0,0,0,.15);
}

.desc, .title {
  padding: 6px;
  box-sizing: border-box;
}

.desc {
  height: 50px;
  overflow: hidden;
}

.desc-trans-enter, .desc-trans-leave-to {
  height: 0;
  padding: 0;
  padding-left: 6px;
  transition-duration: .3s;
}

.desc-trans-enter-to, .desc-trans-leave {
  height: 50px;
  padding: 6px;
  transition-duration: .3s;
}

.input {
  font-family: 'Work Sans';
  border: none;
  font-size: 1.1em;
  outline: none;
}

.options {
  position: absolute;
  right: 4px;
  bottom: 4px;
}

</style>
