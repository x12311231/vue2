<template>
  <div>
    <div v-text="msg" ref="title">Student</div>
    <div>{{sname}}</div>
    <button @click="test">test</button>
    <button @click="showName">show name</button>
  </div>
</template>

<script>
import { show1 } from '@/mixin'
export default {
  name: "StudentL",
  data() {
      return {
          data: "test"
          ,sname: this.name // props属性不可直接修改
      }
  },
  methods: {
    test() {
      // alert('hello')
      alert(this.$refs.title)
    }
  }
  ,props: {
    msg:String
    ,name: {
      type:String,
      required:true
    }
  }
  ,mixins:[show1]
}
</script>

<style>

</style>