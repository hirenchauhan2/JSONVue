<template>
  <div id="app">
    <tree-view :data="json" max-depth="3"></tree-view>
  </div>
</template>

<style>
.tree-view-item-value-number {
   color: green;
 }
 .tree-view-item-value-string {
   color: blue;
 }
 .tree-view-item-value-boolean {
   color: violet;
 }
</style>
<script>

export default {
  name: 'app',
  props: ['json']
}
</script>
