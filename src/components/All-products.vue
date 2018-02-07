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
                        img: 'shoe1.png'
                    },
                    {
                        id: '02',
                        name: 'Camo Fang Backpack Jungle',
                        price: 39.99,
                        category: 'women',
                        sale: false,
                        article: 'jacket',
                        img: 'jacket1.png'
                    },
                    {
                        id: '03',
                        name: 'Parka and Quilted Liner Jacket',
                        price: 49.99,
                        category: 'men',
                        sale: true,
                        article: 'jacket',
                        img: 'jacket2.png'
                    },
                    {
                        id: '04',
                        name: 'Cotton Black Cap',
                        price: 12.99,
                        category: 'men',
                        sale: true,
                        article: 'hats',
                        img: 'hat1.png'
                    },
                    {
                        id: '05',
                        name: 'Knit Sweater with Zips',
                        price: 29.99,
                        category: 'women',
                        sale: false,
                        article: 'sweater',
                        img: 'sweater1.png'
                    },
                    {
                        id: '06',
                        name: 'Long Linen-blend Shirt',
                        price: 18.99,
                        category: 'men',
                        sale: false,
                        article: 'shirt',
                        img: 'shirt1.png'
                    },
                    {
                        id: '07',
                        name: 'Knit Orange Sweater',
                        price: 28.99,
                        category: 'men',
                        sale: false,
                        article: 'sweater',
                        img: 'sweater2.png'
                    },
                    {
                        id: '08',
                        name: 'Cotton Band-collar Blouse',
                        price: 49.99,
                        category: 'men',
                        sale: false,
                        article: 'shirt',
                        img: 'shirt2.png'
                    },
                    {
                        id: '08',
                        name: 'Camo Fang Backpack Jungle',
                        price: 59.99,
                        category: 'women',
                        sale: true,
                        article: 'jacket',
                        img: 'jacket3.png'
                    },
                    {
                        id: '09',
                        name: 'Golden Pilot Jacket',
                        price: 129.99,
                        category: 'women',
                        sale: false,
                        article: 'jacket',
                        img: 'jacket4.png'
                    },
                    {
                        id: '10',
                        name: 'Spotted Patterned Sweater',
                        price: 80.99,
                        category: 'women',
                        sale: false,
                        article: 'jacket',
                        img: 'sweater4.png'
                    },
                    {
                        id: '11',
                        name: 'Double Knit Sweater',
                        price: 59.99,
                        category: 'men',
                        sale: true,
                        article: 'jacket',
                        img: 'sweater5.png'
                    }
                ]

            }
        }
    }
</script>