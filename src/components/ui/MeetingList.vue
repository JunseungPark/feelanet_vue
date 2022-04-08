<template>
  <ul class="list-meetingGroup">
    <template v-for="meeting in meetingListData">
      <li v-if="!meeting.isDelete" :key="meeting.id">
        <div class="p-all-m dp-flex vertical-top">
            <div class="abbr-wrap">
                <span class="abbr" :style="{background: setColor(meeting.topic), color:'#fff'}">{{meeting.topic}}</span>
                <a v-if="meeting.isBookmark" class="abbr-bookmark active"><i class="icon-fux-star-fill ft-orange ft-m"></i></a>
                <a v-else-if="!meeting.isBookmark" class="abbr-bookmark"><i class="icon-fux-star ft-gray ft-m"></i></a>
            </div>
            <div class="ellipsis flex-1 m-l-m">
                <h6 class="ft-l m-b-s no-padding ellipsis">{{meeting.title}}</h6>
                <span class="ft-m"><i class="icon-fux-user m-r-xs"></i>{{meeting.members + "명"}}</span>
            </div>
            <DropDown :id='meeting.id'  @deleteMeeting='deleteMeeting'></DropDown>
            <!-- <ul class="dropdown-list right" style="display: none;">
                <li><a><i class="icon-fux-edit"></i> 수정</a></li>
                <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
            </ul> -->
        </div>
        <div class="divide-row divide-gray"></div>
        <div v-if="!meeting.isSecret" class="p-all-m">
            <div class="dp-flex flex-between m-b-s">
                <span class="dp-block ft-m ellipsis"><i class="icon-fux-calendar m-r-xs dp-inblock align-center" style="width:33px;"></i> {{meeting.start_date + " ~ " + meeting.end_date}}</span>
                <b v-if="meeting.state == 2" class="dp-block ft-s bg-darkgray bdr-all bdr-darkgray p-l-s p-r-s no-wrap">완료</b>
                <b v-else-if="meeting.state == 1" class="dp-block ft-s bg-skyblue bdr-all bdr-lightblue p-l-s p-r-s no-wrap">진행중</b>
                <b v-else></b>
            </div>
            <span class="dp-block ft-m ellipsis m-b-s"><i class="icon-fux-location m-r-xs dp-inblock align-center" style="width:33px;"></i> {{meeting.room}}</span>
            <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">관리</b>{{meeting.manage}}</span>
            <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">주관</b>{{meeting.organizer}}</span>
        </div>
        <div v-if="meeting.isSecret" class="p-all-m">
          <div class="align-center p-t-l">
                <img src="../../assets/images/lock.png">
            </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
import DropDown from './DropDown.vue'


export default {
  name: 'MeetingList',
  props: {
    meetingListData: {
      type: Array
    }
  },
  components: {
    DropDown,
  },
  methods: {
    deleteMeeting(id){
      this.$emit('deleteMeeting', id)
    },
    setColor(value) {
      return (value === "생산") ? '#6d91cf' : (value === "사업") ? '#a585c1' : (value === "부서") ? '#ffacba' : '#ee977f'
    }
  }
}
</script>

<style>
</style>