<template>
    <section class="posters-view">
      <h1 class="section-title">Poster Designs</h1>
      <div class="posters-grid">
        <PosterCard
          v-for="poster in posters"
          :key="poster.id"
          :name="poster.name"
          :image="poster.image"
        />
      </div>
    </section>
  </template>
  
  <script>
  import PosterCard from '../components/DesignCard.vue'
  import LanyardImg from '../assets/design/lanyard.png'
  import MRacePoster from '../assets/design/mrace.jpg'
  import TOEICPoster from '../assets/design/toeic.jpg'
  export default {
    name: 'PostersView',
    components: {
      PosterCard
    },
    data() {
      return {
        posters: [
          {
            id: 1,
            name: 'Faculty lanyard',
            image: LanyardImg
          },
          {
            id: 2,
            name: 'MRace',
            image: MRacePoster
          },
          {
            id: 3,
            name: 'TOEIC Mock Test',
            image: TOEICPoster
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .posters-view {
    margin: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    text-align: center;
    color: #2c3e50;
  }
  
  .posters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
  
  @media (max-width: 768px) {
    .posters-view {
      padding: 1rem;
    }
    
    .posters-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  </style>