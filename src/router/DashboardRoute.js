import Contact from '../components/admin/contact/ContactIndex.vue'
import Dashboard from '../components/admin//Dashboard.vue'


const dashboardRoute = [{
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/dashboard/contact',
        name: 'Contact',
        meta: {
            requiresAuth: true
        },
        component: Contact,
    }

]
export default dashboardRoute