<template>
  <div class="projects-container">
    <h1>My Projects</h1>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :image="project.image"
        :tech-stack="project.techStack"
        :live-url="project.liveUrl"
        :code-url="project.codeUrl"
      />
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  margin: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
  
<script>
import ProjectCard from '../components/ProjectCard.vue'
import RayTracingImage from '../assets/projects/RayTracing.png'
import EPM from '../assets/projects/epm.png'
import FinanceApp from '../assets/projects/finance.png'
import Forecasting from '../assets/projects/forecast.png'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Finance App Design',
          description: 'A modern finance app designed using figma',
          image: FinanceApp,
          techStack: ['Figma'],
          liveUrl: 'https://www.figma.com/proto/t1bU0qKRUSjSmirwkvwAri/Finance-app?node-id=0-1&t=UDj5PMdOTou1iEAD-1',
          codeUrl: 'https://www.figma.com/proto/t1bU0qKRUSjSmirwkvwAri/Finance-app?node-id=0-1&t=UDj5PMdOTou1iEAD-1'
        },
        {
          id: 2,
          name: 'Ray Tracing',
          description: 'A rendering project using ray tracing to create photorealistic images',
          image: RayTracingImage,
          techStack: ['C++', 'CUDA'],
          liveUrl: 'https://github.com/blueWhale903/CudaRayTracer',
          codeUrl: 'https://github.com/blueWhale903/CudaRayTracer'
        },
        {
          id: 3,
          name: 'EPM',
          description: 'Event and Participant Management',
          image: EPM,
          techStack: ['Next.JS', 'PosgreSQL', 'Prisma', "Express"],
          liveUrl: 'https://epm-dashboard.vercel.app/dashboard',
          codeUrl: 'https://github.com/blueWhale903/EPM-API'
        },
        {
          id: 4,
          name: 'PM10 Forecasting',
          description: 'Developed a time series model in R to forecast the PM10 air quality index',
          image: Forecasting,
          techStack: ['R', 'Python'],
          liveUrl: '/',
          codeUrl: '/'
        }
      ]
    }
  }
}
</script>