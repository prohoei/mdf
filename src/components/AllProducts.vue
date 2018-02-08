<template>
    <div>
        <div v-for="product in products">
            <router-link v-bind:to="'/collection/' + product.id">
                <img v-bind:src="'static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                <p>{{ product.name }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        created() {
            fetch('static/data/products.json')
            .then(response => response.json())
            .then(json => {
                this.products = json.products
            })
        },
        data() {
            return{
                products: []
            }
        }
    }
</script>