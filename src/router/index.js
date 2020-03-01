import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

// new Router 创建一个路由实例
export default new Router({
    routes// es简写模式 routes=>等价于routes:routes
})