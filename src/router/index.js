import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import MeetingSection1 from '../components/MeetingSection1'
import MeetingSection2 from '../components/MeetingSection2'
import MeetingTab1Content from '../components/article/MeetingTab1Content'
import MeetingTab2Content from '../components/article/MeetingTab2Content'
import MeetingTab3Content from '../components/article/MeetingTab3Content'
import MeetingTab4Content from '../components/article/MeetingTab4Content'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'Section1Content',
        name: 'Section1Content',
        component: MeetingSection1,
        children: [
          {
            path:'tab1',
            name: 'tab1',
            component: MeetingTab1Content
          },
          {
            path:'tab2',
            name: 'tab2',
            component: MeetingTab2Content
          },
          {
            path:'tab3',
            name: 'tab3',
            component: MeetingTab3Content
          },
          {
            path:'tab4',
            name: 'tab4',
            component: MeetingTab4Content
          },
        ]
      },
      {
        path: 'Section2Content',
        name: 'Section2Content',
        component: MeetingSection2,
        children: [
          {
            path:'tab1',
            name: 'tab1',
            component: MeetingTab1Content
          },
          {
            path:'tab2',
            name: 'tab2',
            component: MeetingTab2Content
          },
          {
            path:'tab3',
            name: 'tab3',
            component: MeetingTab3Content
          },
          {
            path:'tab4',
            name: 'tab4',
            component: MeetingTab4Content
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
   routes
})

export default router