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

        <div class="productSale">
            <tabs>
                <tab name="NEW ARRIVALS">
                    <div class="products">
                        <div v-for="product in products.slice(0, 4)">
                            <router-link v-bind:to="'/collection/' + product.id">
                                <img v-bind:src="'static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                                <p>{{ product.name }}</p>
                            </router-link>
                            <button @click="product.quantity += 1">Læg i kurv</button>
                        </div>
                    </div>
                </tab>
                <tab name="TOP SELLERS">
                    <div class="products">
                        <div v-for="product in products.slice(4, 8)">
                            <router-link v-bind:to="'/collection/' + product.id">
                                <img v-bind:src="'static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                                <p>{{ product.name }}</p>
                            </router-link>
                            <button @click="product.quantity += 1">Læg i kurv</button>
                        </div>
                    </div>
                </tab>
                <tab name="FEATURED">
                    <div class="products">
                        <div v-for="product in products.slice(8, 12)">
                            <router-link v-bind:to="'/collection/' + product.id">
                                <img v-bind:src="'static/images/' + product.img" v-bind:alt="product.name + ' image'" width="200">
                                <p>{{ product.name }}</p>
                            </router-link>
                            <button @click="product.quantity += 1">Læg i kurv</button>
                        </div>
                    </div>
                </tab>
            </tabs>
        </div>

        <flickity class="citat" ref="flickity" :options="flickityOptionsSecond">
            <div class="carousel-cell">
                <img src="/static/users/jane.png" alt="kunde jane">
                <h3>Jane Smith</h3>
                <p>"Nettet har gjort en kæmpe forskel for måden, vi markedsfører. Du kan måle på stort set al interaktion på
                    nettet, hvilket gør kommunikationen langt skarpere og mere målrettet. Desuden er du i kontakt med dine
                    kunder og leads i realtid, hvilket betyder, at du hele tiden får feedback og kan optimere samarbejdet
                    med dem."</p>
            </div>
            <div class="carousel-cell">
                <img src="/static/users/john.png" alt="kunde john">
                <h3>John Johnson</h3>
                <p>"Jeg mener, det er Henry Ford, der oprindeligt har sagt dette. Ikke desto mindre er det rigtig godt ramt.
                    Hvis du stopper markedsføringen for at spare penge, risikerer du blot at ende i en nedadgående spiral,
                    hvor du får et endnu større behov for at spare penge senere. Formår du ikke at tiltrække nye kunder eller
                    gøre en indsats for at beholde dine nuværende kunder, hiver du tæppet væk under dig selv og din virksomhed."</p>
            </div>
            <div class="carousel-cell">
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
            fetch('static/data/products.json')
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
