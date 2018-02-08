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
        data() {
            return {
                products: [
                    {
                        id: '01',
                        name: 'Khaki Suede Polish Work Boots',
                        price: 149.99,
                        category: 'women',
                        sale: true,
                        article: 'shoe',
                        quantity: 0,
                        img: 'shoe1.png'
                    },
                    {
                        id: '02',
                        name: 'Camo Fang Backpack Jungle',
                        price: 39.99,
                        category: 'women',
                        sale: false,
                        article: 'jacket',
                        quantity: 0,
                        img: 'jacket1.png'
                    },
                    {
                        id: '03',
                        name: 'Parka and Quilted Liner Jacket',
                        price: 49.99,
                        category: 'men',
                        sale: true,
                        article: 'jacket',
                        quantity: 0,
                        img: 'jacket2.png'
                    },
                    {
                        id: '04',
                        name: 'Cotton Black Cap',
                        price: 12.99,
                        category: 'men',
                        sale: true,
                        article: 'hats',
                        quantity: 0,
                        img: 'hat1.png'
                    },
                    {
                        id: '05',
                        name: 'Knit Sweater with Zips',
                        price: 29.99,
                        category: 'women',
                        sale: false,
                        article: 'sweater',
                        quantity: 0,
                        img: 'sweater1.png'
                    },
                    {
                        id: '06',
                        name: 'Long Linen-blend Shirt',
                        price: 18.99,
                        category: 'men',
                        sale: false,
                        article: 'shirt',
                        quantity: 0,
                        img: 'shirt1.png'
                    },
                    {
                        id: '07',
                        name: 'Knit Orange Sweater',
                        price: 28.99,
                        category: 'men',
                        sale: false,
                        article: 'sweater',
                        quantity: 0,
                        img: 'sweater2.png'
                    },
                    {
                        id: '08',
                        name: 'Camo Fang Backpack Jungle',
                        price: 59.99,
                        category: 'women',
                        sale: true,
                        article: 'jacket',
                        quantity: 0,
                        img: 'jacket3.png'
                    },
                    {
                        id: '09',
                        name: 'Golden Pilot Jacket',
                        price: 129.99,
                        category: 'women',
                        sale: false,
                        article: 'jacket',
                        quantity: 0,
                        img: 'jacket4.png'
                    },
                    {
                        id: '10',
                        name: 'Spotted Patterned Sweater',
                        price: 80.99,
                        category: 'women',
                        sale: false,
                        article: 'jacket',
                        quantity: 0,
                        img: 'sweater4.png'
                    },
                    {
                        id: '11',
                        name: 'Double Knit Sweater',
                        price: 59.99,
                        category: 'men',
                        sale: true,
                        article: 'jacket',
                        quantity: 0,
                        img: 'sweater5.png'
                    },
                    {
                        "id": "12",
                        "name": "Camo Fang Backpack Jungle",
                        "price": 59.99,
                        "category": "women",
                        "sale": true,
                        "article": "jacket",
                        "quantity": 0,
                        "img": "jacket3.png"
                    }
                ]

            }
        }
        /*
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
        */
    }

</script>
