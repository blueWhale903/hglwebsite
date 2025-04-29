<template>
    <div class="activity-card">
      <div class="activity-image-container">
        <img 
          :src="image" 
          :alt="`Image of ${name} activity`" 
          class="activity-image"
          loading="lazy"
        />
        <div class="activity-date" v-if="date">{{ date }}</div>
      </div>
      
      <div class="activity-content">
        <h3 class="activity-name">{{ name }}</h3>
        <p class="activity-description">{{ description }}</p>
        
        <div class="activity-details" v-if="details">
          <ul>
            <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
          </ul>
        </div>
        
        <div class="activity-role" v-if="role">
          <span class="role-badge">{{ role }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActivityCard',
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
      date: {
        type: String,
        default: ''
      },
      role: {
        type: String,
        default: ''
      },
      details: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>
  
  <style scoped>
  .activity-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: white;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .activity-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  .activity-image-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
  }
  
  .activity-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .activity-card:hover .activity-image {
    transform: scale(1.05);
  }
  
  .activity-date {
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    border-top-left-radius: 4px;
  }
  
  .activity-content {
    padding: 1.25rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .activity-name {
    margin: 0 0 0.75rem 0;
    font-size: 1.2rem;
    color: #2c3e50;
  }
  
  .activity-description {
    color: #555;
    margin: 0 0 1rem 0;
    line-height: 1.5;
  }
  
  .activity-details {
    margin-bottom: 1rem;
  }
  
  .activity-details ul {
    padding-left: 1.2rem;
    margin: 0;
  }
  
  .activity-details li {
    color: #555;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
  }
  
  .activity-role {
    margin-top: auto;
  }
  
  .role-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #f0f7ff;
    color: #2c6ecb;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .activity-image-container {
      height: 160px;
    }
    
    .activity-content {
      padding: 1rem;
    }
  }
  </style>