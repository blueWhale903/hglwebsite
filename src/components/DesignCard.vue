<template>
    <div class="poster-card">
      <div class="poster-image-container" @click="openModal">
        <img 
          :src="image" 
          :alt="`Poster design: ${name}`" 
          class="poster-image"
          loading="lazy"
        />
        <div class="poster-overlay">
          <h3 class="poster-title">{{ name }}</h3>
        </div>
      </div>
  
      <!-- Modal for larger view -->
      <div v-if="showModal" class="poster-modal" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-button" @click="closeModal">&times;</button>
          <img :src="image" :alt="`Full view of ${name}`" class="modal-image">
          <h3 class="modal-title">{{ name }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PosterCard',
    props: {
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      openModal() {
        this.showModal = true
        document.body.style.overflow = 'hidden'
      },
      closeModal() {
        this.showModal = false
        document.body.style.overflow = 'auto'
      }
    }
  }
  </script>
  
  <style scoped>
  .poster-card {
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    position: relative;
  }
  
  .poster-image-container {
    position: relative;
    aspect-ratio: 3/4;
    cursor: pointer;
  }
  
  .poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .poster-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .poster-title {
    color: white;
    margin: 0;
    font-size: 1.1rem;
    text-align: center;
  }
  
  .poster-image-container:hover .poster-overlay {
    opacity: 1;
  }
  
  /* Modal Styles */
  .poster-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
  }
  
  .modal-image {
    max-height: 80vh;
    max-width: 100%;
    border-radius: 8px;
  }
  
  .modal-title {
    color: white;
    text-align: center;
    margin: 1rem 0 0 0;
  }
  
  .close-button {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
  }
  
  .close-button:hover {
    color: #42b983;
  }
  
  @media (max-width: 768px) {
    .poster-title {
      font-size: 1rem;
      padding: 0.5rem;
    }
    
    .modal-image {
      max-height: 70vh;
    }
  }
  </style>