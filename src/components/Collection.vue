<template>
    <div class="collection">
        <div class="banner" style="background: url('static/slider/slider4.jpg') center center no-repeat">
            <div class="six-12">
                <div class="header-container">
                    <h3>
                        <span>most wanted</span>
                    </h3>
                </div>
                <h1>New Collection</h1>
                <button>Browse collection</button>
            </div>
        </div>

        <section class="all-products ten-12">
            <div class="filter">
                <ul>
                    <li>News collection (1-32 of 58)</li>
                    <li>Sort by
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li>Features
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li>Size
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li>Colours
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <li>Price
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
            <div class="products">
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
            <div class="pagination">
                <ul>
                    <li>
                        <a href="">1</a>
                    </li>
                    <li>
                        <a href="">2</a>
                    </li>
                    <li>
                        <a href="">3</a>
                    </li>
                    <li>
                        <a href="">4</a>
                    </li>
                    <li>
                        <a href="">5</a>
                    </li>
                </ul>
            </div>
        </section>

        <section class="collection-newsletter m-0">
            <div class="news-wrapper six-12">
                <div>
                    <button>YOUR EMAIL</button>
                </div>
                <div>
                    <button>SUBSCRIBE TO OUR NEWSLETTER</button>
                </div>
            </div>
        </section>

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
