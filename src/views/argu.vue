<template>
  <div>
    <!-- 动态路由，参数{{$route.params.name}} -->
    {{name}}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "randy"
    }
  }
};
</script>
<style>
</style>