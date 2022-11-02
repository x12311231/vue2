<template>
  <div>
    <div v-text="msg" ref="title">School</div>
    <div>{{sname}}</div>
    <button @click="test">test</button>
    <button @click="updateProps">修改props</button>
  
    <button @click="showName" v-say>show name</button>
  </div>
</template>

<script>
import { show1 } from '@/mixin'
export default {
  name: "SchoolL",
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
    ,updateProps() {
      // this.name = '北京大学';
      this.sname = '北京大学'
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