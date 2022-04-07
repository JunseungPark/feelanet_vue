<template>
  <ul class="list-meetingGroup">
    <template v-for="meeting in meetingListData">
      <li v-if="!meeting.isDelete" :key="meeting.id">
        <div class="p-all-m dp-flex vertical-top">
            <div class="abbr-wrap">
                <span class="abbr" style="background:#6d91cf; color:#fff;">{{meeting.topic}}</span>
                <a class="abbr-bookmark active"><i class="icon-fux-star-fill ft-orange ft-m"></i></a>
                <a class="abbr-bookmark"><i class="icon-fux-star ft-gray ft-m"></i></a>
            </div>
            <div class="ellipsis flex-1 m-l-m">
                <h6 class="ft-l m-b-s no-padding ellipsis">{{meeting.title}}</h6>
                <span class="ft-m"><i class="icon-fux-user m-r-xs"></i>{{meeting.members + "명"}}</span>
            </div>
            <div class="dropdown-list-wrap p-l-s">
                <button class="dropbtn icon-fux-more" @click="deleteMeeting(meeting.id)"></button>
                <DropDown :id='meeting.id' :isOpen="false"></DropDown>
                <!-- <ul class="dropdown-list right" style="display: none;">
                    <li><a><i class="icon-fux-edit"></i> 수정</a></li>
                    <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
                </ul> -->
            </div>
        </div>
        <div class="divide-row divide-gray"></div>
        <div v-if="!meeting.isSecret" class="p-all-m">
            <div class="dp-flex flex-between m-b-s">
                <span class="dp-block ft-m ellipsis"><i class="icon-fux-calendar m-r-xs dp-inblock align-center" style="width:33px;"></i> {{meeting.start_date + " ~ " + meeting.end_date}}</span>
                <b class="dp-block ft-s bg-skyblue bdr-all bdr-lightblue p-l-s p-r-s no-wrap">{{(meeting.state)}}</b>
                <b class="dp-block ft-s bg-darkgray bdr-all bdr-darkgray p-l-s p-r-s no-wrap">완료</b>
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
    deleteMeeting(id) {
      this.$emit('deleteMeeting', id)
    }
  }
}
</script>

<style>
</style>