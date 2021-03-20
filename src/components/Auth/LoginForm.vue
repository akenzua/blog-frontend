<template>
  <form @submit.prevent="onSubmit">
      <fieldset>
          <legend>Sign In</legend>
          <div>
            <label>Email</label>
            <input type="email"  v-model="formData.email" placeholder="Email">
          </div>
          <div>
            <label>Password</label>
            <input type="password" v-model="formData.password" placeholder="Password">
          </div>
          

      </fieldset>
      <button>Sign In</button>
  </form>
</template>

<script>
import logInUser from '../../composables/logInUser';
// import { useRouter } from 'vue-router';
// import { useStore } from 'vuex';

export default {
    name: '`LoginForm',
    setup(){

    //   const router = useRouter();
      
      const { handleSubmit, formData } = logInUser();
    
      const onSubmit = async () => {
        await handleSubmit();
      }
   
   
      return{
       formData, onSubmit
      }
    }

}
</script>

<style>

</style>