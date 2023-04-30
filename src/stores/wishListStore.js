// stores/counter.js
import {defineStore} from 'pinia'

export const useWishListStore =  defineStore(
    'wishList',
    {
        state: () => ({
           items:[]
    }),
    actions: {
        async addToWishList(book) {
            this.items.push(book);
            try {
                const response = await fetch('http://localhost:3000/wishlist', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                })
                const data = await response.json()
                console.log('Book added to wishlist:', data)
            } catch (error) {
                console.error(error)
            }
        },
        async removeFromWishList(book){
            const bookIndex = this.items.findIndex(item => item === book)
            this.items.splice(bookIndex, 1);
            try {
                const response = await fetch(`http://localhost:3000/wishlist/${book.id}`, {
                    method: 'DELETE'
                })
                const data = await response.json()
                console.log('Book removed from wishlist:', data)
            } catch (error) {
                console.error(error)
            }
        },
        async fetchWishlist() {
            try {
                const response = await fetch('http://localhost:3000/wishlist')
                this.items = await response.json()
            } catch (error) {
                console.error(error)
            }
        }
    },
})