<template>
<div class="home auth-form-div">
   <form @submit.prevent="onSubmit" class="auth-form">
         
            <input type="email" class="auth-input" v-model="formData.email" placeholder="email">
        
            <input type="password" class="auth-input" v-model="formData.password" placeholder="password">
       
      <button class="auth-button">Sign In</button>
  </form>
</div>
 
</template>

<script>
import logInUser from '../../composables/logInUser';


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