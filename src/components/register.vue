<template>
    <div class="md:flex md:justify-center gap-[3rem] lg:gap-[5rem]">
       
        <section class="flex justify-center">
            <div class=" w-[23rem] lg:w-[30rem] md:h-[43rem] h-[45rem] mt-[5rem] md:mt-[10rem] grid justify-center rounded-xl shadow-lg shadow-black mb-5 bg-gradient-to-r from-green-lime via-light-dark to-dark-house focus:shadow-gray-700 linear duration-200">
                <div class=" grid justify-center items-center mt-4">
                    <div class="">
                        <img src="../assets//RealestateText.png" alt="logo" class="w-30 rounded-lg">
                    </div>
                    <div class="text-center">
                        <h1 class="text-xl font-bold font-serif"> <i class="fa-solid fa-right-to-bracket fa-sm"></i> Register Login User</h1> 
                    </div>
                </div>
                <form v-on:submit="registerLogin" class="p-2 lg:w-[25rem] s:w-[18rem] grid mb-6">
                    <div v-if="error.length >= 1" class="flex justify-center items-center bg-red-500 rounded-lg p-1">{{ error }}</div>
                    <div v-if="aangemaaktUser != ''" class="flex justify-center items-center bg-green-500 rounded-lg p-1">{{ aangemaaktUser }}</div>
                    <div v-if="errorFirebase.length != ''" class="flex justify-center items-center bg-red-500 rounded-lg p-1">{{ errorFirebase }}</div>
                    <label class=" items-end grid pl-1 font-serif font-semibold">Email:</label>
                    <input class="border-2 rounded-xl pl-2" type="email" v-model="email" placeholder="E-mail" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Wachtwoord:</label>
                    <input class="border-2 rounded-xl pl-2" type="password" v-model="password" placeholder="Wachtwoord" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Herhaal wachtwoord:</label>
                    <input class="border-2 rounded-xl pl-2" type="password" v-model="herpassword" placeholder="Herhaal wachtwoord" required>
                    <input type="submit" value="User aanmaken" class="border-2 rounded-xl pl-2 p-1 my-2 mt-[2rem] md:mt-[4rem] font-semibold text-white">
                </form>
            </div>  
            
        </section>


        <section class="flex justify-center  ">
            <div class="w-[22rem] lg:w-[30rem] md:h-[43rem] h-[45rem] mt-[5rem] md:mt-[10rem] grid justify-center rounded-xl shadow-lg shadow-black mb-5 bg-gradient-to-r from-green-lime via-light-dark to-dark-house focus:shadow-gray-700 linear duration-200">
                <div class=" grid justify-center items-center mt-4">
                    <div class="">
                        <img src="../assets//RealestateText.png" alt="logo" class="w-30 rounded-lg">
                    </div>
                    <div class="text-center">
                        <h1 class="text-xl font-bold font-serif"> <i class="fa-solid fa-right-to-bracket fa-sm"></i> Register Profiel</h1> 
                    </div>
                </div>
                <form v-on:submit="registerProfiel" class="p-2 lg:w-[25rem] s:w-[18rem] grid mb-6">
                    <div v-if="aangemaaktProfiel != ''" class="flex justify-center items-center bg-green-500 p-1 rounded-lg">{{ aangemaaktProfiel }}</div>
                    <div v-if="ProfielError != ''" class="flex justify-center items-center bg-red-500 p-1 rounded-lg">{{ ProfielError }}</div>
                    <label class="items-end grid pl-1 font-serif font-semibold">Naam:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="text" v-model="naam" placeholder="Voornaam" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Tussenvoegsel:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="text" v-model="tussenvoegsel" placeholder="Tussenvoegsel" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Achternaam:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="text" v-model="achternaam" placeholder="Achternaam" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Woonplaats:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="text" v-model="woonplaats" placeholder="Woonplaats" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Adres:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="text" v-model="adres" placeholder="Adres" required>
                  
                    <label class="items-end grid pl-1 font-serif font-semibold">Geboorte datum:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="date" v-model="gbdatum" placeholder="Geboorte datum" required>
                    <label class="items-end grid pl-1 font-serif font-semibold">Functie:</label>
                    <input class="border-2 rounded-xl pl-2 p-1" type="text" v-model="functie" placeholder="Functie" required>
                    <input type="submit" value="Profiel aanmaken" class="border-2 rounded-xl pl-2 p-1 my-2 mt-[2rem] md:mt-[4rem] font-semibold text-white">
                </form>
            </div>  
        </section>
    </div>
    
</template>

<script>
import { firebaseConfig } from '@/store/FirebaseConfig.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore';

initializeApp(firebaseConfig)
const db = getFirestore();
const profielUser = collection(db, 'profielUsers')
const auth = getAuth();

export default {
    name: 'registerVue',

    data(){
        return{
            user: null,
            error:'',
            aangemaaktUser: '',
            errorFirebase: '',
            ProfielError:'',
            aangemaaktProfiel: '',
            // Voor registreer login user
            email: '',
            password: '',
            herpassword: '',
            

            // voor registreer Profiel user
            naam: '',
            tussenvoegsel: '',
            achternaam: '',
            woonplaats: '',
            adres: '',
            gbdatum: '',
            functie: '',
        }
    },  


    methods: {
        async registerLogin() {
            try {
                if(this.password === this.herpassword){
                    await createUserWithEmailAndPassword(auth, this.email, this.password)
                    const aangemaaktMsg = 'Login user aangemaakt';
                    this.aangemaaktUser = aangemaaktMsg
            } else {
                    const errormsg = 'Wachtwoord komen niet overeen.';
                    this.error = errormsg;
                }   
            } catch (error)  {
                const firebaseErr = error.message;
                this.errorFirebase = firebaseErr
                console.log(error.message)
            }
        },

        async registerProfiel(){
            try {
                await addDoc(profielUser,{
                    naam: this.naam,
                    tussenvoegsel: this.tussenvoegsel,
                    achternaam: this.achternaam,
                    gboortedatum: this.gbdatum,
                    woonplaats: this.woonplaats,
                    adres: this.adres,
                    functie: this.functie,
                })
                const aangemaakt = 'Profiel is succesvol aangemaakt.'
                this.aangemaaktProfiel = aangemaakt
                
            } catch(error){
                const errormsg = 'Oeps, er ging iets fout. Probeer het opnieuw'
                this.ProfielError = errormsg
                console.log(error)
            }
        },

        checkuser(){
            if(localStorage.getItem('user')){
                    const user = localStorage.getItem('user')
                    this.user = JSON.parse(user)
                } else {
                    this.user = null
                    console.log('geen user gevonden.')
            }
        } 
    },


   
    mounted(){
        this.checkuser()
        
    },


}
</script>