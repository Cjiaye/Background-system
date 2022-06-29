<template>
  <template v-if="props.data && !props.data.children">
    <el-menu-item :index="props.data.path">
      {{ props.data.title }}
    </el-menu-item>
  </template>
  <template
    v-if="props.data && props.data.children && props.data.children.length > 0"
  >
    <el-sub-menu :index="props.data">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>{{ props.data.title }}</span>
      </template>
      <Item v-for="item in props.data.children" :key="item" :data="item"></Item>
    </el-sub-menu>
  </template>
  <!-- <template v-for="(item)in props.menu" :key="item">
    <template v-if="item && !item.children">
      <el-menu-item :index="item.path">
        <el-icon><icon-menu /></el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>
    <template v-if="item && item.children && item.children.length > 0">
      <el-sub-menu :index="item">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.title }}</span>
        </template>
      </el-sub-menu>
    </template>
  </template> -->
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss"></style>
