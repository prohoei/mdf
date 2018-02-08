<template>
    <div>
        <div v-for="product in products">
            <div v-if="product.id === $route.params.productId">
                <img v-bind:src="'../static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                <p>{{ product.name }}</p>
                <p>Product ID is {{ $route.params.productId }}</p>
                <button @click="product.quantity += 1">Læg i kurv</button>
            </div>
        </div>
        <button @click="goHome">Go Home</button>
        <div>
            <tabs>
                <tab name="First tab">
                    First tab content
                </tab>
                <tab name="Second tab">
                    Second tab content
                </tab>
                <tab name="Third tab">
                    Third tab content
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import { Tabs, Tab } from 'vue-tabs-component'

    export default {
        components: {
            'tabs': Tabs,
            'tab': Tab
        },
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
