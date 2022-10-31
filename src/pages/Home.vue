<template>
<div class="pmfo-home">
  <div class="pmfo-home__banner">
    <div class="pmfo-home__banner-textbox wow slideInLeft" data-wow-duration="1s">
      <p class="wow slideInLeft" data-wow-duration="1s" name="home.banner.text1">{{$t('home.banner.text1')}}</p>
      <p class="wow slideInLeft" data-wow-duration="1.5s" name="home.banner.text2">{{$t('home.banner.text2')}}</p>
    </div>
  </div>
  <div class="pmfo-home__introduction">
    <h3 class="pmfo-home__introduction-title wow fadeInUp" data-wow-duration="1s">
      <em>{{$t('home.introduction.title.em')}}</em>
      <span>{{$t('home.introduction.title.text')}}</span>
    </h3>
    <div class="pmfo-home__introduction-content">
      <div class="pmfo-home__introduction-content-text wow bounceInLeft"  data-wow-duration="1s">
        <p>{{$t('home.introduction.content.text1')}}</p>
        <p>{{$t('home.introduction.content.text2')}}</p>
      </div>
      <img class="pmfo-home__introduction-content-image wow bounceInRight"  data-wow-duration="1s" src="@/assets/images/index__introduction-1.png" />
    </div>
  </div>
  <div class="pmfo-home__idea">
    <h3 class="pmfo-home__idea-title wow fadeInRight" data-wow-duration="1s">
      <em>{{$t('home.idea.title.em')}}</em>
      <span>{{$t('home.idea.title.text')}}</span>
    </h3>
    <div class="pmfo-home__idea-content wow flipInX" data-wow-duration="1s">{{$t('home.idea.content')}}</div>
  </div>
  <div class="pmfo-home__service">
    <h3 class="pmfo-home__service-title wow fadeInUp" data-wow-duration="1s">
      <em>{{$t('home.service.title.em')}}</em>
      <span>{{$t('home.service.title.text')}}</span>
    </h3>
    <div class="pmfo-home__service-content">
      <div class="pmfo-home__service-content-card wow fadeInLeft" data-wow-duration="1s">
        <img class="pmfo-home__service-content-card-image" src="@/assets/images/index__service-1.png" />
        <div class="pmfo-home__service-content-card-text">{{$t('home.service.content.card1')}}</div>
      </div>
      <div class="pmfo-home__service-content-card wow fadeInRight" data-wow-duration="1s">
        <img class="pmfo-home__service-content-card-image" src="@/assets/images/index__service-2.png" />
        <div class="pmfo-home__service-content-card-text">{{$t('home.service.content.card2')}}</div>
      </div>
    </div>
  </div>
  <div class="pmfo-home__future">
    <img class="pmfo-home__future-content-image wow slideInUp" data-wow-duration="1s" src="@/assets/images/index__future-1.png" />
    <div class="pmfo-home__future-content">
      <div class="pmfo-home__future-titlebox">
        <h3 class="pmfo-home__future-title wow slideInUp" data-wow-duration="1s">
          <em>{{$t('home.future.title.em')}}</em>
          <span>{{$t('home.future.title.text')}}</span>
        </h3>
        <div class="pmfo-home__future-content-logo wow slideInUp" data-wow-duration="1s">{{$t('home.future.content.logo')}}</div>
      </div>
      <div class="pmfo-home__future-content-text wow slideInUp" data-wow-duration="1s">{{$t('home.future.content.text')}}</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'PmfoHome',
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
.pmfo-home__banner{
  position: relative;
  height: 1080px;
  background: url(@/assets/images/index__banner-1.png) no-repeat center center;
  background-size: cover;
}
.pmfo-home__banner-textbox{
  position: absolute;
  top: 50%;
  left: 0;
  background: rgba(37,37,37,0.39);
  opacity: 0.9;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 76px 130px;
}
.pmfo-home__banner-textbox::before{
  position: absolute;
  top: 0;
  left: 130px;
  width: 120px;
  height: 16px;
  background: #9D2626;
  content: " ";
  display: block;
}
.pmfo-home__banner-textbox>p{
  font-size: 60px;
  font-weight: 200;
  line-height: 84px;
  color: #FFFFFF;
  margin-bottom: 0;
}

