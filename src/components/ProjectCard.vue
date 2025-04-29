<template>
    <div class="project-card">
      <div class="project-image-container">
        <img 
          v-bind:src="image"
          :alt="`Screenshot of ${name}`" 
          class="project-image"
          loading="lazy"
        />
      </div>
      
      <div class="project-content">
        <h3 class="project-name">{{ name }}</h3>
        
        <div class="tech-stack">
          <span 
            v-for="(tech, index) in techStack" 
            :key="index"
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
        
        <p class="project-description">{{ description }}</p>
        
        <div class="project-links">
          <a 
            v-if="liveUrl" 
            :href="liveUrl" 
            target="_blank"
            class="project-link"
          >
            Live Demo
          </a>
          <a 
            v-if="codeUrl" 
            :href="codeUrl" 
            target="_blank"
            class="project-link"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      techStack: {
        type: Array,
        default: () => []
      },
      liveUrl: {
        type: String,
        default: ''
      },
      codeUrl: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: white;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .project-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-image {
    transform: scale(1.05);
  }
  
  .project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-name {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: #2c3e50;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tech-tag {
    background: #f0f0f0;
    color: #2c3e50;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .project-description {
    color: #666;
    margin: 0 0 1.5rem 0;
    flex-grow: 1;
  }
  
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .project-link {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background: #42b983;
    color: white;
    font-size: 0.875rem;
    transition: background 0.3s ease;
  }
  
  .project-link:hover {
    background: #3aa876;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .project-image-container {
      height: 180px;
    }
    
    .project-content {
      padding: 1rem;
    }
  }
  </style>