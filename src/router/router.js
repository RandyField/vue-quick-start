import Home from '@/views/home.vue'

export default [
    {
        path: '/',
        name: 'home',//命名
        alias: '/home_page',//别名
        component: Home
    },
    {
        path: '/about',
        name: 'about', //命名路由--- 组件中调用 :to="{name : 'about'}"
        //which is lazy-loaded when the route is visited
        component: () => import('@/views/about.vue')
    },
    //动态路由
    {
        path: '/argu/:name',
        name:'argu',
        component: () => import('@/views/argu.vue')
    },
    //嵌套路由
    {
        path: '/parent',
        name:'parent',
        component: () => import('@/views/parent.vue'),
        children: [
            {
                path: 'child', //不需要'/'前缀
                component: () => import('@/views/child.vue')
            }
        ]
    },
    //加载多个组件
    {
        path: '/named_view',
        components: {
            default: () => import('@/views/child.vue'),
            email: () => import('@/views/email.vue'),
            Tel: () => import('@/views/tel.vue'),
        }
    },
    {
        path:'/store',
        component: () => import('@/views/store.vue')
    },
    //重定向
    {
        path: '/main',
        // redirct:'/'
        // redirct: { name: 'home' }
    }
]