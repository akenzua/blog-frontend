import { ref } from 'vue';
import { useStore } from 'vuex';


const addReply = (props) => {
    
    const store = useStore();
      const formData = ref({ content: ''})
      const handleSubmit = async () => {
          
    console.log(formData.value.content)
          await store.dispatch('submitReply', {
            content: formData.value.content,
            blog_id: props.blog,
            comment_id : props.comment
          });

          formData.value.content= "";
      }

      return { formData, handleSubmit}
}

export default addReply;