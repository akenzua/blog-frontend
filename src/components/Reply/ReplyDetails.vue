<template>
  <div v-if="reply" class="">
    <div  class=" border-b border-gray-100 font-body font-light text-vs my-3" v-for="rep in reply" :key="rep.id" >
        <span>{{ rep.content }}</span> - <span class="font-headings text-yellow-500">@{{rep.user.name}}</span>
        <span class="text-gray-400"> - {{parseDate(rep.created_at)}}</span>
    </div>
  </div>
</template>

<script>
import parseDate from '../../composables/parseDate'
export default {
props:['reply'],
methods:{
    parseDate: parseDate,
}

}

</script>

<style>

</style>