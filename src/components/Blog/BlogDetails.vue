<template>
    <div>
       
      
        <div v-if="blog">
             <h2> {{blog.title}}</h2>
        <div v-for="paragraph in blog.paragrapgh" :key="paragraph.id">
            <p>{{ paragraph.content }}</p>
        </div>
        <h5>Comments</h5>
        <CommentCard :comment='comment' :id="blog.id" />
        </div>
    </div>
  
</template>

<script>
import CommentCard from "../Comment/CommentCard.vue";
export default {
    name: 'BlogDetails',
    components: { CommentCard },
    data(){
        return{
            slug: this.$route.params.slug,
           
        }
    },

    mounted(){
      
        this.$store.dispatch('getBlog', this.slug)
    },
    computed: {
    blog() {
      return this.$store.state.blog[0];
    },
    comment(){
        return this.$store.state.blog[0].comment;
    }
  }

}
</script>

<style>

</style>