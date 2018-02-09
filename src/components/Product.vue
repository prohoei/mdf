<template>
    <div class="product">
        <div class="banner" style="background: url('/static/slider/slider5.jpg') center center no-repeat">
            <h2>50% off summer collection</h2>
        </div>
        <div v-for="product in products">
            <div v-if="product.id === $route.params.productId">
                <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                <p>{{ product.name }}</p>
                <p>Product ID is {{ $route.params.productId }}</p>
                <button @click="product.quantity += 1">Læg i kurv</button>
            </div>
        </div>
        <button @click="goHome">Go Home</button>
        <div>
            <tabs>
                <tab name="First tab">
                    <h2>First tab content</h2>
                </tab>
                <tab name="Second tab">
                    <h2>Second tab content</h2>
                </tab>
                <tab name="Third tab">
                    <h2>Third tab content</h2>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Tabs, Tab } from 'vue-tabs-component'

    Vue.component('tabs', Tabs);
    Vue.component('tab', Tab);

    export default {
        methods: {
            goHome() {
                this.$router.push('/');
            }
        },
        created() {
            fetch('/static/data/products.json')
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
