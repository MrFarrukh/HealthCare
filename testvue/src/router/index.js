import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Doctors from '../views/Doctors.vue'
import Bemors from '../views/Bemors.vue'
import Rooms from '../views/Rooms.vue'
import Part from '../views/Part.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doctors',
    name:'Doctors',
    component:Doctors
  },
  {
    path: '/bemors',
    name:'Bemors',
    component:Bemors
  },
  {
    path: '/rooms',
    name:'Rooms',
    component:Rooms
  },
  {
    path: '/part',
    name:'part',
    component:Part
  },
]

const router = new VueRouter({
  routes
})

export default router
