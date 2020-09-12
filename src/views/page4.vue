<template>
    <div>
        <div class="nav">
            <router-link to="/page4/page4-1">4-1</router-link>
            <router-link to="/page4/page4-2">4-2</router-link>
            <router-link to="/page4/page4-3">4-3</router-link>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: inline-block;
    width: 100%;
}

.nav a {
    color: red;
    margin: 0 10%;
}

.nav a.router-link-active {
    background-color: red;
    color: #fff;
}
</style>