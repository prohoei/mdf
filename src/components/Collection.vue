<template>
    <div class="collection">
        <div class="banner" style="background: url('static/slider/slider4.jpg') center center no-repeat"></div>
        <products-elements></products-elements>
    </div>
</template>

<script>
    import Products from '@/components/AllProducts.vue'

    export default {
        components: {
            'products-elements': Products
        }
    };
</script>
