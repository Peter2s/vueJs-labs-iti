<script>
import {defineComponent} from 'vue'
import {useWishListStore} from '@/stores/wishListStore';

export default defineComponent({
    name: "booksList",
    data:()=>({
        isWishlistVisible: false,
        books: [],
        wishList:useWishListStore()
    }),
    methods: {
        formattedPrice:function(price) {
            return price.toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' });
        },
        disableAddToWishList:function(book){
            const index = this.wishList.items.findIndex(item => item.id === book.id)
            if(index !== -1) return true;
            else return false;
        }
    },
    mounted() {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => {
                this.books = data
            })
            .catch(error => console.error(error))
    }
});
</script>

<template>
    <div class="container">
        <div class="row mt-2" v-if="!isWishlistVisible">
            <div
                    class="card border-0 col-4"
                    v-for="book in books"
                    :key="book.id"
            >
                <img :src="book.image"  :alt="book.name"/>
                <div class="card-body p-3">
                    <h4 class="card-title">{{book.title}}</h4>
                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="w-50 my-1">{{book.category}}</div>
                        <div class="w-50 my-1">{{book.author}}</div>
                        <div  :class="[book.pages > 50 ? 'more' : '' , book.pages <= 50 ? 'less' : '','w-50 my-1']">{{book.pages}}</div>
                        <div class="w-50 my-1">{{formattedPrice(book.price)}}</div>
                        <div class="w-50 my-1">{{book.isbn}}</div>
                        <div class="w-50 my-1">
                            <button class="btn btn-primary" :disabled ="disableAddToWishList(book)" @click="wishList.addToWishList(book)">add to List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
router-link:hover {
    cursor: pointer;
    text-decoration: none;
}
.more{
    color:green
}
.less{
    color:orange
}
</style>