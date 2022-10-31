<template>
  <el-container id="app" direction="vertical">
    <PmfoHeader />
    <el-main>
      <router-view />
      <PmfoFooter />
    </el-main>
    <el-backtop target=".el-main"></el-backtop>
  </el-container>
</template>

<script>
import PmfoHeader from '@/components/Header'
import PmfoFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    PmfoHeader,
    PmfoFooter
  },
  data(){
    return {

    }
  },
}
</script>

<style>
html,body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  padding:0;
  margin: 0;
}
.el-main{
  margin-top: 72px;
  padding: 0 !important;
}
.pmfo ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
.pmfo ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    background-clip: padding-box;
    min-height: 5px;
    border-radius: 5px;

}
</style>
