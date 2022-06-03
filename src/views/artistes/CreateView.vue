<template>
<div class="md:pt-[90px] pt-28">
  <div class="md:flex md:max-h-[830px]">
    <div class="m-auto">
      <img class="m-auto max-h-[500px] md:flex-auto" src="../../../public/logosx3.jpg" alt="Illustration Deep Down">
      <div class="my-[10%]">
        <div class="mt-[5%] mb-2 flex justify-center">
          <h1 class="font-210 text-5xl text-center">AJOUTER UN ARTISTE</h1>
        </div>
        <underline/>
      </div>
      <img class="m-auto max-h-[500px] md:flex-auto" src="../../../public/logosx3.jpg" alt="Illustration Deep Down">
    </div>
    <div class="md:m-auto">
      <img class="md:max-h-[1000px]" src="../../../public/Logosdecor.jpg" alt="Logos du Deep Down Festival">
    </div>
  </div>

  <section class="mt-[5%]">
    <h1 class="font-210-box italic text-5xl text-center mb-5">Ajouter un artiste au festival</h1>
    <div class="xl:flex">
      <div class="xl:w-[50%] border-2 border-accent rounded-3xl p-2 mx-auto mb-[5%] xl:mb-0 ">
        <img :src="imageData" class="rounded-3xl mx-auto"/>
      </div>
      <div class="xl:my-auto">
        <form @submit.prevent="createArtistes">
          <div>
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Nom</span>
                    </div>
                      <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg font-cairo font-semibold text-base" placeholder="Complétez avec un nom" v-model="artistes.nom" required />                    
                  </div>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Image</span>
                    </div>
                      <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg w-full font-cairo font-semibold text-base" type="file" placeholder="Ajouter un fichier" ref="file" id="file" @change="previewImage">               
                  </div>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Date de naissance</span>
                    </div>
                    <input type="date" class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg font-cairo font-semibold text-base" v-model="artistes.naissance" format="dd/mm/yyyy" required />                    
                </div>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Pays</span>
                    </div>
                    <select class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg font-cairo font-semibold text-base" v-model="artistes.nationalite">
                      <option selected disabled>Sélectionner un Pays</option>
                      <option v-for="pays in listePays" :key="pays.nom">{{pays.nom}}</option>
                    </select>                    
                </div>
              </div>
            </div>
            <div class="flex justify-evenly mt-[5%]">
              <button class="bg-sombre text-white border-2 border-accent font-210 px-3 py-2 rounded-3xl w-fit">
                <router-link to="/artistes">Retour</router-link>
              </button>
              <div class="flex justify-center items-center">
                <button type="submit" class="bg-accent text-white border-2 border-white font-210 px-3 py-2 rounded-3xl" onclick="loader.classList.remove('hidden')">Creer</button>
                <div id="loader" class="hidden">
                  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  </section>

  <section class="mt-[10%] md:mt-[5%]">
    <h1 class="font-210-box italic text-5xl text-center mb-5">Modifier la liste deroulante des pays</h1>
    <div>
        <div class="flex items-center gap-2 mb-3">
            <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                <span class="font-cairo font-black text-lg" >Nouveau Pays</span>
            </div>
              <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg font-cairo font-semibold text-base" placeholder="Complétez avec un nom" v-model='nom' required>  
              <button type="button" @click='createPays()' title="Création">
                <SaveIcon class="w-6 h-6"/>
              </button>                  
        </div>
        <div class="mt-[5%] overflow-x-auto">
          <table class="w-full m-auto">
            <thead>
                <tr>
                  <th scope="col" class="w-1/3 font-210 text-2xl">Id <underline/></th>
                  <th scope="col" class="w-1/3 font-210 text-2xl">Nom <underline/></th>
                  <th scope="col" class="w-1/3 font-210 text-2xl">Actions <underline/></th>
                </tr>
            </thead>
            <tbody>
              <tr v-for='pays in listePays' :key='pays.id'>
                <td class="bg-sombre text-white font-cairo font-semibold text-xl text-center">{{pays.id}}</td>
                <td>
                  <input class="bg-sombre text-white font-cairo font-semibold text-xl text-center w-fit md:w-full mx-auto" type='text' v-model='pays.nom' />
                </td>
                <td class="flex justify-evenly gap-5">
                  <button class="font-cairo font-semibold text-xl text-center flex gap-2" @click.prevent="updatePays(pays)">
                    <p class="hidden md:block m-auto italic font-thin">Modifier</p>
                    <PencilAltIcon class="w-10 h-10"/>
                  </button>
                  <button class="font-cairo font-semibold text-xl text-center flex gap-2" @click.prevent="deletePays(pays)">
                    <p class="hidden md:block m-auto italic text-accent font-thin">Supprimer</p>
                    <XIcon class="w-10 h-10 text-accent"/>
                  </button>
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
import underline from "../../../src/components/decors/UnderlineView.vue"
import DDbas from "../../../src/components/FooterView.vue"
import { SaveIcon, XIcon, PencilAltIcon } from "@heroicons/vue/outline"

import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { getStorage, ref, uploadString } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

 
export default {

    name:'CreateView',

    components:{ underline, DDbas, SaveIcon, XIcon, PencilAltIcon },

    data() {

        return {
            imageData:null,
            listePays:[],
            artistes:{
                nom:null,
                photo:null,
                naissance:null,
                nationalite:null
            },
        }

    },

    mounted(){
        this.getPays();
    },

    methods : {

        async getPays(){
            const firestore = getFirestore();
            const dbPays = collection(firestore, "pays");          
            const q = query(dbPays, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listePays = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))  
            console.log("Liste des pays", this.listePays);      
            })      
        },

        async createPays(){
          const firestore = getFirestore();
          const dbPays = collection(firestore, "pays");
          const docRef = await addDoc(dbPays,{
            nom:this.nom
          })
          console.log("Document créé avec l'id : ", docRef.id);
        },

        async updatePays(pays){
          const firestore = getFirestore();
          const docRef = doc(firestore, "pays", pays.id);
          await updateDoc(docRef, {
            nom:pays.nom
          })       
        },

        async deletePays(pays){
          const firestore = getFirestore();
          const docRef = doc(firestore, "pays", pays.id);
          await deleteDoc(docRef);      
        },

        previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            this.artistes.photo = this.file.name;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async createArtistes(){
            const storage = getStorage();
            const refStorage = ref(storage, 'artistes/'+this.artistes.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'artistes'), this.artistes );
            });
            this.$router.push('/artistes');            
        }

    }
    
}
</script>

<style>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>


