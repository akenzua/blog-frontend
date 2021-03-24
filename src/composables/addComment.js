import { ref } from 'vue';
import { useStore } from 'vuex';


const addComment = (props) => {
    
    const store = useStore();
      const formData = ref({ content: ''})
      const handleSubmit = async () => {
          
    
          await store.dispatch('submitComment', {
            content: formData.value.content,
            blog_id: props.id
          });

          formData.value.content= "";
      }

      return { formData, handleSubmit}
}

export default addComment;