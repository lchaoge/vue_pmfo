<template>
  <div class="pmfo-main">
    <div class="pmfo-teamMembersDetail">
      <div class="pmfo-teamMembersDetail__container">
        <div class="pmfo-teamMembersDetail__people" ref="people">
          <img class="pmfo-teamMembersDetail__people-image" :src="detail.image" />
          <div class="pmfo-teamMembersDetail__people-content">
            <div class="person-content">
              <div class="person-content-inside">
                <a class="section-link" @click="backspace">INVESTOR</a>
                <span class="header-name">{{detail.title}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="pmfo-teamMembersDetail__introduce" :style="{marginTop: `${marginTop}px`}">
          <div class="pmfo-teamMembersDetail__introduce-header">
            <div class="person-content">
              <div class="person-content-inside">
                <a class="section-link" @click="backspace">INVESTOR</a>
                <span class="header-name">{{detail.title}}</span>
              </div>
            </div>
          </div>
          <div class="pmfo-teamMembersDetail__introduce-body">
            <div class="article">
              <p>
                <strong>{{detail.title}}</strong>{{detail.content}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import image1 from '@/assets/avatar/01.jpg'
import image2 from '@/assets/avatar/02.jpg'
import image3 from '@/assets/avatar/03.jpg'
import image4 from '@/assets/avatar/04.jpg'
import image5 from '@/assets/avatar/05.jpg'
export default {
  name: 'PmfoTeamMembersDetail',
  props: {
  },
  data(){
    return {
      marginTop: 0,
      list:[
        {index: "1", title:"冯馨1",content:"，红杉中国董事总经理",image:image1},
        {index: "2", title:"冯馨2",content:"，红杉中国董事总经理",image:image2},
        {index: "3", title:"冯馨3",content:"，红杉中国董事总经理",image:image3},
        {index: "4", title:"冯馨4",content:"，红杉中国董事总经理",image:image4},
        {index: "5", title:"冯馨5",content:"，红杉中国董事总经理",image:image5},
      ],
      detail:{
        title: undefined,
        content: undefined,
        image: undefined
      }
    }
  },
  mounted() {debugger
    const {id} = this.$route.query
    this.detail = this.list.find(el=>el.index === id)
  },
  created(){
    this.$nextTick(() => {
      new this.$wow.WOW().init();
      setTimeout(() => {
        this.init()
      }, 100);
      window.addEventListener('resize', () => {
        this.init()
      })
    });
  },
  methods: {
    init(){
      this.marginTop = this.$refs.people ? this.$refs.people.offsetHeight - 72 : 0
    },
    backspace(){
      this.$router.push("/teamMembers")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pmfo-teamMembersDetail__people{
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 72px;
}
.pmfo-teamMembersDetail__people-image{
  transition: opacity .5s ease-out;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.pmfo-teamMembersDetail__people-content{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.pmfo-teamMembersDetail__people-content .person-content{
  top: 0;
  padding-top: 100px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  left: 8%;
  width: 35%;
  text-align: center;
}
.pmfo-teamMembersDetail__people-content .person-content .person-content-inside{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.pmfo-teamMembersDetail__people-content .person-content .person-content-inside .section-link{
  text-transform: uppercase;
  font-family: "Gotham A","Gotham B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 800;
  color: #2d292a;
  font-size: 2em;
  line-height: 1.1875em;
  outline: 0;
  transition: color .2s linear;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.pmfo-teamMembersDetail__people-content .person-content .person-content-inside .section-link:hover{
  color: #c7a47c;
}
.pmfo-teamMembersDetail__people-content .person-content .person-content-inside .section-link:hover::after {
  transform: scaleX(1);
  opacity: 1;
}
.pmfo-teamMembersDetail__people-content .person-content .person-content-inside .section-link:after {
  content: '';
  height: 2px;
  background-color: #c7a47c;
  width: auto;
  position: absolute;
  right: 0;
  bottom: -2px;
  left: 0;
  transform: scaleX(0);
  opacity: 0;
  transition: all .6s cubic-bezier(.165,.84,.44,1);
  transform-origin: 50% 50%;
}
.pmfo-teamMembersDetail__people-content .person-content .person-content-inside .header-name{
  font-family: "Gotham A","Gotham B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 700;
  color: #2d292a;
  font-size: 7em;
  line-height: 1.27273em;
  margin: 20px 0;
  display: block;
}
.pmfo-teamMembersDetail__introduce{
  position: relative;
  overflow: auto;
  background-color: #fff;
  padding-bottom: 0;
  overflow: hidden;
}
.pmfo-teamMembersDetail__introduce-header{
  display: none;
  text-align: center;
  padding: 55px 100px 80px;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
}
.pmfo-teamMembersDetail__introduce-header .section-link{
  text-transform: uppercase;
  font-family: "Gotham A","Gotham B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 800;
  color: #2d292a;
  font-size: 2em;
  line-height: 1.1875em;
  outline: 0;
  transition: color .2s linear;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.pmfo-teamMembersDetail__introduce-header .section-link:hover{
  color: #c7a47c;
}
.pmfo-teamMembersDetail__introduce-header .section-link:hover::after {
  transform: scaleX(1);
  opacity: 1;
}
.pmfo-teamMembersDetail__introduce-header .section-link:after {
  content: '';
  height: 2px;
  background-color: #c7a47c;
  width: auto;
  position: absolute;
  right: 0;
  bottom: -2px;
  left: 0;
  transform: scaleX(0);
  opacity: 0;
  transition: all .6s cubic-bezier(.165,.84,.44,1);
  transform-origin: 50% 50%;
}
.pmfo-teamMembersDetail__introduce-header .header-name{
  font-family: "Gotham A","Gotham B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 700;
  color: #2d292a;
  font-size: 7em;
  line-height: 1.27273em;
  margin: 20px 0;
  display: block;
}
.pmfo-teamMembersDetail__introduce-body{
  margin: 0 auto;
  padding: 100px;
  transition: opacity .5s ease-out;
}
.pmfo-teamMembersDetail__introduce-body .article{
  width: 66.666%;
}
.pmfo-teamMembersDetail__introduce-body .article p{
  font-family: "Gotham SSm A","Gotham SSm B",Helvetica,Arial,"Microsoft Yahei",SimSun;
  font-weight: 200;
  color: #2d292a;
  margin: 0;
  font-size: 20px;
  line-height: 32px;
}
/* 360px */
@media (max-width: 768px) {
  .pmfo-teamMembersDetail__people-content .person-content .person-content-inside{
    display: none;
  }
  .pmfo-teamMembersDetail__introduce-header{
    display: block;
    padding: 35px 0 40px;
  }
  .pmfo-teamMembersDetail__introduce-body{
    padding: 0px 40px 40px;
  }
  .pmfo-teamMembersDetail__introduce-header .section-link{
    font-size: 1em;
  }
  .pmfo-teamMembersDetail__introduce-header .header-name{
    font-size: 3em;
    margin: 10px 0;
  }
  .pmfo-teamMembersDetail__introduce-body .article{
    width: 100%;
  }
  .pmfo-teamMembersDetail__introduce-body .article p{
    font-size: 14px;
  }
}
/* 768px */
@media (min-width: 768px) and (max-width: 992px) {
  .pmfo-teamMembersDetail__people-content .person-content .person-content-inside{
    display: none;
  }
  .pmfo-teamMembersDetail__introduce-header{
    display: block;
    padding: 35px 100px 40px;
  }
  .pmfo-teamMembersDetail__introduce-body{
    padding: 60px 100px;
  }
  .pmfo-teamMembersDetail__introduce-body .article{
    width: 100%;
  }
}
/* 992 */
@media (min-width: 992px) and (max-width: 1200px) {
  .pmfo-teamMembersDetail__people-content .person-content .person-content-inside{
    display: none;
  }
  .pmfo-teamMembersDetail__introduce-header{
    display: block;
  }
}
/* 1200 */
@media (min-width: 1200px) and (max-width: 1440px) {
  
}
/* 1440 */
@media (min-width: 1440px) and (max-width: 1920px) {
  
}
/* 1920 */
@media (min-width: 1920px) {
}
</style>

