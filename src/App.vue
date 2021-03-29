<template>
  <NavBar/>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  },

  setup() {

    return {}
  }
}
</script>

<style lang="scss">

</style>
