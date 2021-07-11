<template>
  <el-container>
    <el-header height="72px">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="logo">
            <el-image src="src/assets/images/logo.png" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content nav">
            <router-link class="nav-link" to="/ds">数据源</router-link>
            <router-link class="nav-link" to="/table">数据表</router-link>
            <router-link class="nav-link" to="/conf">配置</router-link>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content user-info">
            <div class="item">
              <i class="icon iconfont icon-github"></i>
              <i class="icon iconfont icon-fullscreen" @click="toggleFullscreen"></i>
            </div>
            <div class="item">
              <el-avatar src="src/assets/images/avatar.jpeg" size="large" shape="circle"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="content">
      <router-view></router-view>
      <el-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;" />
          <div
            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 30%;" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom card-header">
              <span class="time">{{ currentDate }}</span>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
    </el-main>
    <el-footer height="64px" class="footer">
      <el-row>
        <el-col :span="24">
          <div class="grid-content footer-text">
            veione &copy; 2021. All rights reserved.
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'
import { ref } from '@vue/reactivity'
export default {
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  unmounted() {
    
  },
  setup() {
    const toggleFullscreen = () => {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      } else {
        ElMessage.warning({
          message: '当前浏览器暂不支持全屏显示',
          type: 'warning'
        })
      }
    }
    const loading = ref(true)
    return {
      loading,
      toggleFullscreen
    }
  }
}
</script>

<style lang="scss">
.el-header {
  background: #fff;
  overflow: hidden;
  border: 1px solid #efeff5;
  .logo {
    display: flex;
    width: 100%;
    height: 100%;
  }
}
.content {
  min-height: 100vh;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  .nav-link {
    color: #333639;
    padding: 0 24px;
    text-decoration: none;
    font-size: 20px;
  }
  .router-link-active {
    color: #50a1ff;
  }
}
.user-info {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .item {
    padding: 0 12px;
    .icon {
      color: #999;
      padding: 0 14px;
      font-size: 20px;
    }
  }
}
.footer {
  display: flex;
  border: 1px solid #f3f4f5;
  align-items: center;
  justify-content: center;
  .footer-text {
    font-size: 14px;
    color: #757575;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    width: 540px;
  }
}
</style>
