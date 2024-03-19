

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


      



      getApi(){
        
            axios.get(this.apiUrl)

            .then((answer) => {
               this.randomEmail = answer.data.response;
               console.log(this.randomEmail)
               this.resultArray.push(this.randomEmail);
               this.randomEmail = '';
               console.log(this.resultArray)

            });
         
      },



   },




   mounted(){
      this.getApi()
   }

}).mount('#app');