<template>
  <div class="classroom-container">

  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    methods: {
      toLoginPage () {
        const url = '../login/main'
        mpvue.navigateTo({ url })
      }
    }
  }
</script>

<style>

  page {
    background-color: #eeeeee;
  }


</style>
