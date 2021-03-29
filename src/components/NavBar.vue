<template>
<header class="header">
  <div class="zabla-wrapper">
    <img class="zabla" src="../assets/забла4дезигннн.png" />
  </div>
  <div>
    <button class="btn" @click="toggleOpen">
      <img  class="normal" src="../assets/q1.png">
      <img class="hover" src="../assets/q2.png">
      <img class="focus" src="../assets/q3.png">
      <span>about me</span>
    </button>
<!--    <div  class="over">-->
<!--      <img class="bg-cloud" src="../assets/b.png"/>-->
<!--      <img class="photo" src="../assets/f.png"/>-->
<!--    </div>-->
    <button class="btn">
      <img  class="normal" src="../assets/q1.png">
      <img class="hover" src="../assets/q2.png">
      <img class="focus" src="../assets/q3.png">
      <span>follow me</span>
    </button>
  </div>
</header>
  <transition name="slide-fade">
    <div v-show="isOpen" class="popup">
      <img class="focus" src="../assets/dd.png">
    </div>
  </transition>
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
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.popup {
  left: 0;
  top: 60px;
  position: absolute;
  padding: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 19;
  background-color: rgba(255,255,255, .89);
}

  header.header {
    width: 100%;
    height: 60px;
    //background: greenyellow;
    position: relative;
    top: 0;
    padding: 0 40px;
    background-image: url('../assets/шапкака.png');
    background-size: cover;
    background-position: center center;
    background-color: black;
    display: flex;
    z-index: 2000;

    .zabla-wrapper {
      position: relative;
    }



    .zabla {
      width: 250px;
      height: auto;
      position: absolute;
      top: 10px;
      right: 264px;
      z-index: 20;
    }


    .over {
      width: 400px;
      position: absolute;
      z-index: 2000;
      left: -70px;
      top: 45px;

      img {
        width: 100%;
      }

      .photo {
        position: absolute;
        width: 200px;
        left: 100px;
        top: 65px;
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
      position: relative;
      font-family: 'Syne Mono', monospace;
      font-size: 20px;
      margin-top: 0px;

      &:hover {
        span {
          top: 16px
        }
      }

      span {
        position: absolute;
        width: 100px;
        top: 17px;
        left: 30px;
      }

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
