<template>
    <div class="collection">
        <div class="banner" style="background: url('static/slider/slider4.jpg') center center no-repeat"></div>
        <div class="products ten-12">
            <div v-for="product in products">
                <router-link class="product-link" v-bind:to="'/collection/' + product.id">
                    <img v-bind:src="'static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                    <p>{{ product.name }}</p>
                </router-link>
                <span>${{ product.price }}</span>
                <button @click="product.quantity += 1">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i> ADD TO BAG
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            fetch('static/data/products.json')
                .then(response => response.json())
                .then(json => {
                    this.products = json.products
                })
        },
        data() {
            return {
                products: []
            }
        }
    }
</script>
