<template>
  <!-- side -->
  <div id="sidenav-icon-all">
      <div class="sidenav-icon-bar">
      <div class="dp-flex m-l-l m-b-m">
          <a class="btn sidenav-btn btn-blue flex-1" @click='addJsonData'>
            <img src="../assets/images/approval_write.png">데이터 채우기
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
  },
  data() {
    return {
      // 필요
      data: [
        {
          'section1': [
            {
              'id': 1,
              'topic': '생산',
              'title': '생산임원회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 0,
              'isBookmark': 1,
              'isSecret': 0,
              'category': 1,
            },
            {
              'id': 2,
              'topic': '사업',
              'title': '사업기획회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 1,
              'isBookmark': 1,
              'isSecret': 0,
              'category': 1,
            },
            {
              'id': 3,
              'topic': '생산',
              'title': '생산임원회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 0,
              'isBookmark': 0,
              'isSecret': 1,
              'category': 2,
            },
            {
              'id': 4,
              'topic': '조찬',
              'title': '조찬회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 2,
              'isBookmark': 0,
              'isSecret': 0,
              'category': 3,
            },
          ]
        },
        {
          'setciont2': [
            {
              'id': 1,
              'topic': '생산',
              'title': '생산임원회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 0,
              'isBookmark': 1,
              'isSecret': 0,
              'category': 1,
            },
            {
              'id': 2,
              'topic': '사업',
              'title': '사업기획회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 1,
              'isBookmark': 1,
              'isSecret': 0,
              'category': 1,
            },
            {
              'id': 1,
              'topic': '생산',
              'title': '생산임원회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 0,
              'isBookmark': 0,
              'isSecret': 1,
              'category': 2,
            },
            {
              'id': 4,
              'topic': '조찬',
              'title': '조찬회의',
              'members': 12,
              'start_date': '2021.01.01',
              'end_date': '2021.12.31',
              'room': '대표이사 회의실',
              'manage': '남주혁 수석(시스템설계부)',
              'organizer': '조승우 선임(전략기획부)',
              'state': 2,
              'isBookmark': 0,
              'isSecret': 0,
              'category': 3,
            },
          ]
        }
      ]
    } 
  },
  methods: {
    // 데이터 전송
    addJsonData(){
      this.$emit('addData', this.data)
    }
  },
}
</script>


<style>
</style>