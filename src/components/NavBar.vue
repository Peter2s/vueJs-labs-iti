<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "NavBar"
})
</script>

<template>
    <div class="container">
        <div class="row mt-2" >
            <div class="d-flex justify-content-between w-100">
                <div>
                    <router-link to="/" class="h2 text-decoration-none">All books</router-link>
                </div>
                <div>
                    <RouterLink to="/wishlist">
                        <button class="btn btn-info align-self-end" >
                            Wish list
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>