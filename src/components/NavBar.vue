<template>
<nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/Design">Design</router-link>
    <router-link class="link" to="/projects">Projects</router-link>
    <router-link class="link" to="/activities">Activities</router-link>
</nav>
</template>

<script>
export default {
name: 'NavBar'
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.link {
    color: #fff;
    background: #2c3e50;
    padding: 12px 24px;
    border-radius: 6px;
    margin: 1rem 1rem;
    text-decoration: none;
}
</style>