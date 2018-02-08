<template>
    <header class="header main-header" v-scroll-class>
        <div class="main-header__logo">
            <router-link to="/">
                <img class="main-footer__img" src="/static/logo.png" alt="logo">
            </router-link>
        </div>
        <nav class="main-header__nav">
            <ul class="main-header__list">
                <li>
                    <router-link class="main-header__link" to="/">Login</router-link>
                </li>
                <li>
                    <router-link class="main-header__link" to="/">Items</router-link>
                </li>
                <li>
                    <div class="main-header__toggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul class="main-header__toggleMenu">
                            <li>
                                <router-link class="main-header__link" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="main-header__link" to="/collection">Collection</router-link>
                            </li>
                            <li>
                                <router-link class="main-header__link" to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script>
    import VueScrollClass from 'vue-scroll-class'

    export default {
        directives: {
            'scroll-class': VueScrollClass
        }
    }
</script>
