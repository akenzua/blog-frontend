<template>
  <div  v-for="comment in comments" :key="comment.id" >
      <h5>{{comment.user.name}}</h5>
      <span>{{ comment.content }}</span>
      
      <ReplyCard />
      <hr/>
  </div>
</template>

<script>
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

}

</script>

<style>

</style>