<template>
  <div class="hello">
    <div class="grid-stack">
      <Card v-for="index in [1,1,1,1,1]" :key="index" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { GridStack } from 'gridstack';
import {onMounted} from "vue";
export default {
  name: 'MainPage',
  components: {
    Card
  },
  setup() {
    onMounted( ()=> {
      let grid = GridStack.init();
      console.log(grid);
    })
    return { }
  }
}
</script>

<style lang="scss">

.hello {
  position: relative;
}

body {
  padding: 0;
  margin: 0;
  background: url('../assets/КрожЁкНаФоне.png');
  background-size: 25px 25px;
  background-position: -16px 20px;
  background-repeat: repeat;
  background-color: #706fac;


  * {
    box-sizing: border-box;
  }

  .grid-stack {
    background: transparent !important;
  }

  .content {
    width: 100%;
    max-width: 1100px;
    background: rgba(0,0,0,.8);
    margin: 0 auto;
    padding: 90px 30px 30px 30px;
    min-height: 100vh;
  }
}

.grid-stack-item-content {
  position: relative;
  transition: .5s all;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/1.jpg');

  &:hover {
    top: -2px !important;
    left: -2px !important;
    box-shadow: 10px 10px 0px -1px #75ba9b;;
    //animation-name: rotation;
    //animation-duration: 2s;
    //animation-iteration-count: infinite;
    //animation-timing-function: linear;
    //transform: scale(1.5);
  }


  @keyframes rotation {
    0% {
      transform:rotate(0deg);
    }
    100% {
      transform:rotate(360deg);
    }
  }
}

</style>
