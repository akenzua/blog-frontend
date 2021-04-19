<template>
<div>
   
    <div  v-if="blogs" >
        <div v-for="blog in returnedBlogs" :key="blog.id">
            <BlogCard  :blog="blog" />
        </div>
    </div>
</div>

</template>

<script>

import getBlogs from '../../composables/getBlogs'
import BlogCard from './BlogCard.vue'

export default {
    name: 'BlogList',
    components: {
        BlogCard
    },
    setup(){
        const { blogs } = getBlogs();

        return{
            blogs
        }
    },
     computed: {
    returnedBlogs() {
      return this.$store.state.blogs;
    }
  }
}
</script>

<style>

</style>