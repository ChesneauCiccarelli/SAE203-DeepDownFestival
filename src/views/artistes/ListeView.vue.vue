<template>
  <div class="md:pt-[90px]">

  <div class="artisttop">
    <heading :titre="'ARTISTES'" :text="'Vos artistes favoris montent sur la grande scène pour vous.'"/>
  </div>

  <section class="mt-[5%]">
    <div class="flex">
        <SearchIcon class="w-6 h-6"/>
        <input class="bg-sombre font-cairo font-semibold text-xl text-accent flex-auto" type="text" v-model="query" placeholder="Rechercher"/>
        <PlusIcon class="w-6 h-6"/>
    </div>
    <underline/>
  </section>

  <section class="mt-[5%] text-center">
    <div class="card bg-dark">
        <div class="card-header">
            <h5>Liste des artistes du Deep Down Festival
                <span class="float-right" title="Ajouter un artiste">
                    <router-link to="/createArtistes">
                        <i class="fa fa-plus fa-lg text-light"></i>
                    </router-link>
                </span>
            </h5>
        </div>    
                        
        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col" class="text-center">Image</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Né le</th>
                        <th scope="col">Actions</th>                                
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="art in listeArtistes" :key="art.id">
                        <td class="text-center">                                        
                            <img class="media-object imageSmall" :src="art.photo" 
                            :alt="art.prenom+' '+art.nom">                                                                
                        </td>
                        <td><b>{{art.nom}}</b></td>
                        <td>{{art.nationalite}}</td>
                        <td>{{dateFr(art.naissance)}}</td>
                        <td>
                            <span title="Supprimer l'artiste" class="mr-2">
                                <RouterLink :to="{ name:'DeleteArtistes', params: { id: art.id }}">
                                    <i class="fa fa-times fa-lg text-light" ></i>
                                </RouterLink>
                            </span>
                            <span  title="Modifier l'artiste" class="mr-2">
                                <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                                <RouterLink :to="{ name:'UpdateArtistes', params: { id: art.id }}">
                                    <i class="fa fa-edit fa-lg text-light" ></i>
                                </RouterLink>
                            </span>             
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </section>

  <DDbas class="mt-[100px]"/>

  </div>
</template>

<script>
import heading from "../../components/HeadingsPageView.vue"
import DDbas from "../../components/FooterView.vue"
import { SearchIcon, PlusIcon, XIcon, PencilAltIcon } from "@heroicons/vue/outline"
import underline from "../../components/decors/UnderlineView.vue"
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL, uploadString } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
export default {
  name:'ArtistesView',
  components: { heading, DDbas, SearchIcon, PlusIcon, XIcon, PencilAltIcon, underline },
  data() {
    return {
            listeArtistes:[]
        }
    },
  mounted(){
      this.getArtistes();
  },
  methods: {
      async getArtistes(){
          const firestore = getFirestore();
          const dbPart = collection(firestore, "artistes");
          const q = query(dbPart, orderBy('nom', 'asc'));
          await onSnapshot(q, (snapshot) => {
              this.listeArtistes = snapshot.docs.map(doc => (
                  {id:doc.id, ...doc.data()}
              ))
              this.listeArtistes.forEach(function(personne){
                  const storage = getStorage();
                  const spaceRef = ref(storage, 'artistes/'+personne.photo);
                  getDownloadURL(spaceRef)
                  .then((url) => {
                      personne.photo = url;
                  })
                  .catch((error) =>{
                      console.log('erreur downloadUrl', error);
                  })
              })
          })      
      },
      dateFr(d){
          let date = d.split('-');
          return date[2]+'/'+date[1]+'/'+date[0];
      }

  }
  }

</script>

<style>
.artisttop{
  background-image: url("../../public/fonds/artistes.png");
  background-position: center;
}
.neon{
  text-shadow: 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0px 0px 5px #FF0000;
}
.shadow{
  text-shadow: 3px 3px 2px black, 2px 2px 5px red;
}
</style>