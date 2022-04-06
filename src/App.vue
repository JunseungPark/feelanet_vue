<template>
  <div id="app">
    <Header/>

    <Main/>
  </div>
</template>

<script>
//헤더
import Header from './components/Header.vue'
import Main from './views/Main'

export default {
  name: 'App',
  components: {
    Main,
    Header,
  }
}
</script>


<style>

</style>
