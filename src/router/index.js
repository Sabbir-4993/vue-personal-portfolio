import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/pages/Home";
import Resume from "../components/pages/Resume";
import Portfolio from "../components/pages/Portfolio";
import PortfolioDetails from "../components/pages/PortfolioDetails";
import Contact from "../components/pages/Contact";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/Resume',
            component: Resume,
            name: 'Resume'
        },
        {
            path: '/Portfolio',
            component: Portfolio,
            name: 'Portfolio'
        },
        {
            path: '/Portfolio/Details',
            component: PortfolioDetails,
            name: 'PortfolioDetails'
        },
        {
            path: '/Contact',
            component: Contact,
            name: 'Contact'
        }
    ],
    mode: "history"
})

export default router

