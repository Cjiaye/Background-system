<template>
  <div class="app-main">
    <!-- <p v-for="(item, index) in 100" :key="index">{{ index }}</p> -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 85px);
  padding: 131px 20px 20px 20px;
}
</style>
