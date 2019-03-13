<template>
  <div class="container">
    <div class="logo" @click="toLoginPage">
      <img src="/static/images/user.png">
    </div>
    <div>
      <div>
        <div>
          <img src="/static/images/user.png">
        </div>
        <div>
          <input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
