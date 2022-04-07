<template>
  <div class="tab-content">
      <!--  tab 1 :: 회의체 데이터가 없는 경우 (X) -->
      <div class="tab-pane active" id="tab1" style="display: block;">
          <div class="notfound-item">
              <div class="img"><img src="../../assets/images/notfound_doc_2.png"></div>
              <div class="space-xl"></div>
              <h4>개설한 회의체가 없습니다.</h4>
              <div class="space-s"></div>
              <h6 class="ft-400">회의체를 추가하려면 <button class="btn page-btn btn-blue-outline m-r-xs m-l-xs vertical-ttop" onclick="document.getElementById('id01').style.display='block'">회의체 개설하기</button> 버튼을 클릭합니다.</h6>
          </div>
      </div>
      
      <!--  tab 1 :: 회의체 데이터가 있는 경우 (O) -->
      <div class="tab-pane active" id="tab1" style="display: none;">
          <div class="space-l"></div>
          <ul class="list-meetingGroup">
              <MeetingList></MeetingList>
          </ul>
      </div>
  </div>
</template>

<script>
import MeetingList from '../ui/MeetingList';

export default {
  name: 'MeetingTab3Page',
  components: {
    MeetingList
  }
}
</script>


<style>
</style>