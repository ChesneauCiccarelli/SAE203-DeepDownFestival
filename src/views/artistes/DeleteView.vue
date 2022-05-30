<template>
    <div class="container md:pt-[200px]">
        <form enctype="multipart/form-data"  @submit.prevent="deleteArtistes">
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Suppression d'un artiste</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center">
                                <img class="preview img-fluid" :src="photoActuelle"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="artistes.nom"
                                    disabled />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input type="date" class="form-control" 
                                    v-model="artistes.naissance" 
                                    format="dd/mm/yyyy"
                                    disabled
                                    />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Pays</span>
                                </div>
                                <input class="form-control" 
                                    v-model="artistes.nationalite" 
                                    disabled
                                    />                    
                            </div>
                            <br/>
                        </div>
                    </div>         
                    <br/>      
                    <h5 class="alert alert-warning text-center" role="alert">
                        Attention vous allez supprimer l'artiste, cette action est irréversible !!
                    </h5>
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-dark" >
                        Supprimer
                    </button>
                    <button class="float-right btn btn-dark">
                        <RouterLink to="/artistes">Cancel</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'DeleteView',
    data() {
        return {
            artistes:{           // Le participant à créer
                nom:null,               // son nom 
                photo:null,             // sa photo (nom du fichier)
                naissance:null,         // sa date de naissance
                nationalite:null        // sa nationalité
            },

            refArtistes:null,     // Référence du participant à modifier
            photoActuelle:null       // Photo actuelle du participant
        }
    },
    mounted(){ // Montage de la vue
        // Récupération du id passé en paramètre
        // On utilise le id passé par la route
        // via la variable système $route de la vue
console.log("id artistes", this.$route.params.id);
        // Recherche participant concerné
        this.getArtistes(this.$route.params.id);
    },

    methods :{

        async getArtistes(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "artistes", id);
            // Référence du participant concerné
            this.refArtistes = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refArtistes.exists()){
                // Si oui on récupère ses données
                this.artistes = this.refArtistes.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.artistes.photo;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Artiste inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'artistes/'+this.artistes.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteArtistes(){
            const firestore = getFirestore();
            // Suppresion du participant
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));

            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'artistes/'+this.artistes.photo);
            // Suppression du fichier
            deleteObject(docRef);

            // redirection sur la liste des participants
            this.$router.push('/artistes');       
        }
    }

}
</script>

<style scoped>

</style>


