<template>
  <div id="app">
    <div class="header">
      <!-- <img src="./assets/ava.png" alt="avatar" class="ava-img img-cropper"> -->
      <div class="info">
        <p class="info-name">Hoang Gia Long</p>
        <p>hglong903@gmail.com</p>
        <div class="social">
          <a href="https://github.com/blueWhale903">Github </a>
          <a href="https://www.linkedin.com/in/ho%C3%A0ng-gia-long-831112223/">Linkedin</a>
        </div>
      </div>
    </div>
    <NavBar />
    <router-view />
    <footer>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
  padding: 1rem;
  background: #2c3e50;
  color: white;
}

.img-cropper {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.ava-img {
  display: inline;
  height: 10%;
  width: 10%;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.info-name {
  font-size: 28px;
  font-family: Helvetica, sans-serif;
  font-weight: 600;
  margin: 2px;
}


</style>