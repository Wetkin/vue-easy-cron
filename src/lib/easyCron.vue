<template>
  <div class="main-content">
    <div class="card-content">
      <div class="form-list">
       
        <Form :model="formData" :rules="formDataValidator" :label-width="80">
          
          <FormItem label="原始组件(700px)" prop="cronValue2">
            <EasyCron style="width: 700px;"  v-model="formData.cronValue2" :exeStartTime="exeStartTime"></EasyCron>
          </FormItem>
       
       
       
        </Form>
      </div>
      <div class="footer-info">

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import EasyCron from './easy-cron'
import InputCron from './easy-cron/input-cron'
import CronValidator from './easy-cron/validator'


export default {
  name: 'easyCom',
  data () {
    return {
      msg: 'Cron表达式测试页面',
      exeStartTime: '2015-09-02 12:23:10',
      formData: {
        url: 'http://www.easysb.cn',
        qq: '34538980',
        cronValue1: '',
        cronValue2: '4 1/2 5 7-8 1 ?',
        cronValue3: '1/2 5 7-8 1 ?',
        cronValue4: '1 2-4 3/5 3/12 4,5,8 ? *'
      },
      formDataValidator: {
        cronValue1: [
          { validator: CronValidator }
        ],
        cronValue2: [
          { validator: CronValidator }
        ],
        cronValue3: [
          { validator: CronValidator }
        ],
        cronValue4: [
          { validator: CronValidator }
        ]
      }
    }
  },
  methods: {
    remote (val, time, cb) {
      const msg = `remote called: ${val} ${time}`
      console.info(msg)
      setTimeout(() => {
        // get result for e via http...
        const result = msg
        // ...
        // callback
        cb(result)
      }, 200)
    }
  },
  components: {
    EasyCron,
    InputCron,
  },
  created () {
    // console.info(aaa)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
h1, h2 {
  font-weight: normal;
}
.main-content {
  // background-color: #E0E0E0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.card-content {
  flex-basis: 600px;
}

.form-list {
  margin-top: 20px;
}
</style>
