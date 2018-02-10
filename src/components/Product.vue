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
                        <div class="inner-info">
                            <div class="inner-buy">
                                <span class="title">{{ product.name }}</span>
                                <span class="price">${{ product.price }}
                                    <span>
                                        <i class="fa fa-globe" aria-hidden="true"></i> Free Shipping Worldwide</span>
                                </span>
                                <select name="color">
                                    <option value="">Black</option>
                                    <option value="">White</option>
                                    <option value="">Yellow</option>
                                    <option value="">Green</option>
                                </select>
                                <select name="size">
                                    <option value="">Select Size</option>
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                    <option value="">XL</option>
                                </select>
                                <button @click="product.quantity += 1">
                                    <i class="fa fa-shopping-bag" aria-hidden="true"></i> Add to bag</button>
                                <button class="save">Save for later</button>
                            </div>
                            <div class="inner-extra">
                                <button class="size"><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Size Guide</button>
                                <span><i class="fa fa-share-alt" aria-hidden="true"></i> Share this product</span>
                            </div>
                        </div>

                        <div>
                            <tabs>
                                <tab name="Product">
                                    <span>Produktinformation</span>
                                    <p>
                                        Tommy Jeans Scanton jeans Model: DM0DM04372008 SLIM SCANTON BLCO Info Jeans Slim fit 5 lommer Almindelig talje for perfekt
                                        pasform Afskrabninger Skjult lynlåslukning Materials 99% bomuld 1% elastane Varenr.
                                        330241_4 Vaskeanvisninger Må ikke renses Lav temperatur, højst 60 C Tumblertørring,
                                        højst 40 C Må ikke klorbleges Skånsom vask højst 30 C
                                    </p>
                                </tab>
                                <tab name="Delivery">
                                    <span>Levering</span>
                                    <p>
                                        Leveres inden for 1-2 hverdage Gratis retur i 50 dage
                                        <br>
                                        <br> Det er muligt at tilkøbe dag til dag levering mandag-torsdag, hvis man ikke bor
                                        i bestemte yderområder.
                                    </p>
                                </tab>
                                <tab name="Info">
                                    <span>Kundeservice</span>
                                    <p>
                                        Ring til os
                                        <br> Tlf. (+45) 12 34 56 78
                                        <br> Man-Tor. 09:00 – 15:00
                                        <br> Fredag 09:00 – 14:00
                                        <br> Skriv til os
                                        <br> kundeservice@mail.dk
                                    </p>
                                </tab>
                            </tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sharpen">
            <div class="eight-12">
                <span>Sharpen Your Look</span>
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

        <section class="banner-second m-0" style="background: url('/static/slider/slider7.jpg') center center no-repeat">
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
