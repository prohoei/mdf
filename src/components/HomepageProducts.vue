<template>
        <div>
            <div v-for="product in products.slice(0, 4)">
                <router-link v-bind:to="'/collection/' + product.id">
                    <img v-bind:src="'static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                    <p>{{ product.name }}</p>
                </router-link>
                <button @click="product.quantity += 1">Læg i kurv</button>
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