<template>
  <div class="md:pt-[90px]">

  <div class="artisttop">
    <heading :titre="'ARTISTES'" :text="'Vos artistes favoris montent sur la grande scène pour vous.'"/>
  </div>

  <section class="mt-[5%]">
      <h1 class="neon font-210-box italic text-5xl text-center mb-5 leading-tight">Les artistes presents au Deep Down Festival</h1>
  </section>

  <section class="mt-[5%]">
    <div class="md:flex">
        <div class="flex-auto flex items-center">
            <SearchIcon class="w-6 h-6"/>
            <input class="bg-sombre font-cairo font-semibold text-xl text-accent flex-auto" type="text" v-model="query" placeholder="Rechercher"/>  
        </div>
        <underline/>
        <div>
            <router-link to="/CreateArtistes" class="flex gap-3 bg-accent text-white py-2 px-3 rounded-full justify-center mt-[5%] md:mt-0">
                <p class="font-210 font-semibold text-base">AJOUTER</p>
                <PlusIcon class="w-6 h-6"/>
            </router-link>
        </div>
    </div>
  </section>

    <section>
        <div class="mt-[5%] grid grid-cols-[repeat(auto-fit,300px)] gap-5 justify-center align-middle">
            <div v-for="art in searchByName" :key="art.id" class="boerder-2 border-accent">
                <router-link to="/alan-walker">
                    <div>
                        <img :src="art.photo" :alt="art.prenom+' '+art.nom">   
                        <p class="w-[300px] shadow font-210-box font-black italic text-center text-3xl my-3 text-white">{{art.nom}}</p>
                    </div>
                </router-link>
                <div>
                    <div class="flex justify-evenly">
                        <div class="text-center">
                            <p class="font-cairo font-black text-xl text-white underline">Pays</p>
                            <p class="font-cairo font-semibold text-xl text-white">{{art.nationalite}}</p>
                        </div>
                        <div class="text-center">
                            <p class="font-cairo font-black text-xl text-white underline">Date de naissance</p>
                            <p class="font-cairo font-semibold text-xl text-white">{{dateFr(art.naissance)}}</p>
                        </div>
                    </div>
                    <div class="flex justify-evenly my-2">
                        <div>
                            <RouterLink :to="{ name:'DeleteArtistes', params: { id: art.id }}">
                                <XIcon class="hover:text-accent w-10 h-10"/>
                            </RouterLink>
                        </div>
                        <div>
                            <RouterLink :to="{ name:'UpdateArtistes', params: { id: art.id }}">
                                <PencilAltIcon class="hover:text-accent w-10 h-10"/>
                            </RouterLink>
                        </div>
                    </div>
                </div>
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
import { getFirestore, collection, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {

  name:'ArtistesView',

  components: { heading, DDbas, SearchIcon, PlusIcon, XIcon, PencilAltIcon, underline },

  data() {

        return {
            listeArtistes:[],
            viewFilter_1:false,
            query:''
        }

    },

  mounted(){
      this.getArtistes();
  },

  computed:{

        searchByName() {
            let query = this.query;
            return this.listeArtistes.filter(function(art){
                return art.nom.includes(query);
            })                
        },

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
              this.listeArtistes.forEach(function(art){
                  const storage = getStorage();
                  const spaceRef = ref(storage, 'artistes/'+art.photo);
                  getDownloadURL(spaceRef)
                  .then((url) => {
                      art.photo = url;
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
  background-image: url("../../fonds/artistes.png");
  background-position: center;
}
</style>