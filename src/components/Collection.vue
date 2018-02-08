<template>
    <div>
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
