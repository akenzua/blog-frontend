<template>
    <div>
        <router-link :to="{name: 'Blog', params: {slug: blog.slug}}">
            <h4> {{blog.title}}</h4>
            <p>{{blog.excerpt}}</p>
        </router-link>
        
    </div>
</template>

<script>

export default {
    name: 'BlogList',
    props: ['blog']

}
</script>

<style>

</style>