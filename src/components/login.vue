<template>
    <section class="flex justify-center w-screen">
        <div class="md:w-[40rem] md:h-[30rem] w-[30rem] h-[30rem] mt-[5rem] md:mt-[10rem] grid justify-center rounded-xl shadow-lg shadow-black mb-5 bg-gradient-to-r from-green-lime via-light-dark to-dark-house focus:shadow-gray-700 linear duration-200">
            <div class=" grid justify-center items-center">
                <div class="">
                    <img src="../assets//RealestateText.png" alt="logo" class="w-30 rounded-lg">
                </div>
                <div class="text-center">
                    <h1 class="text-xl font-bold font-serif"> <i class="fa-solid fa-right-to-bracket fa-sm"></i> Login</h1> 
                </div>
            </div>
            <form class="p-2 md:w-[30rem] w-[25rem] grid mb-6">
                <label class=" items-end grid pl-1 font-serif font-semibold">Email:</label>
                <input class="border-2 rounded-xl pl-2" type="text" v-model="email" placeholder="E-mail" required>
                <label class="items-end grid pl-1 font-serif font-semibold">Wachtwoord</label>
                <input class="border-2 rounded-xl pl-2" type="password" v-model="password" placeholder="Wachtwoord" required>
                <input class="border-2 rounded-xl pl-2  my-2" type="submit" value="Login">
            </form>
        </div>  
    </section>
    
</template>

<script>
export default {
    name: 'loginVue',
}
</script>