<template>
  <!-- side -->
  <div id="sidenav-icon-all">
      <div class="sidenav-icon-bar">
      <div class="dp-flex m-l-l m-b-m">
          <a class="btn sidenav-btn btn-blue flex-1" onclick="document.getElementById('id01').style.display='block'">
            <img src="../assets/images/approval_write.png">회의체 개설하기
          </a>        
      </div>
        <ul class="sidenav-icon">
              <li>
                  <a href="meetingGroup_main.html">
                      <span class="nav_label">회의체 홈</span>
                  </a>
              </li>
              <li class="now">
                  <a href="#">
                      <span class="nav_label">즐겨찾는 회의체</span>
                      <span class="nav_folded"><i class="icon-fux-minus"></i></span>
                  <!--<span class="nav_folded"><i class="icon-fux-add"></i></span>-->
                  </a>
                  <ul class="sidenav-icon-second">
                      <li>
                          <a href="meetingDetail.html">
                            생산임원회의
                          </a>
                      </li>
                      <li>
                          <a>
                              사업기획회의
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
  <!--// side -->
</template>

<script>

export default {
  name: 'SideNav',
  components: {
  }
}
</script>


<style>
</style>