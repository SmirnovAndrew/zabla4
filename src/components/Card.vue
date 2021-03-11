<template>
    <div class="grid-stack-item" gs-h="3" gs-w="3">
      <div class="grid-stack-item-content"></div>
    </div>
  <div class="grid-stack-item" gs-h="1" gs-w="1">
    <div class="grid-stack-item-content"></div>
  </div>
  <div class="grid-stack-item" gs-h="1" gs-w="1">
    <div class="grid-stack-item-content"></div>
  </div>
</template>

<script>
export default {
  name: "Card",
}
</script>

<style lang="scss">
.grid-stack { background: #FAFAD2; }
.grid-stack-item-content { background-color: #18BC9C; }
</style>
