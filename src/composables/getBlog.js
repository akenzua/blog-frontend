import { useStore } from 'vuex';

const getBlog = (props) => {

    const store = useStore();
    
    const handleSubmit = async () => {
      // if(store.state.blog.length === 0){
         await store.dispatch('getBlog', {
          blog: props.slug
        });
      // }
       
    }
    

    return{ handleSubmit }

}

export default getBlog;