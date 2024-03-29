import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainView
        },
        {
            path: '/note-add',
            name: 'NoteAdd',
            component: () => import("@/views/NoteViewAdd.vue")
        },
        {
            path: '/note-redact',
            name: 'NoteRedact',
            component: () => import("@/views/NoteRedactView.vue")
        }
    ]
})

export default router
