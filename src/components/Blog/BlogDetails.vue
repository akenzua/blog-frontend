<template>
<div class="md:grid md:grid-cols-10 md:gap-4">
     <div class="md:col-span-6">
        <div v-if="blog">
             <h2 class="text-2xl font-black font-headings my-10"> {{blog.title}}</h2>
            <div class="text-sm" v-for="paragraph in blog.paragrapgh" :key="paragraph.id">
                <p class="font-body font-light my-7">{{ paragraph.content }}</p>
            </div>
            <h5 class="font-body text-base font-light">Comments</h5>
            <CommentCard :comment='comment' :id="blog.id" />
        </div>
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