import { createRouter,createWebHistory }  from 'vue-router'
import Home from "../views/home/Home.vue"

const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/login",
        component:() =>import('../views/userCenter/login/Login.vue')
    },
    {
        path:"/activityDetail",
        component:() =>import('../views/activity/activityDetail.vue')
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
