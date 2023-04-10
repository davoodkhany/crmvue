import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoute from './DashboardRoute'
import RegisterUser from '../components/public/User/RegisterUser.vue'
import SignupUserStep1 from '../components/public/User/SignupUserStep1.vue'
import NotFound from '../components/NotFound.vue'
import axios from "./../plugins/axios";
import SignupUser from '../components/public/User/SignupUser.vue'

import { useRegisterUser } from "../stores/RegisterUserStore"





export const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),

    routes: [{
            path: '/',
            name: 'home',
            component: SignupUserStep1,

        },
        {
            path: '/signup',
            name: 'Signup',
            component: SignupUser,
            meta: {
                guest: true
            },

            children: [{
                path: 'step',
                name: 'step-1',
                component: SignupUserStep1,
            }]
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        },
        ...dashboardRoute,
    ],
})



router.beforeEach(async(to, from, next) => {
    const token = localStorage.getItem('token')
    let isAuthenticated;
    try {
        const res = await axios.get("/user", {
            headers: {
                Authorization: `Bearer ${token}`,
                token: token,
            },
        });
        // Save globaly user login id or email ...
        const userSave = useRegisterUser();
        userSave.user = res.data.user
            // 

        let status = res.status
        isAuthenticated = true;

    } catch (err) {
        isAuthenticated = false
    }

    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
        if (!isAuthenticated) {
            next({
                path: '/Signup',
                params: { nextUrl: to.fullPath },
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (isAuthenticated == false) {
            next()

        } else {
            next({ name: 'Dashboard' })
        }
    } else {
        next()
    }
});