<template>
  <div>
    <div v-text="msg" ref="title">School</div>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  name: "SchoolL",
  data() {
      return {
          data: "test"
      }
  },
  methods: {
    test() {
      // alert('hello')
      alert(this.$refs.title)
    }
  }
}
</script>

<style>

</style>