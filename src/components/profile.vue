<template>
    
    <section v-if="loadingStatus === 'notloading'" class=" mt-10 bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
        <div class="flex justify-center">
            <div class="grid md:flex md:py-6 py-4">
         
                <div class="bg-orange-300 w-[18rem] h-[18rem] md:w-[20rem] md:h-[18rem] md:mr-3 flex justify-center items-center">
                    <img src="" alt="Profiel_foto">
                </div>
                <div class="text-black mt-8 md:mt-[3rem] ">
                    <h1 class="font-serif text-lg md:text-xl text-orange-400 mb-5"> <i class="fa-solid fa-user-tie fa-lg" style="color: #fafafa;"></i> Profiel van 
                        <span>
                            <select v-model="userID" class="mt-4 bg-white py-1 px-2 rounded-md active:bg-light-dark active:text-white shadow-md shadow-green-lime ">
                                <option v-for="(user) in userProfiel" :key="user.id" :value='user.id'> {{ user.naam }}</option>
                            </select>
                        </span>
                        <button @click="selectUser()" class="ml-2 mt-4 bg-white px-2 rounded-md active:bg-light-dark active:text-white shadow-md shadow-green-lime">Bekijk</button>
                    </h1>
                    <div v-if="zoekProfiel">
                        <div>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-signature fa-sm" style="color: #ffffff;"></i> Naam:      <span class="text-orange-300">{{ zoekProfiel.naam }} {{ zoekProfiel.tussenvoegsel }} {{ zoekProfiel.achternaam }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-cake-candles" style="color: #d1d7e0;"></i> Geboortedatum: <span class="text-orange-300">{{ zoekProfiel.gboortedatum }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Woonplaats:    <span class="text-orange-300">{{ zoekProfiel.woonplaats }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-location-dot fa-sm" style="color: #fafafa;"></i> Adres:  <span class="text-orange-300">{{ zoekProfiel.adres }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-briefcase fa-sm" style="color: #ffffff;"></i> Functie:   <span class="text-orange-300">{{ zoekProfiel.functie }}</span></p>
                            <button @click="editToggle()" class="mt-4 bg-white py-2 px-3 rounded-md active:bg-light-dark active:text-white shadow-md shadow-green-lime">Edit</button>
                        </div>      
                    </div>
                    

                </div>
            </div>
        </div>
    </section>

    
    <section v-if="loadingStatus === 'notloading'" class="mb-20  bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
        <div class="flex justify-center">
            <div v-if="edittoggle && zoekProfiel" class="py-6  text-black grid md:ml-10">
                {{ zoekProfiel.id }}
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-signature fa-sm" style="color: #ffffff;"></i> Naam:   {{ zoekProfiel.naam }}  </p><input    class="p-1 rounded-md active:border-white" type="text" v-model="inputNaam" placeholder="Naam">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Tussenvoegsel:  {{ zoekProfiel.tussenvoegsel }}   </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputTussenvoegsel" placeholder="Tussenvoegsel">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Achternaam:   {{ zoekProfiel.achternaam }}  </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputAchternaam" placeholder="Achternaam">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-cake-candles" style="color: #d1d7e0;"></i> Geboortedatum:  {{ zoekProfiel.gboortedatum }} </p><input class="p-1 rounded-md active:border-white" type="date" v-model="inputGbDatum" placeholder="">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Woonplaats: {{ zoekProfiel.woonplaats }}    </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputWoonplaats" placeholder="Woonplaats">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-location-dot fa-sm" style="color: #fafafa;"></i> Adres:  {{ zoekProfiel.adres }} </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputAdres" placeholder="Adres">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-briefcase fa-sm" style="color: #ffffff;"></i> Functie:  {{ zoekProfiel.functie }} </p><input   class="p-1 rounded-md active:border-white" type="text" v-model="inputFunctie" placeholder="Functie">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-image fa-sm" style="color: #e9eaec;"></i> Upload profiel foto:  </p><input   type="file">
                    <input @click="editProfile(zoekProfiel.id)" class="mt-4 bg-white py-2 px-3 rounded-md active:bg-light-dark active:text-white shadow-md shadow-green-lime" type="submit" value="Bewerk">
            </div>
        </div>
    </section>
    
</template>


<script>
export default{
    name: 'profileVue',
    
    data(){
        return{
            edittoggle: false,
            profiel: [],
            inputNaam: '',
            inputTussenvoegsel: '',
            inputAchternaam: '',
            inputGbDatum: '',
            inputAdres: '',
            inputFunctie: '',
            inputWoonplaats: '',

        }
    },

    methods: { 
        editToggle(){ //toggle voor edit stuk
            this.edittoggle = !this.edittoggle;
        },

        selectUser(){ // geeft de profiel door dat opgezocht moet worden 
            this.$store.dispatch('ProfielAPI/GetUser', this.userID)
           
        },

        editProfile(profielId){
            console.log('EditProfiel functie word aangeroepen', profielId, this.inputNaam)
            
            this.$store.dispatch('ProfielAPI/editProfiel',  { 
                id: profielId, 
                naam: this.inputNaam,
                tussenVoegsel : this.inputTussenvoegsel,
                achternaam: this.inputAchternaam,
                gbDatum: this.inputGbDatum,
                adres: this.inputAdres,
                functie: this.inputFunctie,
                woonplaats: this.inputWoonplaats,

            })
        },
    },


    beforeCreate(){ // functie die aanroept voordat de pagina laad, deze doet een verzoek voor alle profiel leden
        this.$store.dispatch('ProfielAPI/ophalenProfiel')
    },

    computed:{
        selectUserData(){
            
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.profiel[this.selectedUser]
                
            }
        },

        zoekProfiel() { // haalt de user op die word opgezocht vanuit dropdown menu
            console.log(this.$store.state.ProfielAPI.getProfiel)
            return this.$store.state.ProfielAPI.getProfiel;
        },

        userProfiel(){ // haalt alle users op die er zijn
            console.log(this.$store.state.ProfielAPI.profiel)
            return this.$store.state.ProfielAPI.profiel;
        },

        loadingStatus() { // kijkt naar loading status 
            return this.$store.state.ProfielAPI.loadingStatus;
        },

        error() { // kijkt of er een error is. 
            return this.$store.state.ProfielAPI.error;
        }

    },


}

</script>