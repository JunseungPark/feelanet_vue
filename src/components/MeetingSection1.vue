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
          <li class="active">
              <a data-toggle="tab" href="#tab1">모두</a>
          </li>
          <li>
              <a data-toggle="tab" href="#tab2">참여회의체</a>
          </li>
          <li>
              <a data-toggle="tab" href="#tab3">부서회의체</a>
          </li>
          <li>
              <a data-toggle="tab" href="#tab3">부문회의체</a>
          </li>
      </ul>
      <!-- // tab item -->
      <!-- tab content -->
      <router-view></router-view>
      <!-- //tab content -->
  </div>
  <!-- // inner-wrap -->
</template>

<script>

export default {
  name: 'Meeting1Content',
  components: {
  }
}
</script>

<style>
</style>