

const {createApp} = Vue;


createApp({

   data(){
      return{

         resultArray: [],
         apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
         randomEmail: '',

      };
   },



   
   methods:{

      forLoop(){
         for(let i = 1; i<10; i++){
            this.getApi()
         }
      },


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