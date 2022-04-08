<template>
  <!-- inner-wrap -->
  <div id="inner-wrap" class="sub-content">
      <!-- 서브 페이지 타이틀 -->
      <div class="subpage-header">
          <h3 class="ft-darkblue b">회의체 홈</h3>
      </div>
      <!-- // 서브 페이지 타이틀 -->
      <div class="space-l"></div>
      <!-- tab item -->
      <ul class="nav nav-tabs tab-bar">
          <li :class="(tabNum == 0) ? 'active' : ''">
              <a data-toggle="tab" @click='route("tab1" , 0)'>모두</a>
          </li>
          <li :class="(tabNum == 1) ? 'active' : ''">
              <a data-toggle="tab" @click='route("tab2" , 1)'>참여회의체</a>
          </li>
          <li :class="(tabNum == 2) ? 'active' : ''">
              <a data-toggle="tab" @click='route("tab3" , 2)'>부서회의체</a>
          </li>
          <li :class="(tabNum == 3) ? 'active' : ''">
              <a data-toggle="tab" @click='route("tab4" , 3)'>부문회의체</a>
          </li>
      </ul>
      <!-- // tab item -->
      <!-- tab content -->
      <router-view :meetingData='section2' :tabNum='tabNum' @deleteMeeting='deleteMeeting'></router-view>
      <!-- //tab content -->
  </div>
  <!-- // inner-wrap -->
</template>

<script>

export default {
  name: 'MeetingSection2',
  props: {
    section2: {
      type: Array,
    }
  },
  data () {
    return {
      tabNum: 0
    }
  },
  components: {
  },
  methods: {
    route(tab, number) {
      this.tabNum = number;
      this.$router.push({path: tab}).catch(() => {})
    },
    deleteMeeting(id){
      this.$emit('deleteMeeting', {section: 'S2', id: id})
    }
  },
}
</script>

<style>
</style>