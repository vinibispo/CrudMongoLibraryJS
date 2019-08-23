<template>
  <div class="book-wrapper card">
    <div v-if='!editing' class="book">
      <div class="title" @click='showing = !showing' @dblclick='editing = !editing'>
        {{title}}
      </div>
      <transition name='desc-trans'>
        <div v-show='showing' class="desc">
          {{description}}
        </div>
      </transition>
    </div>
    <book-edit v-else
      :title='title'
      :description='description'
    />
  </div>
</template>

<script lang='ts'>

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

import BookEdit from '@/components/BookEdit.vue'

@Component({
  components: {
    'book-edit': BookEdit,
  },
})
export default class BookComp extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string

  showing: boolean = false
  editing: boolean = false
}

</script>

<style scoped>

.book-wrapper {
  margin-bottom: 6px;
  cursor: pointer;
  transition: transform .3s, height .3s;
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
  transition-duration: .3s;
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
}

</style>
