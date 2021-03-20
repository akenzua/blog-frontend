import { ref } from 'vue';
import { useStore } from 'vuex';

const logInUser = () => {
    
    const store = useStore();

      const formData = ref({ email: '', password: ''})
      const handleSubmit = async () => {
          await store.dispatch('logUserIn', {
            email: formData.value.email,
            password: formData.value.password
          });
      }

      return { formData, handleSubmit}
}

export default logInUser;