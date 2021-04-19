<template>
    <div>
    <div v-if="loading">Loading ....</div>
    <BlogDetails :slug='slug' />
    </div>
 
</template>

<script>
import BlogDetails from '../components/Blog/BlogDetails.vue'
export default {
    name: 'Blog',
    components: {
        BlogDetails
    },
    props: ['slug'],
    computed: {
    loading() {
      return this.$store.state.loading;
    },
 

  }
}
</script>

<style>

</style>