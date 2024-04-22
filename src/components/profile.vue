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
                            <select v-model="userID">
                                <option v-for="(user) in userProfiel" :key="user.id" :value='user.id'> {{ user.naam }}</option>
                            </select>
                        </span>
                        <button @click="selectUser()">Bekijk</button>
                    </h1>
                    <div v-if="getProfiel && getProfiel.length >= 1">
                        <div v-for="userProfiel in getProfiel" :key="userProfiel.id">
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-signature fa-sm" style="color: #ffffff;"></i> Naam:      <span class="text-orange-300">{{ userProfiel.naam }} {{ userProfiel.tussenvoegsel }} {{ userProfiel.achternaam }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-cake-candles" style="color: #d1d7e0;"></i> Geboortedatum: <span class="text-orange-300">{{ userProfiel.geboortedatum }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Woonplaats:    <span class="text-orange-300">{{ userProfiel.woonplaats }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-location-dot fa-sm" style="color: #fafafa;"></i> Adres:  <span class="text-orange-300">{{ userProfiel.adres }}</span></p>
                            <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-briefcase fa-sm" style="color: #ffffff;"></i> Functie:   <span class="text-orange-300">{{ userProfiel.functie }}</span></p>
                            <button @click="editToggle()" class="mt-4 bg-white py-2 px-3 rounded-md active:bg-light-dark active:text-white shadow-md shadow-green-lime">Edit</button>
                        </div>      
                    </div>
                    

                </div>
            </div>
        </div>
    </section>

    
    <section class="mb-20  bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
        <div class="flex justify-center">
            <div v-if="edittoggle" class="py-6  text-black grid md:ml-10">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-signature fa-sm" style="color: #ffffff;"></i> Naam:     </p><input    class="p-1 rounded-md active:border-white" type="text" v-model="inputGbnaam" placeholder="[Gebruikersnaam]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Tussenvoegsel:     </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputtussenvoegsel" placeholder="[Tussnevoegsel]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Achternaam:     </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputAchternaam" placeholder="[Achternaam]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-cake-candles" style="color: #d1d7e0;"></i> Geboortedatum:  </p><input class="p-1 rounded-md active:border-white" type="date" v-model="inputGbDatum" placeholder="[Geboorte Datum]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-house fa-sm" style="color: #f2f2f2;"></i> Woonplaats:     </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputWoonplaats" placeholder="[Woonplaats]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-location-dot fa-sm" style="color: #fafafa;"></i> Adres:   </p><input  class="p-1 rounded-md active:border-white" type="text" v-model="inputAdres" placeholder="[Adres]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-briefcase fa-sm" style="color: #ffffff;"></i> Functie:   </p><input   class="p-1 rounded-md active:border-white" type="text" v-model="inputFunctie" placeholder="[Functie]">
                    <p class="text-white md:text-lg font-serif"> <i class="fa-solid fa-image fa-sm" style="color: #e9eaec;"></i> Upload profiel foto:  </p><input   type="file">
                    <input class="mt-4 bg-white py-2 px-3 rounded-md active:bg-light-dark active:text-white shadow-md shadow-green-lime" type="submit" value="Bewerk">
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
        }
    },

    methods: { 
        editToggle(){
            this.edittoggle = !this.edittoggle;
        },

        selectUser(){
            this.$store.dispatch('ProfielAPI/GetUser', this.userID)
           
        },
    },

    beforeCreate(){
        this.$store.dispatch('ProfielAPI/ophalenProfiel')
    },

    computed:{
        selectUserData(){
            
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.profiel[this.selectedUser]
                
            }
        },

        getProfiel() {
            console.log(this.$store.state.ProfielAPI.getProfiel)
            return this.$store.state.ProfielAPI.getProfiel;
        },

        userProfiel(){ // haalt alle users op die er zijn
            console.log(this.$store.state.ProfielAPI.profiel)
            return this.$store.state.ProfielAPI.profiel;
        },

        loadingStatus() {
            return this.$store.state.ProfielAPI.loadingStatus;
        },

        error() {
            return this.$store.state.ProfielAPI.error;
        }

    },


}

</script>