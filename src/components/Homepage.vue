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

        <products-elements class="products"></products-elements>
    </div>
</template>

<script>
    import Products from '@/components/Homepage-products.vue'
    import Flickity from 'vue-flickity'

    export default {
        components: {
            'products-elements': Products,
            Flickity
        },

        data() {
            return {
                flickityOptions: {
                    initialIndex: 3,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true

                    // any options from Flickity can be used
                }
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
