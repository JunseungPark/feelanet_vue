<template>
  <ul :id = id class="dropdown-list right" :style="(isOpen) ? 'display: block;' : 'display: none;'">
      <li><a><i class="icon-fux-edit"></i> 수정</a></li>
      <li><a><i class="icon-fux-bin"></i> 삭제</a></li>
  </ul>
</template>

<script>

export default {
  name: 'DropDown',
  props: {
    id: {
      type: Number,
    },
    isOpen: {
      type: Boolean,
      require: true,
      default: false
    },
  }
}
</script>

<style>
</style>