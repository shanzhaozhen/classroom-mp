<template>
  <div class="">
    <div class="logo" @click="toLoginPage">
      <img src="/static/images/user.png">
    </div>
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

</style>
