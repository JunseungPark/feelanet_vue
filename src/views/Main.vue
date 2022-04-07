<template>
  <div id="outer-wrap">
    <SideNav></SideNav>
    <router-view></router-view>
  </div>
</template>

<script>
import SideNav from '../components/SideNav';

export default {
  name: 'Main',
  components: {
    SideNav,
  }
}
</script>


<style>
</style>