<template>
    <div class="homepage">
        <flickity class="banner" ref="flickity" :options="flickityOptions">
            <div class="carousel-cell" style="background: url('static/slider/slider1.jpg') center center no-repeat">
                <span @click="previous()" class="left-arrow">&#8656;</span>
                <span @click="next()" class="right-arrow">&#8658;</span>
            </div>
            <div class="carousel-cell" style="background: url('static/slider/slider2.jpg') center center no-repeat">
                <span @click="previous()" class="left-arrow">&#8656;</span>
                <span @click="next()" class="right-arrow">&#8658;</span>
            </div>
            <div class="carousel-cell" style="background: url('static/slider/slider3.jpg') center center no-repeat">
                <span @click="previous()" class="left-arrow">&#8656;</span>
                <span @click="next()" class="right-arrow">&#8658;</span>
            </div>
        </flickity>

        <section class="newsletter ten-12">
            <div class="lookbook" style="background: url('static/slider/him.jpg') center center no-repeat">
                <h3>
                    <span>Men's</span>
                    <br> lookbook
                </h3>
            </div>
            <div class="newsletter-signup">
                <img src="static/slider/news-icon.png" alt="small icon">
                <h3>Get our newsletter</h3>
                <p>Join our maillist to reeive
                    <br>special discounts</p>
                <form>
                    <input type="text" placeholder="ENTER YOUR EMAIL">
                    <br>
                    <button>SUBSCRIBE</button>
                </form>
            </div>
            <div class="lookbook" style="background: url('static/slider/her.jpg') center center no-repeat">
                <h3>
                    <span>Women's</span>
                    <br> lookbook
                </h3>
            </div>
        </section>

        <section class="brands ten-12">
            <div class="header-container">
                <h3>
                    <span>Top Brands</span>
                </h3>
            </div>
            <img src="/static/slider/logos.png" alt="brands">
        </section>

        <section class="sale ten-12">
            <div class="big-sale">
                <a href="#">
                    <img src="static/slider/big-sale.jpg" alt="big sale">
                </a>
            </div>
            <div class="mid-sale">
                <a href="#">
                    <img src="static/slider/mid-sale1.jpg" alt="mid sale one">
                </a>
            </div>
            <div class="mid-sale2">
                <a href="#">
                    <img src="static/slider/mid-sale2.jpg" alt="mid sale two">
                </a>
            </div>
        </section>

        <section class="productSale">
            <tabs>
                <tab name="NEW ARRIVALS">
                    <div class="products ten-12">
                        <div v-for="product in products.slice(0, 4)">
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
                </tab>
                <tab name="TOP SELLERS">
                    <div class="products ten-12">
                        <div v-for="product in products.slice(4, 8)">
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
                </tab>
                <tab name="FEATURED">
                    <div class="products ten-12">
                        <div v-for="product in products.slice(8, 12)">
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
                </tab>
            </tabs>
        </section>

        <section class="discount m-0" style="background: url('static/slider/discount-bg.jpg') center center no-repeat">
            <div class="eight-12">
                <div class="discount-aside">
                    <h2>All summer</h2>
                </div>
                <div class="discount-price">
                    <img src="/static/slider/discount.png" alt="kunde jane">
                </div>
                <div class="discount-aside">
                    <h2>Collection</h2>
                </div>
            </div>
        </section>

        <flickity class="citat m-0" ref="flickitySecond" :options="flickityOptionsSecond">
            <div class="carousel-cell eight-12">
                <img src="/static/users/jane.png" alt="kunde jane">
                <h3>Jane Smith</h3>
                <p>"Nettet har gjort en kæmpe forskel for måden, vi markedsfører. Du kan måle på stort set al interaktion på
                    nettet, hvilket gør kommunikationen langt skarpere og mere målrettet. Desuden er du i kontakt med dine
                    kunder og leads i realtid, hvilket betyder, at du hele tiden får feedback og kan optimere samarbejdet
                    med dem."</p>
            </div>
            <div class="carousel-cell eight-12">
                <img src="/static/users/john.png" alt="kunde john">
                <h3>John Johnson</h3>
                <p>"Jeg mener, det er Henry Ford, der oprindeligt har sagt dette. Ikke desto mindre er det rigtig godt ramt.
                    Hvis du stopper markedsføringen for at spare penge, risikerer du blot at ende i en nedadgående spiral,
                    hvor du får et endnu større behov for at spare penge senere. Formår du ikke at tiltrække nye kunder eller
                    gøre en indsats for at beholde dine nuværende kunder, hiver du tæppet væk under dig selv og din virksomhed."</p>
            </div>
            <div class="carousel-cell eight-12">
                <img src="/static/users/hans.png" alt="kunde hans">
                <h3>Hans Hansen</h3>
                <p>"Husk, at du kender dine produkter og services bedre end nogen anden. Det er ikke sikkert, at hverken dine
                    potentielle eller eksisterende kunder har sat sig ligeså godt ind i det, du tilbyder. Det sætter Richard
                    Branson udmærket ord på i dette citat. Forestil dig, at du bliver introduceret til dit produkt eller
                    service for første gang, og forklar det derefter med ord, du selv ville forstå."</p>
            </div>
        </flickity>

    </div>
</template>

<script>
    import Vue from 'vue'
    import Flickity from 'vue-flickity'
    import { Tabs, Tab } from 'vue-tabs-component'

    Vue.component('tabs', Tabs);
    Vue.component('tab', Tab);

    export default {
        components: {
            Flickity
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
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                },
                flickityOptionsSecond: {
                    initialIndex: 3,
                    prevNextButtons: false,
                    pageDots: true,
                    wrapAround: true
                },
                products: []
            }
        },
        methods: {
            next() {
                this.$refs.flickity.next();
            },
            previous() {
                this.$refs.flickity.previous();
            }
        }
    };
</script>
