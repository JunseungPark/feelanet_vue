import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import MeetingSection1 from '../components/MeetingSection1'
import MeetingSection2 from '../components/MeetingSection2'
import MeetingTabContent from '../components/article/MeetingTabContent'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Main',
    redirect: 'Section1Content/tab1',
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
            component: MeetingTabContent
          },
          {
            path:'tab2',
            name: 'tab2',
            component: MeetingTabContent
          },
          {
            path:'tab3',
            name: 'tab3',
            component: MeetingTabContent
          },
          {
            path:'tab4',
            name: 'tab4',
            component: MeetingTabContent
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
            component: MeetingTabContent
          },
          {
            path:'tab2',
            name: 'tab2',
            component: MeetingTabContent
          },
          {
            path:'tab3',
            name: 'tab3',
            component: MeetingTabContent
          },
          {
            path:'tab4',
            name: 'tab4',
            component: MeetingTabContent
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