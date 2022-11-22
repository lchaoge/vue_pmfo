<template>
  <el-footer class="pmfo__footer" height="auto">
    <div class="pmfo__footer-wrapper">
      <span class="i18n" name="common.footer.text1">{{$t('common.footer.text1')}}</span>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502051156" class="i18n" name="common.footer.text4">
        <img src="@/assets/images/footer__beian.png" />
        {{$t('common.footer.text4')}}
      </a>
      <span class="i18n" name="common.footer.text2">{{$t('common.footer.text2')}}</span>
      <span class="i18n" name="common.footer.text3">{{$t('common.footer.text3')}}</span>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'PmfoFooter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pmfo__footer{
  position: relative;
  background: #1A1A1A;
  padding: 10px;
}
.pmfo__footer-wrapper{
  height: 100%;
  text-align: center;
  font-size: 12px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pmfo__footer-wrapper span,.pmfo__footer-wrapper a{
  padding: 0 8px;
  color: #FFFFFF;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
}
</style>
