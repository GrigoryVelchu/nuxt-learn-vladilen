<template>
  <section>
    <div v-if = '$route.query.message' class = 'alert alert-danger mb3'>Need first Login</div>
    <form @submit.prevent='onSubmit'>
      <h1>Login Page</h1>
      <div class="form-group">
        <input type='text' class='form-control'/>
      </div>
      <p>
        <nuxt-link to='/'>To home page</nuxt-link>
      </p>
      <button class='btn btn-primary' type='submit'>Login</button>
    </form>

  </section>
</template>

<script>

  export default {
    layout: 'empty',
    name: "login",
    methods: {
      onSubmit() {
        this.$store.dispatch('login')
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  form {
    width: 500px;
    margin: 0 auto;
  }
</style>
