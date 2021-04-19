<template>
  <form @submit.prevent="onSubmit" v-if="authM"  class="flex flex-row justify-between">      
    <input type="text" class="text-vs w-full mr-3 mb-3 pb-0  placeholder-red-600 placeholder-opacity-25" v-model="formData.content" placeholder="Add comment here ....">
    <button type="submit" class="text-xs bg-white font-body border-2 border-yellow-300 border-opacity-75 rounded-md p-1 font-extralight my-3" >Send</button>
  </form>
  <div v-if="!auth">
    <p class="text-vs font-light ">To add comment please <router-link  class="text-blue-700" :to="{name: 'Login'}">Login</router-link></p>
  </div>
  {{authM}}{{auth}}
</template>

<script>
import addComment from "../../composables/addComment";
import { useStore } from 'vuex';

export default {
    props: ['id'],
    data(){
      return{
        authM: false
      }
    },
    setup(props){

        const store = useStore();

        const {handleSubmit, formData} = addComment(props)

        const auth = store.state.isLoggedIn

        const onSubmit = () => {
        handleSubmit();
      }
    
        return{
            onSubmit, formData, auth,
        }
    },
     mounted(){
       return this.authM = this.$store.getters.getLogIn
 }

}
</script>

<style>

</style>