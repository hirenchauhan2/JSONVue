<template>
  <div id="app">
    <tree-view :data="json" max-depth="3"></tree-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  props: ['json']
}
</script>
