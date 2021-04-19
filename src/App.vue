<template>
  <div class="flex flex-col  px-4 md:px-10" 
  :class="[ blog ? 'bg-white' : 'bg-yellow-400' ]"
  >
    <div class="">
      <Navigation />
      <div class="nav-place md:hidden absolute right-0 bg-yellow-300 w-full overflow-y-auto" v-if="opened">
        <nav class="flex flex-col z-50 ">
          
          <ul>
            <li class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-200">
              <font-awesome-icon icon="home" class="mr-2"/>
              <router-link  to="/"  v-on:click="toggleMenu" class="font-headings font-black">Home</router-link> 
            </li>
            <li v-on:click="toggleMenu" class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-300">
              <font-awesome-icon icon="newspaper" class="mr-2"/>
              <router-link  to="/blogs"  class="font-headings font-black">Blogs</router-link>
            </li>
            <!-- <li class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-400">
               <font-awesome-icon icon="glass-cheers" class="mr-2" />
              <router-link @click="toggleMenu" to="/categories" class="font-headings font-black">Categories</router-link>
            </li>
           
            <li class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-500">
               <font-awesome-icon icon="address-card"  class="mr-2"/>
              <router-link @click="toggleMenu" to="/about" class="font-headings font-black">About</router-link>
            </li> -->
          </ul>
          <ul class="">
            <li class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-600">
              <font-awesome-icon icon="sign-in-alt"  class="mr-2"/>
              <router-link @click="toggleMenu" v-if="!token" to="/login" class="font-headings font-black">Log In</router-link>
            </li>
            <li  v-if="token"  class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-600">
              <font-awesome-icon icon="sign-out-alt"  class="mr-2"/>
              <router-link @click="toggleMenu" to="/" class="font-headings font-black">Log Out</router-link>
            </li>
            <li class="h-14 my-0 mx-0 px-4 py-3  bg-yellow-700">
              <font-awesome-icon icon="user-plus"  class="mr-2"/>
              <router-link @click="toggleMenu" to="/register" class="font-headings font-black">Register me</router-link>
            </li>
          </ul>
         
        </nav>
      </div>
     
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue';
// import { ref } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue'
import { useRoute } from 'vue-router';

export default {
  components:{
    Navigation
  },
  data(){
    return{
      
    }
  },
setup(){

  const store = useStore();
  const route = useRoute();
  const opened = computed(() => store.state.isOpen);

  console.log(route.name)

  const blog = computed(()=> {
    if(route.name == 'Blog'){
      return true
    }
    return false
  })

  const toggleMenu = () => {
      store.dispatch('openMobileMenu')
    }


  return{
    opened, toggleMenu, blog
  }
},
 mounted(){
   console.log(this.$router.currentRoute._value.name)
 }
 
}





</script>
<style scoped>
.nav-place{
  height: auto;
  top:4.5rem;
  overflow: scroll;
}
</style>
