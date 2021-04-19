<template>
  <div> 
     <ReplyDetails :reply="reply" />
     <div @click="visible = !visible" class="text-xs my-6 font-extralight">Reply</div>
     <ReplyForm  v-if="visible" :comment="comment" :blog="blog"/>   
  </div>
</template>

<script>
import ReplyDetails from "./ReplyDetails.vue";
import ReplyForm from "./ReplyForm.vue"

export default {
    props:['comment', 'blog', 'reply'],
    data: () => {
        return{
             visible: false
        }
    },
    components: {
        ReplyForm,
        ReplyDetails
    },
    setup(){
        // console.log(props)
        return{

        }
    }

}
</script>

<style>

</style>