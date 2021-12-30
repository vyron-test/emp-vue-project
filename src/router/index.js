import VueRouter from "vue-router"
import BaseApp from "@microBase/App"
import HelloWorld from "@microBase/HelloWorld"

const routes = [
    {
        path: "/",
        component: BaseApp
    },
    {
        path: "/hello",
        component: HelloWorld
    }
]

export const router = new VueRouter({
    routes
})