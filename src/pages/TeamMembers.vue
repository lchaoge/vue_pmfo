<template>
  <div class="pmfo-teamMembers">
    <div class="pmfo-teamMembers__introduce">
      <div class="pmfo-teamMembers__introduce-detailbox">
        <div class="pmfo-teamMembers__introduce-detail">
          <h5 class="pmfo-teamMembers__introduce-detail-username wow slideInLeft" data-wow-duration="1s">{{$t(`teamMembers.introduce.card${activeIndex}.title`)}}</h5>
          <div class="pmfo-teamMembers__introduce-detail-describe">
            <div class="wow slideInLeft" data-wow-duration="1.1s">{{$t(`teamMembers.introduce.card${activeIndex}.content.text1`)}}</div>
            <div class="wow slideInLeft" data-wow-duration="1.2s">{{$t(`teamMembers.introduce.card${activeIndex}.content.text2`)}}</div> 
            <div class="wow slideInLeft" data-wow-duration="1.3s">{{$t(`teamMembers.introduce.card${activeIndex}.content.text3`)}}</div>
            <div class="wow slideInLeft" data-wow-duration="1.4s">{{$t(`teamMembers.introduce.card${activeIndex}.content.text4`)}}</div>
          </div>
        </div>
        <div class="pmfo-teamMembers__introduce-avatar wow fadeIn" data-wow-duration="1s" :style="{background: `url(./avatar/${activeIndex}.png) 0% 0% / cover`}"></div>
      </div>
      <div class="pmfo-teamMembers__introduce-list">
        <div class="pmfo-teamMembers__introduce-card" :class="[activeIndex === 1 ? 'pmfo-teamMembers__introduce-card-active' : '']" @mouseenter="cardHover(1)">
          <div class="pmfo-teamMembers__introduce-card-front">
            <div class="img" style="background: url(./avatar/1.png);background-size: cover;"></div>
          </div>
          <div class="pmfo-teamMembers__introduce-card-behind">
            <h4 class="pmfo-teamMembers__introduce-card-behind-title">{{$t('teamMembers.introduce.card1.title')}}</h4>
            <div class="pmfo-teamMembers__introduce-card-behind-content">
              <div>{{$t('teamMembers.introduce.card1.content.text1')}}</div>
              <div>{{$t('teamMembers.introduce.card1.content.text2')}}</div> 
              <div>{{$t('teamMembers.introduce.card1.content.text3')}}</div>
              <div>{{$t('teamMembers.introduce.card1.content.text4')}}</div>
            </div>
          </div>
        </div>
       <div class="pmfo-teamMembers__introduce-card" :class="[activeIndex === 2 ? 'pmfo-teamMembers__introduce-card-active' : '']" @mouseenter="cardHover(2)">
          <div class="pmfo-teamMembers__introduce-card-front">
            <div class="img" style="background: url(./avatar/2.png);background-size: cover;"></div>
          </div>
          <div class="pmfo-teamMembers__introduce-card-behind">
            <h4 class="pmfo-teamMembers__introduce-card-behind-title">{{$t('teamMembers.introduce.card2.title')}}</h4>
            <div class="pmfo-teamMembers__introduce-card-behind-content">
              <div>{{$t('teamMembers.introduce.card2.content.text1')}}</div>
            </div>
          </div>
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
      activeIndex: 1
    }
  },
  mounted() {
    this.$nextTick(() => {
      new this.$wow.WOW().init();
    });
  },
  methods: {
    cardHover(index){
      this.activeIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pmfo-teamMembers__introduce-detailbox{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: 935px;
  overflow: hidden;
}
.pmfo-teamMembers__introduce-detail{
  position: relative;
  z-index: 20;
  width: 35%;
  height: 100%;
  background: #C7A47C;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.pmfo-teamMembers__introduce-detail-username{
  margin: 0;
  position: relative;
  padding-left: 158px;
  font-size: 36px;
  line-height: 63px;
  color: #FFFFFF;
}
.pmfo-teamMembers__introduce-detail-username::before{
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -8px;
  width: 120px;
  height: 16px;
  background: #9D2626;
  content: " ";
}
.pmfo-teamMembers__introduce-detail-briefIntroduction{
  width: 664px;
  margin-left: 158px;
  padding: 70px 0 0 0;
  font-size: 20px;
  font-weight: 200;
  line-height: 40px;
  color: #252525;
}
.pmfo-teamMembers__introduce-detail-describe{
  width: 664px;
  height: 500px;
  margin: 60px 0 0 158px;
  font-size: 20px;
  font-weight: lighter;
  line-height: 40px;
  color: #252525;
}
.pmfo-teamMembers__introduce-detail-describe>div{
  font-weight: lighter;
}
.pmfo-teamMembers__introduce-avatar{
  position: relative;
  z-index: 10;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  height: 100%;
}


.pmfo-teamMembers__introduce-list{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.pmfo-teamMembers__introduce-card{
  position: relative;
  width: 25%;
  height: 430px;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: 1.3s ease;
  -o-transition: 1.3s ease;
  transition: 1.3s ease;
}
.pmfo-teamMembers__introduce-card-active .pmfo-teamMembers__introduce-card-behind,.pmfo-teamMembers__introduce-card:hover .pmfo-teamMembers__introduce-card-behind{
  display: block;
  
}
.pmfo-teamMembers__introduce-card-front{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  -webkit-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;
}
.pmfo-teamMembers__introduce-card-front>.img{
  display: block;
  width: 100%;
  height: 100%;
}

.pmfo-teamMembers__introduce-card-behind{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: rgba(29,40,58,0.79);
  display: none;
  -webkit-transition: .3s ease;
  -o-transition: .3s ease;
  transition: .3s ease;
}
.pmfo-teamMembers__introduce-card-behind-title{
  position: relative;
  margin: 70px 0 0;
  padding: 32px 0 0 45px;
  font-size: 36px;
  line-height: 63px;
  color: #FFFFFF;
}
.pmfo-teamMembers__introduce-card-behind-title::before{
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  display: block;
  width: 120px;
  height: 16px;
  background: #9D2626;
}
.pmfo-teamMembers__introduce-card-behind-content{
  padding: 48px 46px 0;
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  color: #FFFFFF;
  height: 200px;
  overflow: hidden;
  box-sizing: border-box;
}
.pmfo-teamMembers__introduce-card-behind-content>p{
  margin: 0;
}

/* 360px */
@media (max-width: 768px) {
  .pmfo-teamMembers__introduce-detailbox{
    height: 500px;
  }
  .pmfo-teamMembers__introduce-detail{
    width: 20%;
  }
  .pmfo-teamMembers__introduce-detail-username{
    padding-left: 30px;
    font-size: 20px;
    line-height: 1.5;
    width: 200px;
  }
  .pmfo-teamMembers__introduce-detail-username::before{
    margin-top: -5px;
    width: 20px;
    height: 10px;
  }
  .pmfo-teamMembers__introduce-detail-describe{
    width: 200px;
    height: 360px;
    margin: 10px 0 0 30px;
    font-size: 12px;
    line-height: 1.2;
  }
  .pmfo-teamMembers__introduce-card{
    width: 50%;
    height: 180px;
  }
  .pmfo-teamMembers__introduce-card-behind-title{
    position: relative;
    margin: 10px 0 0;
    padding: 10px 0 0 10px;
    font-size: 20px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__introduce-card-behind-title::before{
    width: 60px;
    height: 10px;
  }
  .pmfo-teamMembers__introduce-card-behind-content{
    padding: 10px;
    font-size: 12px;
    line-height: 1.4;
    height: 120px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-teamMembers__introduce-detailbox{
    height: 600px;
  }
  .pmfo-teamMembers__introduce-detail-username{
    padding-left: 60px;
    font-size: 30px;
    line-height: 1.5;
    width: 300px;
  }
  .pmfo-teamMembers__introduce-detail-username::before{
    margin-top: -5px;
    width: 40px;
    height: 10px;
  }
  .pmfo-teamMembers__introduce-detail-describe{
    width: 300px;
    height: 400px;
    margin: 20px 0 0 60px;
    font-size: 16px;
    line-height: 1.2;
  }
  .pmfo-teamMembers__introduce-card{
    width: 50%;
    height: 376px;
  }
  .pmfo-teamMembers__introduce-card-behind-title{
    position: relative;
    margin: 20px 0 0;
    padding: 20px 0 0 20px;
    font-size: 26px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__introduce-card-behind-title::before{
    width: 80px;
    height: 10px;
  }
  .pmfo-teamMembers__introduce-card-behind-content{
    padding: 20px;
    font-size: 14px;
    line-height: 1.4;
    height: 158px;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-teamMembers__introduce-detailbox{
    height: 600px;
  }
  .pmfo-teamMembers__introduce-detail-username{
    padding-left: 100px;
    font-size: 30px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__introduce-detail-username::before{
    margin-top: -5px;
    width: 80px;
    height: 10px;
  }
  .pmfo-teamMembers__introduce-detail-describe{
    width: 400px;
    height: 360px;
    margin: 20px 0 0 100px;
    font-size: 16px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__introduce-card{
    height: 244px;
  }
  .pmfo-teamMembers__introduce-card-behind-title{
    position: relative;
    margin: 20px 0 0;
    padding: 20px 0 0 20px;
    font-size: 26px;
    line-height: 1.5;
  }
  .pmfo-teamMembers__introduce-card-behind-title::before{
    width: 80px;
    height: 10px;
  }
  .pmfo-teamMembers__introduce-card-behind-content{
    padding: 20px;
    font-size: 14px;
    line-height: 1.4;
    height: 158px;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  .pmfo-teamMembers__introduce-detailbox{
    height: 700px;
    overflow: hidden;
  }
  .pmfo-teamMembers__introduce-detail-username{
    padding-left: 60px;
    font-size: 30px;
  }
  .pmfo-teamMembers__introduce-detail-username::before{
    width: 40px;
  }
  .pmfo-teamMembers__introduce-detail-describe{
    width: 420px;
    margin-left: 60px;
    padding: 30px 0 0 0;
    font-size: 16px;
    line-height: 1.6;
  }
  .pmfo-teamMembers__introduce-card{
    height: 300px;
  }
  .pmfo-teamMembers__introduce-card-behind-title{
    position: relative;
    margin: 30px 0 0;
    padding: 30px 0 0 30px;
    font-size: 30px;
    line-height: 1;
  }
  .pmfo-teamMembers__introduce-card-behind-title::before{
    width: 60px;
  }
  .pmfo-teamMembers__introduce-card-behind-content{
    padding: 30px 30px 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    height: 180px;
  }
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  .pmfo-teamMembers__introduce-detail-username{
    padding-left: 120px;
    font-size: 30px;
  }
  .pmfo-teamMembers__introduce-detail-username::before{
    width: 90px;
  }
  .pmfo-teamMembers__introduce-detail-describe{
    width: 660px;
    margin-left: 120px;
    padding: 40px 0 0 0;
    font-size: 16px;
    line-height: 32px;
    color: #252525;
  }
  .pmfo-teamMembers__introduce-card{
    height: 355px;
  }
  .pmfo-teamMembers__introduce-card-behind-title{
    margin: 50px 0 0;
    padding: 30px 0 0 30px;
    font-size: 30px;
    line-height: 1;
  }
  .pmfo-teamMembers__introduce-card-behind-content{
    padding: 16px 30px 0;
    font-size: 16px;
    line-height: 26px;
  }
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>