.pmfo-home__introduction{
  background: #061C2D;
  padding: 190px 140px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.pmfo-home__introduction-title{
  position: relative;
  padding: 0 0 94px;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.8;
  color: #C7A47C;
  text-align: center;
  margin: 0;
}
.pmfo-home__introduction-title>em{
  color: #fff;
  font-style: normal;
}
.pmfo-home__introduction-content{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.pmfo-home__introduction-content-text{
  position: relative;
  padding: 0 90px 0 0;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  color: #FFFFFF;
}
.pmfo-home__introduction-content-text>p{
  margin-bottom: 0;
}
.pmfo-home__introduction-content-image{
  position: relative;
  width: 465px;
  display: block;
}

.pmfo-home__idea{
  background: url(@/assets/images/index__idea-1.png) no-repeat center center;
  background-size: cover;
  padding: 190px 240px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.pmfo-home__idea-title{
  position: relative;
  padding: 0 0 140px;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  color: #707070;
  text-align: center;
  margin: 0;
}
.pmfo-home__idea-title>em{
  color: #C7A47C;
  font-style: normal;
}
.pmfo-home__idea-content{
  position: relative;
  font-size: 20px;
  font-weight: 300;
  line-height: 2;
  color: #252525;
}

.pmfo-home__service{
  padding: 190px 0;
  background: url(@/assets/images/index__idea-1.png) no-repeat center center rgba(6,28,45,0.69);
  background-size: cover;
}
.pmfo-home__service-title{
  position: relative;
  padding: 0 0 105px;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
}
.pmfo-home__service-title>em{
  color: #C7A47C;
  font-style: normal;
}
.pmfo-home__service-content{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0 100px;
}
.pmfo-home__service-content-card{
  margin: 0 20px;
  width: 50%;
  height: 502px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.pmfo-home__service-content-card:hover .pmfo-home__service-content-card-text{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.pmfo-home__service-content-card-image{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.pmfo-home__service-content-card-text{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0 68px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  color: #FFFFFF;
  text-align: center;
  background: rgba(62,62,62,0.5);
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(2px);
  box-sizing: border-box;
}

.pmfo-home__future{
  position: relative;
  height: 929px;
  padding: 268px 140px 222px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.pmfo-home__future-content-image{
  width: 660px;
  display: block;
  position: relative;
  right: -30px;
}
.pmfo-home__future-content{
  position: relative;
  top: -80px;
  left: -30px;
}
.pmfo-home__future-titlebox{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.pmfo-home__future-title{
  font-size: 40px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 56px;
  color: #C7A47C;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  text-align: center;
  margin: 0;
}
.pmfo-home__future-title>em{
  color: #707070;
  font-style: normal;
}
.pmfo-home__future-content-logo{
  position: relative;
  top: 60px;
  width: 40%;
  height: 450px;
  font-size: 314px;
  font-weight: bold;
  color: #C7A47C;
  opacity: 0.08;
}
.pmfo-home__future-content-text{
  position: relative;
  top: -77px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 70px 66px;
  width: 1049px;
  background: rgba(255,255,255,1);
  -webkit-box-shadow: 0px 36px 30px rgba(0,0,0,0.08);
          box-shadow: 0px 36px 30px rgba(0,0,0,0.08);
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #252525;
}
.pmfo-home__future-content-text::before{
  position: absolute;
  top: 37px;
  left: 66px;
  content: " ";
  display: block;
  width: 37px;
  height: 1px;
  background: rgba(199,164,124,0.39);
}
.pmfo-home__banner-textbox::before{
  left: 100px;
}


/* 360px */
@media (max-width: 768px) {
  .pmfo-home__banner{
    height: 300px;
  }
  .pmfo-home__banner-textbox{
    padding: 10px 20px;
    top: 45%;
  }
  .pmfo-home__banner-textbox::before{
    left: 20px;
    width: 20px;
    height: 4px;
  }
  .pmfo-home__banner-textbox>p{
    font-size: 14px;
    line-height: 1.5;
  }
  .pmfo-home__introduction{
    padding: 20px 10px;
  }
  .pmfo-home__introduction-title{
    padding: 0 0 20px;
    font-size: 24px;
  }
  .pmfo-home__introduction-content{
    flex-direction: column-reverse;
  }
  .pmfo-home__introduction-content-text{
    padding: 10px 0 0;
    font-size: 14px;
  }
  .pmfo-home__introduction-content-image{
    width: 100%;
  }
  .pmfo-home__idea{
    padding: 20px 10px;
  }
  .pmfo-home__idea-title{
    padding: 0 0 20px;
    font-size: 24px;
  }
  .pmfo-home__idea-content{
    font-size: 14px;
    line-height: 1.5;
  }
  .pmfo-home__service{
    padding: 20px 10px;
  }
  .pmfo-home__service-title{
    font-size: 24px;
    line-height: 1;
    padding: 0 0 20px;
  }
  .pmfo-home__service-content{
    padding: 0;
    flex-wrap: wrap;
  }
  .pmfo-home__service-content-card{
    margin: 0 0 10px;
    height: 200px;
    width: 100%;
  }
  .pmfo-home__service-content-card:last-of-type{
    margin: 0;
  }
  .pmfo-home__service-content-card-text{
    padding: 0 10px;
    font-size: 16px;
  }
  .pmfo-home__future{
    height: auto;
    padding: 40px 10px 10px;
    flex-direction: column-reverse;
  }
  .pmfo-home__future-content-image{
    width: 100%;
    right: 0;
  }
  .pmfo-home__future-title{
    font-size: 30px;
    line-height: 1;
  }
  .pmfo-home__future-content-logo{
    position: absolute;
    line-height: 1;
    height: auto;
    top: -40px;
    right: 0;
    width: auto;
    font-size: 100px;
  }
  .pmfo-home__future-content-text{
    font-size: 12px;
    line-height: 1.5;
    flex: 1;
    padding: 20px 10px 10px;
    width: auto;
    margin: 20px 0 10px;
    top: auto;
  }
  .pmfo-home__future-content-text::before{
    top: 10px;
    left: 10px;
    width: 20px;
  }
  .pmfo-home__future-content{
    flex: 1;
    top: auto;
    left: auto;
  }
  .pmfo-home__future-titlebox{
    position: relative;
    top: auto;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-home__banner{
    height: 500px;
  }
  .pmfo-home__banner-textbox{
    padding: 20px 60px;
    top: 45%;
  }
  .pmfo-home__banner-textbox::before{
    left: 60px;
    width: 60px;
    height: 10px;
  }
  .pmfo-home__banner-textbox>p{
    font-size: 30px;
    line-height: 1.5;
  }
  .pmfo-home__introduction{
    padding: 20px;
  }
  .pmfo-home__introduction-title{
    padding: 0 0 30px;
    font-size: 30px;
  }
  .pmfo-home__introduction-content-text{
    padding: 0 40px 0 0;
    font-size: 16px;
  }
  .pmfo-home__introduction-content-image{
    width: 300px;
  }
  .pmfo-home__idea{
    padding: 60px;
  }
  .pmfo-home__idea-title{
    padding: 0 0 60px;
    font-size: 30px;
  }
  .pmfo-home__service{
    padding: 60px 20px;
  }
  .pmfo-home__service-title{
    font-size: 30px;
    line-height: 1;
    padding: 0 0 40px;
  }
  .pmfo-home__service-content{
    padding: 0;
  }
  .pmfo-home__service-content-card{
    margin: 0 10px;
    height: 300px;
  }
  .pmfo-home__service-content-card-text{
    padding: 0 20px;
    font-size: 16px;
  }
  .pmfo-home__future{
    height: auto;
    padding: 100px 0;
  }
  .pmfo-home__future-content-image{
    width: 300px;
  }
  .pmfo-home__future-title{
    font-size: 30px;
    line-height: 1;
  }
  .pmfo-home__future-content-logo{
    line-height: 1;
    height: auto;
    top: 0;
    font-size: 200px;
  }
  .pmfo-home__future-content-text{
    font-size: 14px;
    line-height: 1.5;
    flex: 1;
    padding: 30px;
    width: auto;
  }
  .pmfo-home__future-content-text::before{
    top: 15px;
    left: 30px;
    width: 30px;
  }
  .pmfo-home__future-content{
    flex: 1;
    top: auto;
  }
  .pmfo-home__future-titlebox{
    position: relative;
    top: -30px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-home__banner{
    height: 600px;
  }
  .pmfo-home__banner-textbox{
    padding: 20px 80px;
    top: 45%;
  }
  .pmfo-home__banner-textbox::before{
    left: 80px;
    width: 100px;
    height: 12px;
  }
  .pmfo-home__banner-textbox>p{
    font-size: 40px;
    line-height: 1.5;
  }
  .pmfo-home__introduction{
    padding: 60px;
  }
  .pmfo-home__introduction-title{
    padding: 0 0 60px;
    font-size: 30px;
  }
  .pmfo-home__introduction-content-text{
    padding: 0 40px 0 0;
    font-size: 16px;
  }
  .pmfo-home__introduction-content-image{
    width: 300px;
  }
  .pmfo-home__idea{
    padding: 60px;
  }
  .pmfo-home__idea-title{
    padding: 0 0 60px;
    font-size: 30px;
  }
  .pmfo-home__service{
    padding: 100px;
  }
  .pmfo-home__service-title{
    font-size: 30px;
    line-height: 1;
    padding: 0 0 60px;
  }
  .pmfo-home__service-content{
    padding: 0;
  }
  .pmfo-home__service-content-card{
    margin: 0 10px;
    height: 300px;
  }
  .pmfo-home__service-content-card-text{
    padding: 0 20px;
    font-size: 16px;
  }
  .pmfo-home__future{
    height: auto;
    padding: 100px 0;
  }
  .pmfo-home__future-content-image{
    width: 300px;
  }
  .pmfo-home__future-title{
    font-size: 30px;
    line-height: 1;
  }
  .pmfo-home__future-content-logo{
    line-height: 1;
    height: auto;
    top: 0;
    font-size: 200px;
  }
  .pmfo-home__future-content-text{
    font-size: 14px;
    line-height: 1.5;
    flex: 1;
    padding: 30px;
    width: auto;
  }
  .pmfo-home__future-content-text::before{
    top: 15px;
    left: 30px;
    width: 30px;
  }
  .pmfo-home__future-content{
    flex: 1;
    top: auto;
  }
  .pmfo-home__future-titlebox{
    position: relative;
    top: -30px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  .pmfo-home__banner{
    height: 800px;
  }
  .pmfo-home__banner-textbox>p{
    font-size: 30px;
    line-height: 60px;
  }
  .pmfo-home__banner-textbox{
    padding: 30px 80px;
    top: 40%;
  }
  .pmfo-home__banner-textbox::before{
    left: 80px;
  }
  .pmfo-home__introduction{
    padding: 140px 100px;
  }
  .pmfo-home__introduction-title{
    padding: 0 0 90px;
  }
  .pmfo-home__introduction-content-text{
    font-size: 16px;
    padding: 0 60px 0 0;
  }
  .pmfo-home__introduction-content-image{
    width: 398px;
  }
  .pmfo-home__idea-title{
    font-size: 30px;
    padding: 0 0 100px;
  }
  .pmfo-home__service-title{
    padding: 160px 0 100px;
  }
  .pmfo-home__future-content-image{
    width: 340px;
  }
  .pmfo-home__future-content-text{
    padding: 40px 30px;
    width: 790px;
    font-size: 14px;
    line-height: 1.5;
  }
  .pmfo-home__future-content-logo{
    font-size: 150px;
    top: 120px;
    height: 350px;
    width: 30%;
  }
  .pmfo-home__future-content-text::before{
    top: 20px;
    left: 30px;
  }
  .pmfo-home__future-title{
    font-size: 30px;
  }
  .pmfo-home__service-content-card{
    height: 300px;
  }
  .pmfo-home__future{
    height: 600px;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  
  .pmfo-home__banner-textbox>p{
    font-size: 40px;
  }
  .pmfo-home__banner-textbox{
    padding: 50px 100px;
  }
  .pmfo-home__banner{
    height: 900px;
  }
  .pmfo-home__banner-textbox{
    top: 45%;
  }
  .pmfo-home__introduction-content-text{
    font-size: 18px;
  }
  .pmfo-home__future-content-image{
    width: 500px;
  }
  .pmfo-home__future-content-text{
    padding: 40px 30px;
    width: 790px;
    font-size: 16px;
  }
  .pmfo-home__future-content-logo{
    font-size: 200px;
    top: 60px;
    height: 350px;
    width: 30%;
  }
  .pmfo-home__future-content-text::before{
    top: 20px;
    left: 30px;
  }
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>