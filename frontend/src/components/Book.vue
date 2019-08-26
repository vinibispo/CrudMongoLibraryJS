<template>
  <div class="book-wrapper card">
    <div class="book">
      <div class="title" @click='showing = !showing'>
        {{title}}
      </div>
      <transition name='desc-trans'>
        <div v-show='showing' class="desc">
          {{description}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class BookComp extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string

  showing: boolean = false
}

</script>

<style scoped>

.book-wrapper {
  margin-bottom: 6px;
  cursor: pointer;
  transition: background-color .3s;
  min-height: 40px;
}

.book-wrapper:hover {
  background-color: #DBDEFF;
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
