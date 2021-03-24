<template>
  <div> 
     <ReplyDetails  />
     <span @click="visible = !visible">Reply</span>
     <ReplyForm  v-if="visible"/>   
  </div>
</template>

<script>
import ReplyDetails from "./ReplyDetails.vue";
import ReplyForm from "./ReplyForm.vue"

export default {
    data: () => {
        return{
             visible: false
        }
    },
    components: {
        ReplyForm,
        ReplyDetails
    }

}
</script>

<style>

</style>