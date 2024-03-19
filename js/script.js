

const {createApp} = Vue;


createApp({

   data(){
      return{

         resultArray: [],
         apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
         randomEmail: ''

      };
   },



   
   methods:{
      // ciclo la funzione della chiamata per 10 volte
      forLoop(){
         for(let i = 0; i<10; i++){
            this.getApi();
         }
      },

      // chiamo la API e ricevo una risposta che utilizzo a mio piacere
      getApi(){
         axios.get(this.apiUrl)
   
         .then((answer) => {
            this.randomEmail = answer.data.response;
            this.resultArray.push(this.randomEmail);
            this.randomEmail = '';
         });
      },

   },



   mounted(){
      
   }

}).mount('#app');