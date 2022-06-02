import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'

import ListeArtistes from '../views/artistes/ListeView.vue.vue'
import CreateArtistes     from      '../views/artistes/CreateView.vue'
import UpdateArtistes    from      '../views/artistes/UpdateView.vue'
import DeleteArtistes    from      '../views/artistes/DeleteView.vue'

import ListeAlan from '../views/alanwalker/ListeView.vue'

import NotFound from '../views/404View.vue'

import Guidedestyle from "../views/GuidedestyleView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView,},
    { path: '/jour-1', name: 'Concert', component: ConcertView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/mentions-legales', name: 'MentionLegales', component: MentionsLegalesView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },

    { path: '/artistes', name: 'ListeArtistes', component: ListeArtistes },
    { path: '/creer-un-artiste', name: 'CreateArtistes', component: CreateArtistes,},
    { path: '/modifier-un-artiste', name: 'UpdateArtistes', component: UpdateArtistes },
    { path: '/supprimer-un-artiste', name: 'DeleteArtistes', component: DeleteArtistes },

    { path: '/alan-walker', name: 'ListeAlan', component: ListeAlan },

    {path: '/404', name: 'NotFound', component: NotFound},
    {path: '/:catchAll(.*)', redirect:'404'},

    { path: '/style-guide', name: 'Guidedestyle', component: Guidedestyle },
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
  	next('/notFound');
  } else {
  	next();
  }
  window.scrollTo(0, 0)
});

export default router
