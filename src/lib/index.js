import easyCron from './easyCron.vue' // 导入组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'
const cron = {
    install (Vue, options) {
		Vue.use(iView)
		Vue.component(easyCron.name, easyCron)        
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(cron);
}
export default cron // 导出..
