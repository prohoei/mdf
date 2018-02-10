<template>
    <div class="product">
        <div class="banner" style="background: url('/static/slider/slider5.jpg') center center no-repeat">
            <router-link class="link" to="/collection">
                <h2>50% off summer collection</h2>
            </router-link>
        </div>

        <section class="product-info">
            <div v-for="product in products">
                <div v-if="product.id === $route.params.productId">
                    <div class="gallery">
                        <div class="gallery-small">
                            <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                            <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                            <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                            <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                            <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                        </div>
                        <div class="gallery-big">
                            <img v-bind:src="'/static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                        </div>
                    </div>
                    <div class="information">
                        <p>{{ product.name }}</p>
                        <p>Product ID is {{ $route.params.productId }}</p>
                        <button @click="product.quantity += 1">Læg i kurv</button>

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
                </div>
            </div>
        </section>

        <section class="sharpen">
            <div class="eight-12">
                <span>Sharpen your look</span>
                <p>"Nettet har gjort en kæmpe forskel for måden, vi markedsfører. Du kan måle på stort set al interaktion på
                    nettet, hvilket gør kommunikationen langt skarpere og mere målrettet. Desuden er du i kontakt med dine
                    kunder og leads i realtid, hvilket betyder, at du hele tiden får feedback og kan optimere samarbejdet
                    med dem."</p>
            </div>
        </section>

        <section class="designs m-0">
            <div class="image image-start">
                <img src="/static/slider/look1.jpg" alt="girl looking">
            </div>
            <div class="design design-start">
                <h3>Extraordinary Design</h3>
                <p>
                    Produktblade og brochurer der downloades som pdf. fra de forskellige websites er automatisk fremstillet fra Text & Data Organizer,
                    på de enkelte landes/markeders lokalsprog. Pdf filer er autogenereret fra Text & Data Organizer, og altid
                    automatisk opdateret.
                </p>
                <ul>
                    <li>
                        <i class="fa fa-gift" aria-hidden="true"></i>
                        <br> Elegant Style
                    </li>
                    <li>
                        <i class="fa fa-glass" aria-hidden="true"></i>
                        <br> Elegant Style
                    </li>
                    <li>
                        <i class="fa fa-puzzle-piece" aria-hidden="true"></i>
                        <br> Elegant Style
                    </li>
                </ul>
                <button>Read More</button>
            </div>
            <div class="design design-end">
                <h3>Extraordinary Design</h3>
                <p>
                    Produktblade og brochurer der downloades som pdf. fra de forskellige websites er automatisk fremstillet fra Text & Data Organizer,
                    på de enkelte landes/markeders lokalsprog. Pdf filer er autogenereret fra Text & Data Organizer, og altid
                    automatisk opdateret.
                </p>
                <ul>
                    <li>
                        <i class="fa fa-gift" aria-hidden="true"></i>
                        <br> Elegant Style
                    </li>
                    <li>
                        <i class="fa fa-glass" aria-hidden="true"></i>
                        <br> Elegant Style
                    </li>
                    <li>
                        <i class="fa fa-puzzle-piece" aria-hidden="true"></i>
                        <br> Elegant Style
                    </li>
                </ul>
                <button>Read More</button>
            </div>
            <div class="image image-end">
                <img src="/static/slider/look2.jpg" alt="girl looking different">
            </div>
        </section>

        <section class="banner m-0" style="background: url('/static/slider/slider7.jpg') center center no-repeat">
            <button>BIG DISCOUNTS</button>
        </section>

    </div>
</template>

<script>
    import Vue from 'vue'
    import { Tabs, Tab } from 'vue-tabs-component'

    Vue.component('tabs', Tabs);
    Vue.component('tab', Tab);

    export default {
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
