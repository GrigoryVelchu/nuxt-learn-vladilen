<template>
  <section>
    <h1>{{pageTitle}}</h1>
    <ul>
      <li v-for='user of users' :key='user.id'>
        <a href='#' @click.prevent="openUser(user.id)">User: {{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  import axios from "axios";
  export default {
    // async asyncData({$axios}){
    //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users');
    //   return {users}
    // },
    async fetch({store}){
      if(store.getters['users/users'].length === 0){
        await store.dispatch('users/fetch')
      }
    },
    data() {
      return {
        pageTitle: 'Users Page'
      }
    },
    methods: {
      openUser(user) {
        this.$router.push('/users/' + user)
      },
    },
    computed:{
      users(){
        return this.$store.getters['users/users']
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
