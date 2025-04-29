<template>
  <div class="about">
    <p>Hello there! I'm <b>Hoang Gia Long</b>, a Computer Science & Mathematics student with a natural curiosity for uncovering insights through data and a knack for bringing people together through well-organized events. Beyond the academic realm, I'm a passionate creative game developer and a devoted cat enthusiast.</p>
    <div class="skills">
      <!-- <h2>Skills</h2> -->
      <div>

      </div>
    </div>
  </div>
</template>

<style>
.about {
  width: 55%;
  margin: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      skills: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Git', 'UI/UX Design']
    }
  }
}
</script>