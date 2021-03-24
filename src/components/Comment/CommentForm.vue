<template>
  <form @submit.prevent="onSubmit">      
    <input type="text" v-model="formData.content" placeholder="Add comment here ....">
    
    <button type="submit">Comment</button>
    <button>Cancel</button>
  </form>
</template>

<script>
import addComment from "../../composables/addComment";
export default {
    props: ['id'],
    setup(props){

        const {handleSubmit, formData} = addComment(props)

        const onSubmit = () => {
        handleSubmit();
      }
    
        return{
            onSubmit, formData
        }
    }

}
</script>

<style>

</style>