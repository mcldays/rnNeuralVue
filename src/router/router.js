import { createRouter, createWebHistory } from "vue-router";
import Main from "@/layout/Main.vue";
import HydroModelView from "@/layout/HydroModelView.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/", name : "Home", component : HydroModelView}
    ]
})

export default router
