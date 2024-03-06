import { createStore } from "vuex"; 

//import andere files om te laten zien op de pagina.
import opdrachtenData from './service/opdrachten.js' //import de data die in deze map staan.


export default createStore ({

    modules: {
        opdrachtenData, // Data variable die je kunt aan roepen van de import file 
       
    },


});