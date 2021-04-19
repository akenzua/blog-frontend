<template>
    <div class="my-3 md:mx-40 md:my-20 shadow-xl">
        <router-link :to="{name: 'Blog', params: {slug: blog.slug}}" class="md:flex flex-row md:grid grid-cols-2">
            <div class="flex flex-col  bg-white  p-5 " >
                <span class="text-xs">{{parseTime}}</span>
                <h4 class="font-headings text-xl my-4 font-extrabold my-10"> {{blog.title}}</h4>
                <p class="text-gray-400">{{blog.user.name}}</p>
                <p class="font-body font-light">{{blog.excerpt}}</p>
            </div>
            <div class="flex flex-col bg-yellow-300 h-50  p-3">
                 <img v-bind:src="blog.image_path"/>
            </div>
        </router-link>
        
    </div>
</template>

<script>

import parseDate from '../../composables/parseDate'
export default {
    name: 'BlogList',
    props: ['blog'],
    setup(props){

    const parseTime = parseDate(props.blog.created_at)

  return {
   parseTime
  }
}
    

}
</script>

<style>

</style>


