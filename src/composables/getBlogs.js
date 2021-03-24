import { useStore } from 'vuex';

const getBlogs = () => {

    const store = useStore();

    let blogs = {};

    if(store.state.blogs.length > 0){
       blogs = store.state.blogs
    }else{
        blogs = store.dispatch('getBlogList');
    }

    

    return{ blogs }

}

export default getBlogs;