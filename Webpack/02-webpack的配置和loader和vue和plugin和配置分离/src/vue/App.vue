<template>
  <div>
    <h2 class="red">{{message}}</h2>
  </div>

</template>

<script>
  import Cpn from './Cpn'
  export default {
    name: "App",
    components: {
      Cpn
    },
    data:function () {
      return {
        message: 'Hello World'
      }
    }
  }


</script>

<style scoped>
.red{
  color: red;
}
</style>
