<template>
  <div id="outer-wrap">
    <SideNav @addData="addData"></SideNav>
    <router-view></router-view>
  </div>
</template>

<script>
import SideNav from '../components/SideNav';
import { mapState } from "vuex";

export default {
  name: 'Main',
  components: {
    SideNav,
  },
  computed: {
    ...mapState({
      section1: state => state.section1,
      section2: state => state.section2,
    })
  },
  methods: {
    addData(data){
      this.$store.commit("SET_SECTION1_DATA", data[0])
      this.$store.commit("SET_SECTION2_DATA", data[1])
    }
  },
}
</script>


<style>
</style>