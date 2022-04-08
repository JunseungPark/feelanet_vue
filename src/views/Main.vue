<template>
  <div id="outer-wrap">
    <SideNav @addData="addData"></SideNav>
    <router-view :section1='section1' :section2='section2' @deleteMeeting='deleteMeeting'></router-view>
  </div>
</template>

<script>
import SideNav from '../components/SideNav';
import { mapState } from "vuex";
import {_} from 'vue-underscore';

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
      this.$store.commit("SET_SECTION1_DATA", data[0].section1)
      this.$store.commit("SET_SECTION2_DATA", data[1].section2)
    },
    deleteMeeting(id){
      const cloenList = _.clone(this.section1).map((e) => {
          if (e.id === id) e.isDelete = true
          return e;
      });
      this.$store.commit("DELETE_SECTION1_DATA", cloenList)
    }
  },
}
</script>


<style>
</style>