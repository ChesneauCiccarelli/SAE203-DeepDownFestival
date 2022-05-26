import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import PersonneView from '../views/PersonneView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/ml', name: 'MentionLegales', component: MentionsLegalesView },
    { path: '/personne', name: 'Personne', component: PersonneView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
  ]
})

export default router
