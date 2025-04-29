<template>
    <div class="activities-section">
      <h1>Typical Activities</h1>
      <div class="activities-grid">
        <ActivityCard
          v-for="activity in activities"
          :key="activity.id"
          :name="activity.name"
          :description="activity.description"
          :image="activity.image"
          :date="activity.date"
          :role="activity.role"
          :details="activity.details"
        />
      </div>
    </div>
  </template>
  
  <style scoped>
  .activities-section {
    margin: 1rem;
  }
  
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem;
  }
  
  @media (max-width: 768px) {
    .activities-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>

<script>
import ActivityCard from '../components/ActivityCard.vue' 
import LCHImage from '../assets/activities/lch.jpg'
import MRaceImage from '../assets/activities/mrace.jpg'
import WorkshopImage from '../assets/activities/workshop.jpg'
import MHX from '../assets/activities/mhx.jpg'
export default {
  components: {
    ActivityCard
  },
  data() {
    return {
      activities: [
        {
          id: 1,
          name: 'Faculty Student Association',
          description: 'Led a team of 20+ members, directing the planning and execution of over 10 events by defining objectives based on student and faculty needs.',
          image: LCHImage,
          date: '2023 - 2024',
          role: 'Team Lead',
          details: ['Participated in design team to create poster, backdrop and other social-media products.'
                    ,'Organized tech workshops, seminars, volunteer activities',
                    'Managed the full event lifecycle', ]
        },
        {
          id: 2,
          name: 'MRACE',
          description: 'Create activities, games for adventure reality competition MRace inspired by Amazing Race',
          image: MRaceImage,
          date: '2021 - 2023',
          role: 'Member',
          details: [
            'Designed posters for the event',
            'Participated in process of creating challenges for players',
          ]
        },
        {
          id: 3,
          name: 'Workshop',
          description: "Collaborate with HRS's talent acquisition specialist to guide participants how to write CV properly",
          image: WorkshopImage,
          date: 'May 2024',
          role: 'Organizer',
          details: [
            'Designed posters for the event',
            'Contact and finalize plans with speakers, ensuring successful delivery',
          ]
        },
        {
          id: 4,
          name: "Summer's Volunteer Campainge",
          description: "Collaborate with local officials to organize simple and interesting science lessons",
          image: MHX,
          date: '2021 - 2023',
          role: 'Member/Team Lead',
          details: [

          ]
        }
      ]
    }
  }
}
</script>