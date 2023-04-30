<script >
import {defineComponent} from 'vue'
import {useWishListStore} from '@/stores/wishListStore';
export default defineComponent({
   data:()=>({
       wishList: useWishListStore()
   }),
    mounted() {
       this.wishList.fetchWishlist();
    }
});

</script>

<template>
    <div v-if="wishList.items.length === 0 " class="alert alert-danger mt-2"> No books In wishList </div>
    <div class="table-responsive mt-2" v-else>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">books title </th>
                <th scope="col">action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in wishList.items" :key="book.id">
                <td>{{book.title}}</td>
                <td> <button class="btn btn-danger" @click="wishList.removeFromWishList(book)" > <i class="fa fa-trash" aria-hidden="true"></i>
                </button> </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>