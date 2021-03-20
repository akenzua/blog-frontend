import { ref } from 'vue';
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';

const logInUser = () => {
    const store = useStore();
    // const router = useRouter();

      const formData = ref({ email: '', password: ''})
      const handleSubmit = async () => {
          store.dispatch('logUserIn', {
            email: formData.value.email,
            password: formData.value.password
          });

        
      }

      return { formData, handleSubmit}
}

export default logInUser;