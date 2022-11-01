<template>
  <div class="pmfo__backTop" ref="backTop" v-show="showBtn" @click="backTop">
    <i class="el-icon-upload2"></i>
  </div>
</template>

<script>
export default {
  name: 'PmfoBackTop',
  props: {
    msg: String
  },
  data(){
    return {
      showBtn: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showbtn, true)
  },
  methods:{
    // 回到顶部
    showbtn() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 300) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    },


    backTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pmfo__backTop{
  height: 50px;
  width: 50px;
  position: fixed;
  right: 30px;
  bottom: 50px;
  text-align: center;
  line-height: 35px;
  font-size: 24px;
  background-color: #c7a47c;
  border-radius: 50%;
  box-shadow: 0px 1px 3px 1px #888888;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(41, 26, 204, 0.12);
  color: #fff;
}
</style>
