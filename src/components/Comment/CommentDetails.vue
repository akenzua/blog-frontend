<template>
  <div  class="font-body font-light text-msme my-7" v-for="comment in comments" :key="comment.id" >
      <span class="font-headings text-yellow-500">@{{comment.user.name}}</span>
      <span>{{ comment.content }}</span><span class="text-gray-400"> - {{ parseDate(comment.created_at)}}</span>

      <ReplyCard  :reply="comment.reply" :comment="comment.id" :blog="comment.blog_id"/>
      <hr/>
  </div>
</template>

<script>
import parseDate from '../../composables/parseDate';
import ReplyCard from "../Reply/ReplyCard";

export default {
    components:{
        ReplyCard
    },
data(){
    return {  
        comments: {}
    }
},
props:['comment'],

mounted() {
   
   this.comments = this.$store.getters.getComments;
    
},
methods:{
    parseDate: parseDate,
}

}

</script>

<style>

</style>