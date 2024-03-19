

const {createApp} = Vue;


createApp({

   data(){
      return{

         result: '',
         apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      };
   },



   
   methods:{

      getApi(){
         axios.get(this.apiUrl)
         .then((answer) => {

         console.log(answer)
      });
      }

   },




   mounted(){
      this.getApi()
   }

}).mount('#app');