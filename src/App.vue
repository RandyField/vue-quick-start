<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>-->
      <!-- 使用命名路由 -->
      <router-link v-bind:to="{name:'home'}">home</router-link>
      <router-link :to="{name:'about'}">about</router-link>
    </div>
    <router-view ></router-view>
    <router-view name="email"></router-view>
    <router-view name="tel"></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>
