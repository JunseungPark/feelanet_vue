<template>
  <ul class="list-meetingGroup">
    <li v-for="meeting in MeetingListData.section1" :key="meeting.id">
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
              <button class="dropbtn icon-fux-more"></button>
              <!-- <ul class="dropdown-list right" style="display: block;">
                  <li><a><i class="icon-fux-edit"></i> 수정</a></li>
                  <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
              </ul> -->
          </div>
      </div>
      <div class="divide-row divide-gray"></div>
      <div class="p-all-m">
          <div class="dp-flex flex-between m-b-s">
              <span class="dp-block ft-m ellipsis"><i class="icon-fux-calendar m-r-xs dp-inblock align-center" style="width:33px;"></i> {{meeting.start_date + " ~ " + meeting.end_date}}</span>
              <b class="dp-block ft-s bg-skyblue bdr-all bdr-lightblue p-l-s p-r-s no-wrap">{{(meeting.state)}}</b>
              <b class="dp-block ft-s bg-darkgray bdr-all bdr-darkgray p-l-s p-r-s no-wrap">완료</b>
          </div>
          <span class="dp-block ft-m ellipsis m-b-s"><i class="icon-fux-location m-r-xs dp-inblock align-center" style="width:33px;"></i> {{meeting.room}}</span>
          <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">관리</b>{{meeting.manage}}</span>
          <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">주관</b>{{meeting.organizer}}</span>
      </div>
    </li>
  <!-- <li>
    <div class="p-all-m dp-flex vertical-top">
        <div class="abbr-wrap">
            <span class="abbr" style="background:#a585c1; color:#fff;">사업</span>
            <a class="abbr-bookmark active"><i class="icon-fux-star-fill ft-orange ft-m"></i></a>
        </div>
        <div class="ellipsis flex-1 m-l-m">
            <h6 class="ft-l m-b-s no-padding ellipsis">사업기획회의</h6>
            <span class="ft-m"><i class="icon-fux-user m-r-xs"></i>12명</span>
        </div>
        <div class="dropdown-list-wrap p-l-s">
            <button class="dropbtn icon-fux-more"></button>
            <ul class="dropdown-list right">
                <li><a><i class="icon-fux-edit"></i> 수정</a></li>
                <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
            </ul>
        </div>
    </div>
    <div class="divide-row divide-gray"></div>
    <div class="p-all-m">
        <div class="dp-flex flex-between m-b-s">
            <span class="dp-block ft-m ellipsis"><i class="icon-fux-calendar m-r-xs dp-inblock align-center" style="width:33px;"></i> 2021.01.01 ~ 2021.12.31</span>
            <b class="dp-block ft-s bg-skyblue bdr-all bdr-lightblue p-l-s p-r-s no-wrap">진행중</b>
        </div>
        <span class="dp-block ft-m ellipsis m-b-s"><i class="icon-fux-location m-r-xs dp-inblock align-center" style="width:33px;"></i> 대표이사 회의실</span>
        <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">관리</b>남주혁 수석 (시스템설계부)</span>
        <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">주관</b>조승우 선임 (전략기획부)</span>
    </div>
  </li>
  <li>
    <div class="p-all-m dp-flex vertical-top">
        <div class="abbr-wrap">
            <span class="abbr" style="background:#ffacba; color:#fff;">부서</span>
            <a class="abbr-bookmark"><i class="icon-fux-star ft-gray ft-m"></i></a>
        </div>
        <div class="ellipsis flex-1 m-l-m">
            <h6 class="ft-l m-b-s no-padding ellipsis">부서장조찬회의</h6>
            <span class="ft-m"><i class="icon-fux-user m-r-xs"></i>12명</span>
        </div>
        <div class="dropdown-list-wrap p-l-s">
            <button class="dropbtn icon-fux-more"></button>
            <ul class="dropdown-list right">
                <li><a><i class="icon-fux-edit"></i> 수정</a></li>
                <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
            </ul>
        </div>
    </div>
    <div class="divide-row divide-gray"></div>
    <div class="p-all-m">
        <div class="align-center p-t-l">
            <img src="../assets/images/lock.png">
        </div>
    </div>
  </li>
  <li>
    <div class="p-all-m dp-flex vertical-top">
        <div class="abbr-wrap">
            <span class="abbr" style="background:#ee977f; color:#fff;">조찬</span>
            <a class="abbr-bookmark"><i class="icon-fux-star ft-gray ft-m"></i></a>
        </div>
        <div class="ellipsis flex-1 m-l-m">
            <h6 class="ft-l m-b-s no-padding ellipsis">조찬회의</h6>
            <span class="ft-m"><i class="icon-fux-user m-r-xs"></i>12명</span>
        </div>
        <div class="dropdown-list-wrap p-l-s">
            <button class="dropbtn icon-fux-more"></button>
            <ul class="dropdown-list right">
                <li><a><i class="icon-fux-edit"></i> 수정</a></li>
                <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
            </ul>
        </div>
    </div>
    <div class="divide-row divide-gray"></div>
    <div class="p-all-m">
        <div class="dp-flex flex-between m-b-s">
            <span class="dp-block ft-m ellipsis"><i class="icon-fux-calendar m-r-xs dp-inblock align-center" style="width:33px;"></i> 2021.01.01 ~ 2021.12.31</span>
            <b class="dp-block ft-s bg-darkgray bdr-all bdr-darkgray p-l-s p-r-s no-wrap">완료</b>
        </div>
        <span class="dp-block ft-m ellipsis m-b-s"><i class="icon-fux-location m-r-xs dp-inblock align-center" style="width:33px;"></i> 대표이사 회의실</span>
        <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">관리</b>남주혁 수석 (시스템설계부)</span>
        <span class="dp-block ft-m ellipsis m-b-s"><b class="ft-s bdr-all bdr-lightblue ft-darkblue p-l-s p-r-s m-r-xs">주관</b>조승우 선임 (전략기획부)</span>
    </div>
  </li> -->
  </ul>
</template>

<script>


export default {
  name: 'MeetingList',
  props: {
    MeetingListData: {
      type: Object
    }
  },
  components: {

  }
}
</script>

<style>
</style>