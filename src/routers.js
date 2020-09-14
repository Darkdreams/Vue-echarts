import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/page1",
        component: () => import(/* webpackChunkName: "group-1" */ "./views/page1"),
    },
    {
        path: "/page2",
        component: () => import(/* webpackChunkName: "group-2" */ "./views/page2")
    },
    {
        path: "/page3",
        component: () => import(/* webpackChunkName: "group-3" */ "./views/page3")
    },
    {
        path: "/page4",
        component: () => import(/* webpackChunkName: "group-4" */ "./views/page4"),
        redirect: "/page4/page4-1",
        children: [
            // {
            //     path: "",
            //     component: () => import(/* webpackChunkName: "group-4-1" */ "./views/page4-1")
            // },
            {
                path: "/page4/page4-1",
                component: () => import(/* webpackChunkName: "group-4-1" */ "./views/page4-1"),
            },
            {
                path: "/page4/page4-2",
                component: () => import(/* webpackChunkName: "group-4-2" */ "./views/page4-2")
            },
            {
                path: "/page4/page4-3",
                component: () => import(/* webpackChunkName: "group-4-3" */ "./views/page4-3")
            },
        ]
    },
    {
        path: "/question/:id",
        name: "question",
        component: () => import(/* webpackChunkName: "group-3" */ "./views/Question"),
        props: true
    },
    {
        path: "/echarts",
        component: () => import(/* webpackChunkName: "Echarts" */ "./views/Echarts")
    },
    {
        path: "/WjDemo1",
        component: () => import(/* webpackChunkName: "WjDemo1" */ "./views/WjDemo1")
    },
    {
        path: "/WjDemo2",
        component: () => import(/* webpackChunkName: "WjDemo2" */ "./views/WjDemo2")
    },
    {
        path: "/WjDemo3",
        component: () => import(/* webpackChunkName: "WjDemo3" */ "./views/WjDemo3")
    },
    {
        path: "/WjDemo4",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/WjDemo4")
    },
    {
        path: "/WjDemo5",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/WjDemo5")
    },
    {
        path: "/WjDemo6",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/WjDemo6")
    },
    {
        path: "/WjDemo7",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/WjDemo7")
    },
    {
        path: "/Demo",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/Demo")
    },
    {
        path: "/WjDemo8",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/WjDemo8")
    },
    {
        path: "/WjDemo9",
        component: () => import(/* webpackChunkName: "WjDemo4" */ "./views/WjDemo9")
    },
    {
        path: "/Map",
        component: () => import(/* webpackChunkName: "Map" */ "./views/Map")
    },
    {
        path: "/Map1",
        component: () => import(/* webpackChunkName: "Map" */ "./views/Map1")
    },
    {
        path: "/TreeLegend",
        component: () => import(/* webpackChunkName: "Map" */ "./views/TreeLegend")
    },
];

const router = new VueRouter({ 
    mode: "history",
    routes,
})

// router.beforeResolve((to, from, next) => {
//     // ...
//     console.log(to)
//     console.log(from)
//     next()
// })

export default router