<template>
  <form @submit.prevent="handleSubmit">
      <fieldset>
          <legend>Sign Up</legend>
          <div>
            <label>Username</label>
            <input type="text" v-model="formData.username" placeholder="username">
          </div>
          <div>
            <label>Email</label>
            <input type="email" v-model="formData.email" placeholder="Email">
          </div>
          <div>
            <label>Password</label>
            <input type="password" v-model="formData.password" placeholder="Password">
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" v-model="formData.confirmPassword" placeholder="Confirm Password">
          </div>

      </fieldset>
      <button>Sign Up</button>
  </form>
  
</template>

<script>
import { ref } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router';


export default {

    name: 'RegistrationForm',
    setup(){

      const router = useRouter()
     

      const formData = ref({ username: '', email: '', password: '', confirmPassword: ''})
      const handleSubmit = async () => {

      const response =  await axios.post('auth/register', {
          name: formData.value.username,
          email: formData.value.email,
          password: formData.value.password,
          password_confirmation: formData.value.confirmPassword
        }); 

        console.log(response);
        router.push('/login');
        
      }
      return{
        handleSubmit, formData
      }
    }

}
</script>

<style>

</style>