<template>
<div class="pmfo-main">
  <div class="pmfo-nuclearAdvantage__banner">
    <div class="pmfo-nuclearAdvantage__banner-textbox">
      <h3 class="pmfo-nuclearAdvantage__banner-title wow fadeInDown" data-wow-duration="1s">
        <em>{{$t('nuclearAdvantage.banner.title.em')}}</em>
        <span>{{$t('nuclearAdvantage.banner.title.text')}}</span>
      </h3>
      <div class="pmfo-nuclearAdvantage__banner-content wow fadeInDown" data-wow-duration="1s">{{$t('nuclearAdvantage.banner.content')}}</div>
    </div>
  </div>
  <div class="pmfo-nuclearAdvantage__cradbox">
    <div class="pmfo-nuclearAdvantage__crad wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-1.png" />
        <h4>
          <div>{{$t('nuclearAdvantage.crad1.title1')}}</div>
          <div>{{$t('nuclearAdvantage.crad1.title2')}}</div>
        </h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad1.behind')}}</p>
      </div>
    </div>
    <div class="pmfo-nuclearAdvantage__crad wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-2.png" />
        <h4>
          <div>{{$t('nuclearAdvantage.crad2.title1')}}</div>
          <div>{{$t('nuclearAdvantage.crad2.title2')}}</div>
        </h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad2.behind')}}</p>
      </div>
    </div>
    <div class="pmfo-nuclearAdvantage__crad wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-3.png" />
        <h4>
          <div>{{$t('nuclearAdvantage.crad3.title1')}}</div>
          <div>{{$t('nuclearAdvantage.crad3.title2')}}</div>
        </h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad3.behind')}}</p>
      </div>
    </div>
    <div class="pmfo-nuclearAdvantage__crad wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-4.png" />
        <h4>
          <div>{{$t('nuclearAdvantage.crad4.title1')}}</div>
          <div>{{$t('nuclearAdvantage.crad4.title2')}}</div>
        </h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad4.behind')}}</p>
      </div>
    </div>
    <div class="pmfo-nuclearAdvantage__crad wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-5.png" />
        <h4>
          <div>{{$t('nuclearAdvantage.crad5.title1')}}</div>
          <div>{{$t('nuclearAdvantage.crad5.title2')}}</div>
        </h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad5.behind')}}</p>
      </div>
    </div>
    <div class="pmfo-nuclearAdvantage__crad wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-6.png" />
        <h4>{{$t('nuclearAdvantage.crad6.title')}}</h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad6.behind')}}</p>
      </div>
    </div>
    <div class="pmfo-nuclearAdvantage__crad pmfo-nuclearAdvantage__crad-6 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
      <div class="pmfo-nuclearAdvantage__crad-front">
        <img src="@/assets/images/nuclearAdvantage__crad-7.png" />
        <h4>{{$t('nuclearAdvantage.crad7.title')}}</h4>
      </div>
      <div class="pmfo-nuclearAdvantage__crad-behind">
        <p>{{$t('nuclearAdvantage.crad7.behind')}}</p>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: 'PmfoNuclearAdvantage',
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
.pmfo-nuclearAdvantage__banner{
  height: 546px;
  position: relative;
  background: url(@/assets/images/nuclearAdvantage__banner.png) no-repeat center center;
  background-size: cover;
}
.pmfo-nuclearAdvantage__banner-textbox{
  position: absolute;
  top: 182px;
  left: 0;
}
.pmfo-nuclearAdvantage__banner-title{
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  color: #C7A47C;
  padding-left: 140px;
  margin: 0;
}
.pmfo-nuclearAdvantage__banner-title>em{
  font-style: normal;
  color: #fff;
}
.pmfo-nuclearAdvantage__banner-content{
  margin-top: 16px;
  width: 980px;
  background: rgba(37,37,37,0.89);
  padding: 40px 40px 40px 140px;
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #FFFFFF;
}
.pmfo-nuclearAdvantage__cradbox{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.pmfo-nuclearAdvantage__crad{
  position: relative;
  width: 25%;
  height: 873px;
  cursor: pointer;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
.pmfo-nuclearAdvantage__crad-6{
  width: 50%;
}
.pmfo-nuclearAdvantage__crad-front{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
.pmfo-nuclearAdvantage__crad-front>img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.pmfo-nuclearAdvantage__crad-front>h4{
  padding: 20px;
  background: rgba(37,37,37,0.39);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 32px;
  font-weight: 300;
  line-height: 50px;
  color: #FFFFFF;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
          text-align: center;
  box-sizing: border-box;
}
.pmfo-nuclearAdvantage__crad-behind{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0 64px;
  background: #C7A47C;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  opacity: 0;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.pmfo-nuclearAdvantage__crad-behind>p{
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  color: #FFFFFF;
  margin: 0;
}
.pmfo-nuclearAdvantage__crad:hover .pmfo-nuclearAdvantage__crad-behind {
  opacity: 1;
}

/* 360px */
@media (max-width: 768px) {
  .pmfo-nuclearAdvantage__banner{
    height: 400px;
  }
  .pmfo-nuclearAdvantage__banner-textbox{
    top: 100px;
  }
  .pmfo-nuclearAdvantage__banner-title{
    font-size: 20px;
    line-height: 1;
    padding-left: 40px;
  }
  .pmfo-nuclearAdvantage__banner-content{
    margin-top: 10px;
    width: 300px;
    padding: 10px 10px 10px 40px;
    font-size: 12px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad{
    height: 500px;
    width: 100%;
  }
  .pmfo-nuclearAdvantage__crad-front>h4{
    font-size: 20px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad-behind{
    padding: 0 20px;
  }
  .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 16px;
  }
  .pmfo-en .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 12px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-nuclearAdvantage__banner{
    height: 480px;
  }
  .pmfo-nuclearAdvantage__banner-textbox{
    top: 160px;
  }
  .pmfo-nuclearAdvantage__banner-title{
    font-size: 26px;
    line-height: 1;
    padding-left: 80px;
  }
  .pmfo-nuclearAdvantage__banner-content{
    margin-top: 10px;
    width: 500px;
    padding: 20px 20px 20px 80px;
    font-size: 12px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad{
    height: 600px;
    width: 50%;
  }
  .pmfo-nuclearAdvantage__crad-front>h4{
    font-size: 20px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad-behind{
    padding: 0 20px;
  }
  .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 16px;
  }
  .pmfo-en .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 12px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-nuclearAdvantage__banner-title{
    font-size: 30px;
    line-height: 1;
    padding-left: 100px;
  }
  .pmfo-nuclearAdvantage__banner-content{
    margin-top: 10px;
    width: 600px;
    padding: 20px 20px 20px 100px;
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad{
    height: 600px;
  }
  .pmfo-nuclearAdvantage__crad-front>h4{
    font-size: 20px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad-behind{
    padding: 0 20px;
  }
  .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 16px;
  }
  .pmfo-en .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 12px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  .pmfo-nuclearAdvantage__crad{
    height: 600px;
  }
  .pmfo-nuclearAdvantage__crad-front>h4{
    font-size: 20px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad-behind{
    padding: 0 30px;
  }
  .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 16px;
    line-height: 1.8;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  .pmfo-nuclearAdvantage__banner-textbox{
    top: 160px;
  }
  .pmfo-nuclearAdvantage__banner-content{
    width: 880px;
    font-size: 18px;
    line-height: 1.5;
  }
  .pmfo-nuclearAdvantage__crad{
    height: 700px;
  }
  .pmfo-nuclearAdvantage__crad-front>h4{
    font-size: 24px;
    line-height: 38px;
  }
  .pmfo-nuclearAdvantage__crad-behind{
    padding: 0 40px;
  }
  .pmfo-nuclearAdvantage__crad-behind>p{
    font-size: 16px;
    line-height: 28px;
  }
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>
  