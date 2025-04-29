<template>
    <div class="about">
      <h1>About Me</h1>
      <p>Detailed bio, skills, and experience go here.</p>
      <div class="skills">
        <h2>Skills</h2>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </template>
  
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