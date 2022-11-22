<template>
  <div class="pmfo-main">
    <div class="pmfo-teamMembers__module" v-if="coreMembers.length>0">
      <h3 class="pmfo-teamMembers__module-title wow fadeInUp" data-wow-duration="1s">
        <span class="pmfo-teamMembers__module-title-text">{{$t('teamMembers.coreMembers.title.text')}}</span>
        <span class="pmfo-teamMembers__module-title-em">{{$t('teamMembers.coreMembers.title.em')}}</span>
      </h3>
      <p class="pmfo-teamMembers__module-subtitle wow fadeInUp" data-wow-duration="1.2s">{{$t('teamMembers.coreMembers.content')}}</p>
      <div class="pmfo-teamMembers__module-cardbox wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
        <div class="pmfo-teamMembers__module-cardbox-content">
          <el-row type="flex">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="item in coreMembers" :key="item.index">
              <div class="pmfo-teamMembers__module-card" @click="detail('coreMembers',item.index)">
                <div class="pmfo-teamMembers__module-card-front">
                  <img :src="item.avatar" class="wow fadeIn" data-wow-duration="1s" :data-wow-delay="`1.${2*item.index-1}s`" />
                </div>
                <div class="pmfo-teamMembers__module-card-after">
                  <div class="pmfo-teamMembers__module-card-after-content">
                    <div class="pmfo-teamMembers__module-card-after-title">{{item.title}}</div>
                    <div class="pmfo-teamMembers__module-card-after-button">
                      <div class="_border"></div>
                      <span class="_cta">{{$t('teamMembers.personalIntroduction')}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>  
      </div>
    </div>
    <div class="pmfo-teamMembers__module" v-if="speciallyConsultant.length>0">
      <h3 class="pmfo-teamMembers__module-title wow fadeInUp" data-wow-duration="1s">
        <span class="pmfo-teamMembers__module-title-text">{{$t('teamMembers.speciallyConsultant.title.text')}}</span>
        <span class="pmfo-teamMembers__module-title-em">{{$t('teamMembers.speciallyConsultant.title.em')}}</span>
      </h3>
      <p class="pmfo-teamMembers__module-subtitle wow fadeInUp" data-wow-duration="1.2s">{{$t('teamMembers.speciallyConsultant.content')}}</p>
      <div class="pmfo-teamMembers__module-cardbox wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
        <div class="pmfo-teamMembers__module-cardbox-content">
          <el-row type="flex">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="item in speciallyConsultant" :key="item.index">
              <div class="pmfo-teamMembers__module-card" @click="detail('speciallyConsultant',item.index)">
                <div class="pmfo-teamMembers__module-card-front">
                  <img :src="item.avatar" class="wow fadeIn" data-wow-duration="1s" :data-wow-delay="`1.${2*item.index-1}s`" />
                </div>
                <div class="pmfo-teamMembers__module-card-after">
                  <div class="pmfo-teamMembers__module-card-after-content">
                    <div class="pmfo-teamMembers__module-card-after-title">{{item.title}}</div>
                    <div class="pmfo-teamMembers__module-card-after-button">
                      <div class="_border"></div>
                      <span class="_cta">{{$t('teamMembers.personalIntroduction')}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PmfoTeamMembers',
  props: {
  },
  data(){
    return {
      coreMembers: [],
      speciallyConsultant: []
    }
  },
  created(){
    this.coreMembers = this.$t('teamMembers.coreMembers.list')
    this.speciallyConsultant = this.$t('teamMembers.speciallyConsultant.list')
  },
  mounted() {
    
    this.$nextTick(() => {
      new this.$wow.WOW().init();
    });
  },
  methods: {
    detail(type,index){
      this.$router.push({
        path: "/teamMembers/detail", 
        query: { index,type }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pmfo-teamMembers__module{
  
}
.pmfo-teamMembers__module-title{
  width: 1600px;
  margin: 0 auto;
  margin-top: 70px;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  font-family: PingFang SC;
  box-sizing: border-box;
}
.pmfo-teamMembers__module-title-em{
  color: #C7A47C;
}
.pmfo-teamMembers__module-subtitle{
  width: 1600px;
  margin: 26px auto 10px;
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #061C2D;
  box-sizing: border-box;
}
.pmfo-teamMembers__module-cardbox{
  padding: 30px 0;
  background: #061C2D;
}
.pmfo-teamMembers__module-cardbox .pmfo-teamMembers__module-cardbox-content{
  width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
}
.pmfo-teamMembers__module-cardbox .el-row{
  margin: -10px;
  flex-wrap: wrap;
}
.pmfo-teamMembers__module-cardbox .el-col{
  padding: 10px;
}
.pmfo-teamMembers__module-card{
  position: relative;
  box-sizing: border-box;
}
.pmfo-teamMembers__module-card:hover .pmfo-teamMembers__module-card-after{
  opacity: 1;
}
.pmfo-teamMembers__module-card-front{
  position: relative;
}
.pmfo-teamMembers__module-card-front img{
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  transition: opacity .5s ease-out;
  z-index: 1;
}
.pmfo-teamMembers__module-card-after{
  opacity: 0;
  background-image: url(https://d33wubrfki0l68.cloudfront.net/img/d61143d5aa28879bee76483763c7d65f1c33a524/people-overlay.png);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity .7s ease-out .1s;
  text-align: center;
  cursor: pointer;
  display: block;
  content: " ";
  z-index: 2;
}
.pmfo-teamMembers__module-card-after-content{
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  z-index: 3;
}
.pmfo-teamMembers__module-card-after-title{
  font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 200;
  color: #fff;
  width: 100%;
  font-size: 30px;
  line-height: 1.6;
  padding-bottom: 35px;
  transition: all .3s ease-out;
}
.pmfo-teamMembers__module-card-after-button{
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0 24px;
  border: none;
  position: relative;
  height: 40px;
  transition: all .15s ease-out;
  font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pmfo-teamMembers__module-card-after-button ._border{
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 98%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition: all .15s ease-out;
}
.pmfo-teamMembers__module-card-after-button ._cta{
  color: #fff;
}
.pmfo-teamMembers__module-card-after-button:hover ._border{
  border-color: rgba(255,255,255,.65);
}
.pmfo-teamMembers__module-card-after-button:hover ._cta{
  color: rgba(255,255,255,.65);
}

/* 360px */
@media (max-width: 768px) {
  .pmfo-teamMembers__module-title{
    width: 100%;
    padding: 40px 10px 0;
    margin: 0;
    font-size: 30px;
  }
  .pmfo-teamMembers__module-subtitle{
    width: 100%;
    padding: 10px;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__module-cardbox .pmfo-teamMembers__module-cardbox-content{
    width: 100%;
  }
  .pmfo-teamMembers__module-cardbox{
    padding: 10px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-teamMembers__module-title{
    width: 700px;
    margin-top: 40px;
    font-size: 30px;
  }
  .pmfo-teamMembers__module-subtitle{
    width: 700px;
    margin: 20px auto 10px;
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__module-cardbox .pmfo-teamMembers__module-cardbox-content{
    width: 700px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-teamMembers__module-title{
    width: 900px;
    margin-top: 40px;
    font-size: 30px;
  }
  .pmfo-teamMembers__module-subtitle{
    width: 900px;
    margin: 20px auto 10px;
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__module-cardbox .pmfo-teamMembers__module-cardbox-content{
    width: 900px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  .pmfo-teamMembers__module-title{
    width: 1100px;
    margin-top: 60px;
  }
  .pmfo-teamMembers__module-subtitle{
    width: 1100px;
  }
  .pmfo-teamMembers__module-cardbox .pmfo-teamMembers__module-cardbox-content{
    width: 1100px;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  .pmfo-teamMembers__module-title{
    width: 1400px;
    margin-top: 60px;
  }
  .pmfo-teamMembers__module-subtitle{
    width: 1400px;
  }
  .pmfo-teamMembers__module-cardbox .pmfo-teamMembers__module-cardbox-content{
    width: 1400px;
  }
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>

