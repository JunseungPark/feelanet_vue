<template>
  <div id="outer-wrap">
    <SideNav></SideNav>
    <MeetingContent></MeetingContent>
  </div>
</template>

<script>
import SideNav from '../components/SideNav';
import MeetingContent from '../components/MeetingContent';

export default {
  name: 'Main',
  components: {
    SideNav,
    MeetingContent,
  }
}
</script>


<style>
</style>