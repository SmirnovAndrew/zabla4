<template>
<header class="header">
  <div>

  </div>
  <div>
    <button class="btn" @click="toggleOpen">
      <img  class="normal" src="../assets/q1.png">
      <img class="hover" src="../assets/q2.png">
      <img class="focus" src="../assets/q3.png">
    </button>
    <div v-if="isOpen" class="over">
      <img src="../assets/b.png"/>
    </div>
    <button class="btn">
      <img  class="normal" src="../assets/q1.png">
      <img class="hover" src="../assets/q2.png">
      <img class="focus" src="../assets/q3.png">
    </button>
    <button class="btn">
      <img  class="normal" src="../assets/q1.png">
      <img class="hover" src="../assets/q2.png">
      <img class="focus" src="../assets/q3.png">
    </button>
  </div>
</header>
</template>

<script>
import { ref } from 'vue'
export default {
name: "NavBar",
setup() {
  const isOpen = ref(false);

  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggleOpen
  }
}
}

</script>

<style lang="scss">
  header.header {
    width: 100%;
    height: 60px;
    //background: greenyellow;
    position: sticky;
    top: 0;
    padding: 0 40px;
    background-image: url('../assets/шапкака.png');
    background-size: cover;
    background-position: center center;
    display: flex;
    z-index: 2000;


    .over {
      width: 400px;
      position: absolute;
      z-index: 2000;
      left: -70px;
      top: 45px;

      img {
        width: 100%;
      }
    }

    &>div {
      width: 50%;
      height: 60px;
      position: relative;
    }

    .btn {
      width: 150px;
      height: auto;
      margin: 5px;
      background: none;
      border: none;
      outline: none !important;
      cursor: pointer;

      &:focus {

        .focus{
          display: block !important;
        }

        .normal, .hover {
          display: none !important;
        }
      }

      &:hover {
        .hover{
          display: block;
        }

        .normal, .focus {
          display: none;
        }
      }

      img {
        width: 100%;
        height: 45px;

        &.hover, &.focus {
          display: none;
        }
      }
    }


  }

</style>
