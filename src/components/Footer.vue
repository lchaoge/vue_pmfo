<template>
  <el-footer class="pmfo__footer" height="auto">
    <div class="pmfo__footer-wrapper">
      <span class="i18n" name="common.footer.text1">{{$t('common.footer.text1')}}</span>
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
}
.pmfo__footer-wrapper span{
  padding: 0 8px;
}
</style>
