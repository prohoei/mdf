<template>
    <header class="header main-header">
        <div class="main-header__logo">
            <img class="main-footer__img" src="static/logo.png" alt="logo">
        </div>
        <nav class="main-header__nav">
            <ul class="list">
                <li><router-link class="main-header__link" to="/">Home</router-link></li>
                <li><router-link class="main-header__link" to="/collection">Collection</router-link></li>
                <li><router-link class="main-header__link" to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>
