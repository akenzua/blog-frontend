<template>
  <div>
    <div v-if="loading" class="flex flex-wrap content-center h-screen grid gap-4 grid-cols-1 ">
      <div  class="font-body text-2xl text-center" >Loading ....</div>
    </div>
    
    <BlogList/>
  </div>
</template>

<script>
import BlogList from '../components/Blog/BlogList'

export default {
  name: 'Blogs',
  components: {
      BlogList
    },
  setup(){
      
      return{

      }
    },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
  }

</script>

<style>

</style>