<template>
<div class="md:pt-[90px]">
  <div class="md:flex md:max-h-[830px]">
    <div class="m-auto">
      <img class="m-auto max-h-[500px] md:flex-auto" src="../../../public/logosx3.jpg" alt="Illustration Deep Down">
      <div class="my-[10%]">
        <div class="mt-[5%] mb-2 flex justify-center">
          <h1 class="font-210 text-5xl text-center">SUPPRIMER UN ARTISTE</h1>
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
    <h1 class="font-210-box italic text-5xl text-center mb-5">Supprimer un artiste</h1>
    <div class="xl:flex">
      <div class="xl:w-[50%] border-2 border-accent rounded-3xl p-2 xl:mb-0 mx-auto mb-[5%]">
        <img :src="photoActuelle" class="rounded-3xl mx-auto"/>
      </div>
      <div class="xl:my-auto">
        <form @submit.prevent="deleteArtistes">
          <div>
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Nom</span>
                    </div>
                      <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" placeholder="Complétez avec un nom" v-model="artistes.nom" disabled />                    
                </div>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Date de naissance</span>
                    </div>
                    <input type="date" class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" v-model="artistes.naissance" format="dd/mm/yyyy" disabled />                    
                </div>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                        <span class="font-cairo font-black text-lg" >Pays</span>
                    </div>
                    <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" v-model="artistes.nationalite" disabled/>
                </div>
              </div>
              <h2 class="bg-sombre text-center font-cairo font-semibold text-2xl" role="alert"> <strong class="neon">Attention</strong> supprimer un artiste est irréversible.</h2>
            </div>
            <div class="flex justify-evenly mt-[5%]">
              <button class="bg-sombre text-white border-2 border-accent font-210 px-3 py-2 rounded-3xl">
                <router-link to="/artistes">Annuler</router-link>
              </button>
              <button type="submit" class="bg-accent text-white border-2 border-white font-210 px-3 py-2 rounded-3xl">Supprimer</button>
            </div>
          </form>
      </div>
    </div>
  </section>

  <DDbas class="mt-[100px]"/>

</div>
</template>

<script>
import underline from "../../../src/components/decors/UnderlineView.vue"
import DDbas from "../../../src/components/FooterView.vue"

import { getFirestore, collection, doc, getDoc, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL, uploadBytes, uploadString, deleteObject, listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
    name:'DeleteView',
    components:{ underline, DDbas },
    data() {
        return {
            artistes:{
                nom:null,
                photo:null,
                naissance:null,
                nationalite:null
            },

            refArtistes:null,
            photoActuelle:null
        }
    },
    mounted(){
    console.log("id artistes", this.$route.params.id);
        this.getArtistes(this.$route.params.id);
    },

    methods :{

        async getArtistes(id){
            const firestore = getFirestore();
            const docRef = doc(firestore, "artistes", id);
            this.refArtistes = await getDoc(docRef);
            if(this.refArtistes.exists()){
                this.artistes = this.refArtistes.data();
                this.photoActuelle = this.artistes.photo;
            }else{
                this.console.log("Artiste inexistant");
            }
            const storage = getStorage();
            const spaceRef = ref(storage, 'artistes/'+this.artistes.photo);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteArtistes(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'artistes/'+this.artistes.photo);
            deleteObject(docRef);
            this.$router.push('/artistes');       
        }
    }

}
</script>

<style>

</style>


