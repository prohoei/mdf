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
                        }
                    ]
    
                }
            }
        }
    </script>