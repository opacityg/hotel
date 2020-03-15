<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      val:[]
    }
  },
  created() {
    this.$axios.get("/localdata/singers").then(res => {
      console.log(res.data)
    })
  },

}
</script>

<style>
  /*import './style/base.scss'*/
  body{
    color: #434A54;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
