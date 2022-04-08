<template>
  <div class="dropdown-list-wrap p-l-s" @click="isOpen = !isOpen">
    <button class="dropbtn icon-fux-more"></button>
    <ul :id = id class="dropdown-list right" :style="(isOpen) ? 'display: block;' : 'display: none;'">
        <li><a><i class="icon-fux-edit"></i> 수정</a></li>
        <li @click="deleteMeeting()"><a><i class="icon-fux-bin"></i> 삭제</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DropDown',
  props: {
    id: {
      type: Number,
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    deleteMeeting() {
      this.$emit('deleteMeeting', this.id)
    }
  }
}
</script>

<style>
</style>