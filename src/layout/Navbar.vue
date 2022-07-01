<template>
  <div class="navbar clearfix">
    <div class="navbar-left">left</div>
    <div class="navbar-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            shape="square"
            :size="50"
            src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <el-dropdown-item command="logout" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

console.log(useStore().getters)
const router = useRouter()
const store = useStore()
const avatarUrl = computed(() => {
  return useStore().getters.userInfo
})
console.log(avatarUrl)
const handleCommand = (command) => {
  // console.log(command);
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleToHome = () => {
  console.log('首页')
  router.push('/')
}
const handleLogout = async () => {
  console.log('退出登录')
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 20px;

  .navbar-left {
    float: left;
  }
  .navbar-right {
    float: right;
  }
  .el-avatar {
    background: none;
  }
}
</style>
