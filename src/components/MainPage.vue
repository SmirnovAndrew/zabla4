<template>
  <div class="hello">
    <img class="zabla" src="../assets/забла4дезигннн.png" />
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

  .zabla {
    width: 300px;
    height: auto;
    position: absolute;
    top: -130px;
    left: 5px;
    z-index: 9999999999;
  }


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
  }
}

.zabla {
  width: 300px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 300px;
}

.grid-stack-item-content {
  position: relative;
  transition: .5s all;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/1.jpg');
  border: 1px solid hotpink;

  &:hover {
    top: -2px !important;
    left: -2px !important;
    box-shadow: 7px 7px 0px -1px #706fac;;
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


//body div.content {
//  background: linear-gradient(crimson, gold);
//  background-position: 0 0;
//  animation: background 2s infinite alternate;
//}
//
//@keyframes background {
//  50% {
//    background: linear-gradient(red, green);
//    background-position: 0 1000px;
//  }
//}

</style>
