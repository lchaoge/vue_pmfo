<template>
  <el-header class="pmfo__header" height="72px">
    <div class="pmfo__header-wrapper">
      <a class="pmfo__header-login" @click="homeEvt">
        <img src="@/assets/images/pmfo-logo.png" />
        <span>{{$t('projectTitle')}}</span>
      </a>
      <div class="pmfo__header-navbox">
        <el-menu :default-active="routerIndex" class="pmfo__header-nav" mode="horizontal" @select="handleSelectMenu">
          <el-menu-item v-for="item in routerList" :index="item.index" :key="item.index" :url="item.url">{{$t(`common.nav[${item.index}]`)}}</el-menu-item>
        </el-menu>
        <el-button-group class="pmfo__header-language">
          <el-button size="mini" type="primary" :disabled="language === 'zh'" @click="handleSetLanguage('zh')">{{$t('common.i18n.item1')}}</el-button>
          <el-button size="mini" type="primary" :disabled="language === 'en'" @click="handleSetLanguage('en')">{{$t('common.i18n.item2')}}</el-button>
        </el-button-group>
        <el-dropdown class="pmfo__header-nav__dropdown" trigger="click" @command="handleSelectMenu">
          <el-button size="mini" type="primary" icon="el-icon-menu"></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in routerList" :command="item.index" :key="item.index" :disabled="item.index === routerIndex">{{$t(`common.nav[${item.index}]`)}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'PmfoHeader',
  props: {
  },
  data(){
    return{
      // routerIndex: "0",
      routerList: [
        {index: "0", name: '企业介绍', url: "/home"},
        {index: "1", name: '集团构架', url: "/groupStructure"},
        {index: "2", name: '集团核⼼优势', url: "/nuclearAdvantage"},
        {index: "3", name: '团队成员', url: "/teamMembers"},
        {index: "4", name: '服务范围', url: "/serviceScope"},
        {index: "5", name: '我们的服务', url: "/ourServices"},
      ],
      language: localStorage.getItem('lang')
    }
  },
  watch: {
  },
  computed: {
    routerIndex:function(){
      let _routerIndex = 0
      let fullPath = this.$route.fullPath
      let find = this.routerList.find(item=>{
        if(fullPath !="/" && fullPath.indexOf(item.url) != -1){
          _routerIndex = item.index
        }
        return fullPath === item.url
      })
      if(find){
        return find.index
      }else{
        return `${_routerIndex}`
      }
    }
  },
  mounted() {
  },
  created() {},
  methods: {
    init(){
      let fullPath = this.$route.fullPath
      let find = this.routerList.find(item=>{
        return item.url === fullPath
      })
      
      if(find){
        this.routerIndex = find.index
      }else{
        this.routerIndex = "0"
      }
    },
    handleSelectMenu(key) {
      let url = this.routerList[key].url
      this.$router.push(url)
    },
    homeEvt(){
      // this.$router.push("/")
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.language = lang
      localStorage.setItem('lang', lang)

      document.getElementsByClassName("pmfo")[0].className = `pmfo pmfo-${lang}`
      document.getElementsByTagName("html")[0].setAttribute("lang",lang)

      this.$router.go(0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pmfo__header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 72px;
  background: #061C2D;
  opacity: 1;
  padding: 0;
  &-wrapper{
    padding: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.pmfo__header-login,.pmfo__header-login:hover{
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.pmfo__header-login img{
  -webkit-animation-name: imgScaleDraw; /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite;  /*动画播放的次数*/
  -webkit-animation-duration: 5s; /*动画所花费的时间*/
  animation: imgScaleDraw 5s ease-in-out infinite;
  -webkit-animation: imgScaleDraw 5s ease-in-out infinite;
}
.pmfo__header-login span{
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  color: #FFFFFF;
  position: relative;
  left: -10px;
}
@-webkit-keyframes imgScaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0%{
    -webkit-transform: scale(1);
            transform: scale(1);  /*开始为原始大小*/
  }
  25%{
    -webkit-transform: scale(1.2);
            transform: scale(1.2); /*放大1.1倍*/
  }
  50%{
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  75%{
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
@keyframes imgScaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0%{
    -webkit-transform: scale(1);
            transform: scale(1);  /*开始为原始大小*/
  }
  25%{
    -webkit-transform: scale(1.2);
            transform: scale(1.2); /*放大1.1倍*/
  }
  50%{
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  75%{
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
.pmfo__header-nav{
  background-color: transparent;
  border-bottom: 0px none !important;
  height: 100%;
}
.pmfo__header-nav>li{
  font-weight: 400;
  color: #FFFFFF;
  background-color: transparent !important;
  height: 72px;
  line-height: 72px;
}
.pmfo__header-nav>li>a{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100%;
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 0;
}

.pmfo__header-nav__dropdown{
  display: none;
}
.pmfo__header-navbox{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  justify-content: flex-end;
  height: 100%;
  min-width: 120px;
}
.pmfo__header-language{
  margin: 0 10px;
}
.pmfo__header-nav .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  background-color: transparent;
  color: #fff;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  color: #fff;
}
.el-menu--horizontal>.el-menu-item.is-active{
  color: #fff;
}

@media (max-width: 1200px) {
  .pmfo__header-nav{
    display: none;
  }
  .pmfo__header-nav__dropdown{
    display: block;
  }
}

/* 360px */
@media (max-width: 768px) {
  .pmfo__header-login span{
    font-size: 12px;
    left: 0px;
  }
  .pmfo__header-nav>li{
    padding: 0;
  }
  .pmfo__header-nav>li>a{
    font-size: 12px;
  }
  .pmfo__header-navbox .el-button--mini, .el-button--mini.is-round{
    padding: 4px 6px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo__header-login span{
    font-size: 12px;
    left: 0px;
  }
  .pmfo__header-nav>li{
    padding: 0;
  }
  .pmfo__header-nav>li>a{
    font-size: 12px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo__header-login span{
    font-size: 12px;
    left: 0px;
  }
  .pmfo__header-nav>li{
    padding: 0;
  }
  .pmfo__header-nav>li>a{
    font-size: 12px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px){
  .pmfo__header-login span{
    font-size: 12px;
    left: 0px;
  }
  .pmfo__header-nav>li{
    padding: 0 15px;
  }
  .pmfo__header-nav>li>a{
    font-size: 12px;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  .pmfo__header-login span{
    font-size: 16px;
  }
  .pmfo__header-nav>li{
    padding: 0 15px;
  }
  .pmfo__header-nav>li>a{
    font-size: 16px;
  }
  .pmfo-en .pmfo__header-nav>li>a{
    font-size: 14px;
  }
  .pmfo-en .pmfo__header-login span {
    font-size: 14px;
  }
  
}
/* 1920 */
@media (min-width: 1920px) {
}


.pmfo-home .pmfo__header{
  background: transparent; 
}
</style>
