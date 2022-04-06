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
      <div class="tab-content">
          
          
          <!--  tab 1 :: 회의체 데이터가 없는 경우 (X) -->
          <div class="tab-pane active" id="tab1" style="display: none;">
              <div class="notfound-item">
                  <div class="img"><img src="../assets/images/notfound_doc_2.png"></div>
                  <div class="space-xl"></div>
                  <h4>개설한 회의체가 없습니다.</h4>
                  <div class="space-s"></div>
                  <h6 class="ft-400">회의체를 추가하려면 <button class="btn page-btn btn-blue-outline m-r-xs m-l-xs vertical-ttop" onclick="document.getElementById('id01').style.display='block'">회의체 개설하기</button> 버튼을 클릭합니다.</h6>
              </div>
          </div>
          
          <!--  tab 1 :: 회의체 데이터가 있는 경우 (O) -->
          <div class="tab-pane active" id="tab1" style="display: block;">
              <div class="space-l"></div>
              <ul class="list-meetingGroup">
                  <li onclick="location.href='meetingDetail.html'">
                      <div class="p-all-m dp-flex vertical-top">
                          <div class="abbr-wrap">
                              <span class="abbr" style="background:#6d91cf; color:#fff;">생산</span>
                              <a class="abbr-bookmark active"><i class="icon-fux-star-fill ft-orange ft-m"></i></a>
                          </div>
                          <div class="ellipsis flex-1 m-l-m">
                              <h6 class="ft-l m-b-s no-padding ellipsis">생산임원회의</h6>
                              <span class="ft-m"><i class="icon-fux-user m-r-xs"></i>12명</span>
                          </div>
                          <div class="dropdown-list-wrap p-l-s">
                              <button class="dropbtn icon-fux-more"></button>
                              <ul class="dropdown-list right" style="display: block;">
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
                  </li>
              </ul>
          </div>
      </div>
      <!-- //tab content -->
  </div>
  <!-- // inner-wrap -->
</template>

<script>

export default {
  name: 'MeetingContent',
  components: {
  }
}
</script>

<style>
</style>