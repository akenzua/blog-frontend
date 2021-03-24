<template>
  <div>
      Comment Section
     
      <CommentForm :id="id" />
      <CommentDetails :comment="comment" />
        
  </div>
</template>

<script>
import CommentDetails from "./CommentDetails.vue";
import CommentForm from "./CommentForm"

export default {
    props: ['comment', 'id'],
    components: {
        CommentForm,
        CommentDetails
    }

}
</script>

<style>

</style>