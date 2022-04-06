<template>
  <div id="app">
    <Header/>

    <Main/>

    <Footer/>
  </div>
</template>

<script>
//헤더
import Header from './components/Header.vue'
//풋터
import Footer from './components/Footer.vue'
import Main from './views/Main'

export default {
  name: 'App',
  components: {
    Main,
    Header,
    Footer,
  }
}
</script>


<style>
  @import 'assets/styles/style.scss';
</style>
