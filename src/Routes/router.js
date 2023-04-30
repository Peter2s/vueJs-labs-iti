import {createRouter,createWebHistory} from 'vue-router'
import WishList from "@/components/WishList.vue";
import Error404 from "@/components/Error404.vue";
import BooksList from "@/components/BooksList.vue";
const routes = [
    { path: '/', component: BooksList },
    { path: '/wishlist', component: WishList },
    {path:'/:pathMatch(.*)*', component:Error404,}
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
})
