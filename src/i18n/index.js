/* i18n/index.js */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'

Vue.use(VueI18n)

const langFiles = require.context('./language', true, /\.js$/)
const regExp = /\.\/([^\\.\\/]+)\.([^\\.]+)$/
const messages = {}
const lang = {
  zh: zhCNLocale,
  zhTW: zhTWLocale,
  en: enLocale
}
// 默认语言
const loadLanguage = 'zh'

langFiles.keys().forEach(key => {
  const k = regExp.exec(key)[1]
  // 合并Element国际化配置
  messages[k] = Object.assign(langFiles(key).default, lang[k])
})

function getLanguage() {
  // 第一次进入页面或手动清除设置默认语言
  localStorage.getItem('lang') ? null : localStorage.setItem('lang', loadLanguage)
  let locale = localStorage.getItem('lang')
  if (!(locale in messages)) locale = loadLanguage

  document.getElementsByClassName("pmfo")[0].className = `pmfo pmfo-${locale}`
  document.getElementsByTagName("html")[0].setAttribute("lang",locale)

  return locale
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
})

export default i18n
