<template>
  <form @submit.prevent="onSubmit"  class="flex flex-row justify-between">      
    <input class="text-vs w-full mr-3 mb-3 pb-0 placeholder-red-600 placeholder-opacity-25" type="text" v-model="formData.content" placeholder="Add reply here ....">
    <button class="text-xs bg-white font-body border-2 border-yellow-300 border-opacity-75 rounded-md p-1 font-extralight my-3" type="submit">Send</button>
  </form>
   <div >
    <p class="text-vs font-light ">To add reply to a comment please <router-link  class="text-blue-700" :to="{name: 'Login'}">Login</router-link></p>
  </div>
  <p>Auth :{{isAuth()}}</p>
</template>

<script>
import addReply from '../../composables/addReply'
import { useStore } from 'vuex';

export default {
props:['comment', 'blog'],
  setup(props){

        const store = useStore();

        const {handleSubmit, formData} = addReply(props)

        // let auth = ref(false)

        const isAuth = () => {
          return store.state.isLoggedIn
        }

        // onMounted(() => {
        //   auth.value = store.state.isLoggedIn
        // });

        const onSubmit = () => {
        handleSubmit();
      }
    
        return{
            onSubmit, formData, isAuth
        }
    }
}
  
</script>

<style>

</style>