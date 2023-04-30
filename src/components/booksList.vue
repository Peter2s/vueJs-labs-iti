<script>
import {defineComponent} from 'vue'
import { books } from "@/assets/books";

export default defineComponent({
    name: "booksList",
    data:()=>({
        isWishlistVisible: false,
        books: books,
        wishList : []
    }),
    methods: {
        addToWishList: function (book){
            this.wishList.push(book);
        },
        removeFromWishList:function (book) {
            const bookIndex = this.wishList.findIndex(item => item === book)
            this.wishList.splice(bookIndex, 1);
        },
        formattedPrice:function(price) {
            return price.toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' });
        },
        disableAddToWishList:function(book){
            const index = this.wishList.findIndex(item => item.id === book.id)
            if(index !== -1) return true;
            else return false;
        }
    },
});
</script>

<template>
    <div class="container">
        <div class="row mt-2" >
            <div class="d-flex justify-content-between w-100">
                <div>
                    <a class="h2 text-decoration-none" @click="isWishlistVisible = false">All books</a>
                </div>
                <div>
                    <button class="btn btn-info align-self-end" @click="isWishlistVisible = true">
                        Wish list
                    </button>
                </div>
            </div>
        </div>
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
                            <button class="btn btn-primary" :disabled ="disableAddToWishList(book)" @click="addToWishList(book)">add to List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="wishList.length === 0 " class="alert alert-danger mt-2"> No books In wishList</div>
            <div class="table-responsive mt-2" v-else>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">books title </th>
                        <th scope="col">action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="book in wishList" :key="book.id">
                        <td>{{book.title}}</td>
                        <td> <Button class="btn btn-danger" @click="removeFromWishList(book)" > - </Button> </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<style scoped>
a:hover {
    cursor: pointer;
}
.more{
    color:green
}
.less{
    color:orange
}
</style>