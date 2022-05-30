import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import PersonneView from '../views/PersonneView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'

import ListeArtistes from '../views/artistes/ListeView.vue.vue'
import CreateArtistes     from      '../views/artistes/CreateView.vue'
import UpdateArtistes    from      '../views/artistes/UpdateView.vue'
import DeleteArtistes    from      '../views/artistes/DeleteView.vue'

import Guidedestyle from "../views/GuidedestyleView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/ml', name: 'MentionLegales', component: MentionsLegalesView },
    { path: '/personne', name: 'Personne', component: PersonneView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },

    { path: '/artistes', name: 'ListeArtistes', component: ListeArtistes },
    { path: '/CreateArtistes', name: 'CreateArtistes', component: CreateArtistes },
    { path: '/UpdateArtistes', name: 'UpdateArtistes', component: UpdateArtistes },
    { path: '/DeleteArtistes', name: 'DeleteArtistes', component: DeleteArtistes },

    { path: '/style-guide', name: 'Guidedestyle', component: Guidedestyle },
  ]
})

export default router
