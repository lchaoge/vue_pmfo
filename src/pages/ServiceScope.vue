
<template>
  <div class="pmfo-main">
    <div class="pmfo-serviceScope__card pmfo-serviceScope__card-1">
      <div class="pmfo-serviceScope__card-wrapper">
        <h3 class="pmfo-serviceScope__card-title wow slideInDown" data-wow-duration="1s">{{$t('serviceScope.card1.title')}}</h3>
        <div class="pmfo-serviceScope__card-content">
          <div class="pmfo-serviceScope__card-subtitle wow slideInLeft" data-wow-duration="1s">{{$t('serviceScope.card1.subtitle')}}</div>
          <div class="pmfo-serviceScope__card-describe wow slideInRight" data-wow-duration="1s">{{$t('serviceScope.card1.describe')}}</div>
        </div>
      </div>
    </div>
    <div class="pmfo-serviceScope__card pmfo-serviceScope__card-2">
      <div class="pmfo-serviceScope__card-wrapper">
        <h3 class="pmfo-serviceScope__card-title wow slideInDown" data-wow-duration="1s">{{$t('serviceScope.card2.title')}}</h3>
        <div class="pmfo-serviceScope__card-content">
          <div class="pmfo-serviceScope__card-describe wow slideInLeft" data-wow-duration="1s">{{$t('serviceScope.card2.describe')}}</div>
          <div class="pmfo-serviceScope__card-subtitle wow slideInRight" data-wow-duration="1s">{{$t('serviceScope.card2.subtitle')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PmfoServiceScope',
  props: {
  },
  data(){
    return {

    }
  },
  mounted() {
    this.$nextTick(() => {
      new this.$wow.WOW().init();
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pmfo-serviceScope__card{
  position: relative;
}
.pmfo-serviceScope__card-1{
  background: url(@/assets/images/serviceScope__card-1.png) no-repeat center center;
  background-size: cover;
}
.pmfo-serviceScope__card-2{
  background: url(@/assets/images/serviceScope__card-2.png) no-repeat center center;
  background-size: cover;
}
.pmfo-serviceScope__card-wrapper{
  background: rgba(0,0,0,.5);
  padding: 275px 158px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: relative;
}
.pmfo-serviceScope__card-title{
  font-size: 160px;
  font-weight: 400;
  line-height: 1;
  color: #C7A47C;
  margin: 0;
}
.pmfo-serviceScope__card-content{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 78px;
}

.pmfo-serviceScope__card-subtitle{
  width: 30%;
  font-size: 50px;
  font-weight: 400;
  line-height: 1.5;
  color: #FFFFFF;
}
.pmfo-en .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-subtitle{
  font-size: 30px;
}
.pmfo-en .pmfo-serviceScope__card-wrapper{
  padding: 250px 158px;
}
.pmfo-serviceScope__card-describe{
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  color: #FFFFFF;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.pmfo-serviceScope__card-1 .pmfo-serviceScope__card-describe{
  padding-left: 96px;
}

.pmfo-serviceScope__card-2 .pmfo-serviceScope__card-describe{
  padding-right: 84px;
}


/* 360px */
@media (max-width: 768px) {
  .pmfo-serviceScope__card-wrapper{
    padding: 20px;
  }
  .pmfo-serviceScope__card-title{
    font-size: 30px;
  }
  .pmfo-serviceScope__card-content{
    margin-top: 20px;
    flex-direction: column;
  }
  .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-content{
    flex-direction: column-reverse;
  }
  .pmfo-serviceScope__card-subtitle{
    font-size: 20px;
    width: 100%;
  }
  .pmfo-serviceScope__card-1 .pmfo-serviceScope__card-describe{
    padding-left: 0;
    font-size: 14px;
    padding-top: 20px;
  }
  .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-describe {
    padding-right: 0;
    font-size: 14px;
    padding-top: 20px;
  }
  .pmfo-en .pmfo-serviceScope__card-wrapper{
    padding: 20px;
  }
  .pmfo-en .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-subtitle{
    font-size: 16px;
    line-height: 1.3;
  }
  .pmfo-en .pmfo-serviceScope__card-describe{
    font-size: 16px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-serviceScope__card-wrapper{
    padding: 60px;
  }
  .pmfo-serviceScope__card-title{
    font-size: 80px;
  }
  .pmfo-serviceScope__card-content{
    margin-top: 20px;
  }
  .pmfo-serviceScope__card-subtitle{
    font-size: 24px;
  }
  .pmfo-serviceScope__card-1 .pmfo-serviceScope__card-describe{
    padding-left: 40px;
  }
  .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-describe {
    padding-right: 40px;
  }
  .pmfo-en .pmfo-serviceScope__card-wrapper{
    padding: 50px;
  }
  .pmfo-en .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-subtitle{
    font-size: 16px;
    line-height: 1.3;
  }
  .pmfo-en .pmfo-serviceScope__card-describe{
    font-size: 16px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-serviceScope__card-wrapper{
    padding: 160px 100px;
  }
  .pmfo-serviceScope__card-title{
    font-size: 120px;
  }
  .pmfo-serviceScope__card-content{
    margin-top: 40px;
  }
  .pmfo-serviceScope__card-subtitle{
    font-size: 30px;
  }
  .pmfo-en .pmfo-serviceScope__card-wrapper{
    padding: 100px;
  }
  .pmfo-en .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-subtitle{
    font-size: 20px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  .pmfo-serviceScope__card-wrapper{
    padding: 100px;
  }
  .pmfo-serviceScope__card-title{
    font-size: 120px;
  }
  .pmfo-serviceScope__card-content{
    margin-top: 40px;
  }
  .pmfo-serviceScope__card-subtitle{
    font-size: 40px;
  }
  .pmfo-en .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-subtitle{
    font-size: 24px;
    line-height: 1.3;
  }
  .pmfo-serviceScope__card-1 .pmfo-serviceScope__card-describe{
    padding-left: 60px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
  }
  .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-describe{
    padding-right: 60px;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  .pmfo-en .pmfo-serviceScope__card-2 .pmfo-serviceScope__card-subtitle{
    font-size: 26px;
    line-height: 1.1;
  }
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>