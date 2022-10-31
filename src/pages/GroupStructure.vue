<template>
  <div class="pmfo-groupStructure">
    <div class="pmfo-groupStructure__banner"></div>
    <div class="pmfo-groupStructure__introduce">
      <div class="pmfo-groupStructure__introduce-title wow fadeInDown" data-wow-duration="1s">
        <h3 class="wow fadeInDown" data-wow-duration="1s">{{$t('groupStructure.introduce.title.text')}}</h3>
        <em class="wow fadeInDown" data-wow-duration="1s">{{$t('groupStructure.introduce.title.em')}}</em>
      </div>
      <div class="pmfo-groupStructure__introduce-text">
        <p class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">{{$t('groupStructure.introduce.text1')}}</p>
        <p class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">{{$t('groupStructure.introduce.text2')}}</p>
        <p class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s">{{$t('groupStructure.introduce.text3')}}</p>
      </div>
      <div class="pmfo-groupStructure__introduce-cradbox">
        <div class="pmfo-groupStructure__introduce-crad wow fadeInUp" data-wow-duration="1s">
          <div class="pmfo-groupStructure__introduce-crad-wrapper">
            <div class="pmfo-groupStructure__introduce-crad-title">
              <h3>{{$t('groupStructure.introduce.crad1.title.text')}}</h3>
              <em>{{$t('groupStructure.introduce.crad1.title.em')}}</em>
            </div>
            <div class="pmfo-groupStructure__introduce-crad-content">
              <p>{{$t('groupStructure.introduce.crad1.content.text1')}}</p>
              <p>{{$t('groupStructure.introduce.crad1.content.text2')}}</p>
              <p>{{$t('groupStructure.introduce.crad1.content.text3')}}</p>
            </div>
          </div>
        </div>

        <div class="pmfo-groupStructure__introduce-crad wow fadeInUp" data-wow-duration="1s">
          <div class="pmfo-groupStructure__introduce-crad-wrapper">
            <div class="pmfo-groupStructure__introduce-crad-title">
              <h3>{{$t('groupStructure.introduce.crad2.title.text')}}</h3>
              <em>{{$t('groupStructure.introduce.crad2.title.em')}}</em>
            </div>
            <div class="pmfo-groupStructure__introduce-crad-content">
              <p>{{$t('groupStructure.introduce.crad2.content.text1')}}</p>
            </div>
          </div>
        </div>

        <div class="pmfo-groupStructure__introduce-crad wow fadeInUp" data-wow-duration="1s">
          <div class="pmfo-groupStructure__introduce-crad-wrapper">
            <div class="pmfo-groupStructure__introduce-crad-title">
              <h3>{{$t('groupStructure.introduce.crad3.title.text')}}</h3>
              <em>{{$t('groupStructure.introduce.crad3.title.em')}}</em>
            </div>
            <div class="pmfo-groupStructure__introduce-crad-content">
              <p>{{$t('groupStructure.introduce.crad3.content.text1')}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PmfoGroupStructure',
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
.pmfo-groupStructure__banner{
  height: 472px;
  background: url(@/assets/images/groupStructure__banner-1.png) no-repeat center center ;
  background-size: cover;
}
.pmfo-groupStructure__introduce{
  position: relative;
  padding: 130px 140px;
  background: url(@/assets/images/groupStructure__introduce-1.png) no-repeat top center ;
  z-index: 10;
}
.pmfo-groupStructure__introduce::after{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 426px;
  background: #fff;
  content: " ";
}
.pmfo-groupStructure__introduce-title{
  position: relative;
  z-index: 10;
  padding-left: 44px;
}
.pmfo-groupStructure__introduce-title::before{
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 47px;
  background: #C7A47C;
  content: " ";
}
.pmfo-groupStructure__introduce-title>h3{
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  color: #707070;
  margin: 0;
}
.pmfo-groupStructure__introduce-title>em{
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  color: #C7A47C;
  margin-top: 20px;
  font-style: normal;
  display: block;
}
.pmfo-groupStructure__introduce-text{
  margin-top: 80px;
  position: relative;
  z-index: 10;
}
.pmfo-groupStructure__introduce-text>p{
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #252525;
}
.pmfo-groupStructure__introduce-cradbox{
  margin: 120px -30px 0;
  position: relative;
  z-index: 10;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}
.pmfo-groupStructure__introduce-crad{
  width: 33.333%;
  padding: 0 30px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.pmfo-groupStructure__introduce-crad-wrapper{
  height: 630px;
  background: #FFFFFF;
  -webkit-box-shadow: 0px 36px 30px rgba(121,121,121,0.16);
          box-shadow: 0px 36px 30px rgba(121,121,121,0.16);
  border-radius: 5px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.pmfo-groupStructure__introduce-crad-title{
  position: relative;
  padding: 40px 40px 30px;
}
.pmfo-groupStructure__introduce-crad-title::before{
  position: absolute;
  top: 40px;
  left: 0;
  content: " ";
  width: 14px;
  height: 47px;
  background: #C7A47C;
}
.pmfo-groupStructure__introduce-crad-title>h3{
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  color: #707070;
  margin: 0;
}
.pmfo-groupStructure__introduce-crad-title>em{
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  color: #C7A47C;
  margin-top: 20px;
  font-style: normal;
  display: block;
}
.pmfo-groupStructure__introduce-crad-content{
  padding: 0 40px;
}
.pmfo-groupStructure__introduce-crad-content>p{
  margin: 0;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.4;
  color: #252525;
}

/* 360px */
@media (max-width: 768px) {
  .pmfo-groupStructure__banner{
    height: 200px;
  }
  .pmfo-groupStructure__introduce{
    padding: 10px;
  }
  .pmfo-groupStructure__introduce-title{
    padding-left: 30px;
  }
  .pmfo-groupStructure__introduce-title>h3{
    font-size: 18px;
  }
  .pmfo-groupStructure__introduce-title>em{
    font-size: 16px;
    margin-top: 10px;
  }
  .pmfo-groupStructure__introduce-title::before{
    height: 20px;
  }
  .pmfo-groupStructure__introduce-text{
    margin-top: 20px;
  }
  .pmfo-groupStructure__introduce-text>p{
    font-size: 14px;
    line-height: 1.5;
  }
  .pmfo-groupStructure__introduce-cradbox{
    margin: 40px 0 0;
  }
  .pmfo-groupStructure__introduce-crad{
    padding: 0 0 10px;
    width: 100%;
  }
  .pmfo-groupStructure__introduce-crad:last-of-type{
    padding-bottom: 0;
  }
  .pmfo-groupStructure__introduce-crad-title{
    padding: 20px;
  }
  .pmfo-groupStructure__introduce-crad-title>h3{
    font-size: 20px;
  }
  .pmfo-groupStructure__introduce-crad-title::before{
    top: 20px;
    height: 30px;
    width: 10px;
  }
  .pmfo-groupStructure__introduce-crad-title>em{
    font-size: 16px;
    margin-top: 10px;
  }
  .pmfo-groupStructure__introduce-crad-content{
    padding: 0 20px 20px;
  }
  .pmfo-groupStructure__introduce-crad-content>p{
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-groupStructure__introduce-crad-wrapper{
    height: auto;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad{
    width: 100%;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad-wrapper{
    height: auto;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad-title::before{
    height: 20px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-groupStructure__banner{
    height: 300px;
  }
  .pmfo-groupStructure__introduce{
    padding: 60px;
  }
  .pmfo-groupStructure__introduce-title>h3{
    font-size: 30px;
  }
  .pmfo-groupStructure__introduce-title>em{
    font-size: 20px;
    margin-top: 10px;
  }
  .pmfo-groupStructure__introduce-title::before{
    height: 30px;
  }
  .pmfo-groupStructure__introduce-text{
    margin-top: 30px;
  }
  .pmfo-groupStructure__introduce-text>p{
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-groupStructure__introduce-cradbox{
    margin: 60px -5px 0;
  }
  .pmfo-groupStructure__introduce-crad{
    padding: 0 5px 10px;
    width: 50%;
  }
  .pmfo-groupStructure__introduce-crad-title{
    padding: 20px;
  }
  .pmfo-groupStructure__introduce-crad-title>h3{
    font-size: 20px;
  }
  .pmfo-groupStructure__introduce-crad-title::before{
    top: 20px;
    height: 30px;
    width: 10px;
  }
  .pmfo-groupStructure__introduce-crad-title>em{
    font-size: 16px;
    margin-top: 10px;
  }
  .pmfo-groupStructure__introduce-crad-content{
    padding: 0 20px;
  }
  .pmfo-groupStructure__introduce-crad-content>p{
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-groupStructure__introduce-crad-wrapper{
    height: 400px;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad{
    width: 50%;
    padding-bottom: 20px;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad-wrapper{
    height: 580px;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad-title::before{
    height: 20px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-groupStructure__banner{
    height: 400px;
  }
  .pmfo-groupStructure__introduce{
    padding: 80px;
  }
  .pmfo-groupStructure__introduce-title::before{
    height: 40px;
  }
  .pmfo-groupStructure__introduce-text{
    margin-top: 40px;
  }
  .pmfo-groupStructure__introduce-cradbox{
    margin: 80px -10px 0;
  }
  .pmfo-groupStructure__introduce-crad{
    padding: 0 10px 20px;
    width: 50%;
  }
  .pmfo-groupStructure__introduce-crad-title{
    padding: 20px;
  }
  .pmfo-groupStructure__introduce-crad-title>h3{
    font-size: 20px;
  }
  .pmfo-groupStructure__introduce-crad-title::before{
    top: 20px;
    height: 30px;
  }
  .pmfo-groupStructure__introduce-crad-title>em{
    font-size: 16px;
    margin-top: 10px;
  }
  .pmfo-groupStructure__introduce-crad-content{
    padding: 0 20px;
  }
  .pmfo-groupStructure__introduce-crad-content>p{
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-groupStructure__introduce-crad-wrapper{
    height: 360px;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad{
    width: 50%;
    padding-bottom: 20px;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad-wrapper{
    height: 460px;
  }
  .pmfo-en .pmfo-groupStructure__introduce-crad-title::before{
    height: 20px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  .pmfo-groupStructure__introduce{
    padding: 100px 80px;
  }
  .pmfo-groupStructure__introduce-title::before{
    height: 30px;
    width: 10px;
  }
  .pmfo-groupStructure__introduce-title>h3{
    font-size: 30px;
  }
  .pmfo-groupStructure__introduce-title>em{
    font-size: 30px;
  }
  .pmfo-groupStructure__introduce-text{
    margin-top: 40px;
  }
  .pmfo-groupStructure__introduce-text>p{
    font-size: 16px;
    line-height: 30px;
  }
  .pmfo-groupStructure__introduce-cradbox{
    margin: 80px -10px 0;
  }
  .pmfo-groupStructure__introduce-crad{
    padding: 0 10px;
  }
  .pmfo-groupStructure__introduce-crad-title{
    padding: 30px;
  }
  .pmfo-groupStructure__introduce-crad-title>h3{
    font-size: 26px;
  }
  .pmfo-groupStructure__introduce-crad-title>em{
    font-size: 20px;
    height: 20px;
    margin-top: 10px;
  }
  .pmfo-groupStructure__introduce-crad-title::before{
    top: 40px;
  }
  .pmfo-groupStructure__introduce-crad-content{
    padding: 0 30px;
  }
  .pmfo-groupStructure__introduce-crad-content>p{
    font-size: 16px;
    line-height: 1.5;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  .pmfo-groupStructure__introduce-crad-title>h3{
    font-size: 24px;
  }
  .pmfo-groupStructure__introduce-crad-title>em{
    font-size: 18px;
    height: 18px;
    margin-top: 14px;
  }
  .pmfo-groupStructure__introduce-crad-content>p{
    font-size: 16px;
    line-height: 1.4;
  }
  .pmfo-groupStructure__introduce-text>p{
    font-size: 18px;
    line-height: 36px;
  }
  .pmfo-groupStructure__introduce-cradbox{
    margin: 120px -20px 0;
  }
  .pmfo-groupStructure__introduce-crad {
    padding: 0 20px;
  }
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>
  