<template>
<div class="md:pt-[90px]">
    <div class="md:flex md:max-h-[830px]">
        <div class="m-auto">
            <img class="m-auto max-h-[500px] md:flex-auto" src="../../../public/logosx3.jpg" alt="Illustration Deep Down">
        <div class="my-[10%]">
            <div class="mt-[5%] mb-2 flex justify-center">
                <h1 class="font-210 text-5xl text-center">MODIFIER UN ARTISTE</h1>
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
        <h1 class="font-210-box italic text-5xl text-center mb-5">Modifier les donnees d'un artiste</h1>
        <div class="xl:flex">
        <div class="xl:w-[50%] border-2 border-accent rounded-3xl p-2 mx-auto mb-[5%] xl:mb-0 ">
            <img :src="imageData" class="rounded-3xl mx-auto"/>
        </div>
        <div class="xl:my-auto">
            <form @submit.prevent="updateArtistes">
            <div>
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                            <span class="font-cairo font-black text-lg" >Nom</span>
                        </div>
                        <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" placeholder="Complétez avec un nom" v-model="artistes.nom" required />                    
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                            <span class="font-cairo font-black text-lg" >Image</span>
                        </div>
                        <input class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" type="file" placeholder="Ajouter un fichier" ref="file" id="file" @change="previewImage">               
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                            <span class="font-cairo font-black text-lg" >Date de naissance</span>
                        </div>
                        <input type="date" class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" v-model="artistes.naissance" format="dd/mm/yyyy" required />                    
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="bg-white text-sombre p-2 rounded-xl w-[200px] xl:w-[250px] text-center">
                            <span class="font-cairo font-black text-lg" >Pays</span>
                        </div>
                        <select class="flex-auto bg-white text-sombre py-2 px-3 rounded-lg" v-model="artistes.nationalite">
                        <option selected disabled>Sélectionner un Pays</option>
                        <option v-for="pays in listePays" :key="pays.nom">{{pays.nom}}</option>
                        </select>                    
                    </div>
                </div>
                </div>
                <div class="flex justify-evenly mt-[5%]">
                <button class="bg-sombre text-white border-2 border-accent font-210 px-3 py-2 rounded-3xl">
                    <router-link to="/artistes">Annuler</router-link>
                </button>
                <button type="submit" class="bg-accent text-white border-2 border-white font-210 px-3 py-2 rounded-3xl">Mettre a jour</button>
                </div>
            </form>
        </div>
        </div>
    </section>
</div>
</template>

<script>
import underline from "../../../src/components/decors/UnderlineView.vue"
import DDbas from "../../../src/components/FooterView.vue"

import { getFirestore, collection, doc, getDoc, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { getStorage, ref, getDownloadURL, uploadBytes, uploadString, deleteObject, listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
    name:'UpdateView',
    components:{ underline, DDbas },

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

            refArtistes:null,
            imgModifiee:false,
            photoActuelle:null
        }
    },

    mounted(){
    console.log("id artistes", this.$route.params.id);
        this.getArtistes(this.$route.params.id);
        this.getPays();
    },

    methods :{
        async getPays(){
            const firestore = getFirestore();
            const dbPays = collection(firestore, "pays");
            const q = query(dbPays, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listePays = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))        
            })      
        },

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
                    this.imageData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        previewImage: function(event) {
            this.file = this.$refs.file.files[0];
            this.artistes.photo = this.file.name;
            this.imgModifiee = true;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async updateArtistes(){
            if(this.imgModifiee){
                const storage = getStorage();
                let docRef = ref(storage, 'artites/'+this.photoActuelle);
                deleteObject(docRef);
                docRef = ref(storage, 'artistes/'+this.artistes.photo);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.artistes.photo);                
                });                   
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artistes);
            this.$router.push('/artistes');       
        }
    }
}
</script>

<style>

</style>


