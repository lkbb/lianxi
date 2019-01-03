<template>
  <div>
    <Upload/>
    <section class="list">
      <li class="p" @click="typeClick">
        <span>服务类型</span>
        <span>{{form.type}}></span>
      </li>
      <CityPicker/>
      <li class="p">
        <span>服务费</span>
        <span class="text">￥399</span>
      </li>
    </section>
    <section class="popup">
      <van-popup v-model="showType" position="bottom" overlay>
        <van-picker :columns="typeArray" show-toolbar title="服务类型" @cancel="cancelType" @confirm="confirmType"/>
      </van-popup>
    </section>
  </div>
</template>

<script>
import Upload from '@/components/Upload';
import CityPicker from '@/components/CityPicker';
export default {
  data(){
    return {
      showType: false,
      typeArray: ["补驾照", "换驾照"],
      form: {
        type: '补驾照'
      }
    }
  },
  components: {
    Upload,
    CityPicker
  },
  methods: {
    typeClick(){
      this.showType = true;
    },
    cancelType(){
      this.showType = false;
    },
    confirmType(value){
      this.form.type = value;
      this.cancelType();
    }
  },
  mounted(){
    fetch('/api/ExchangeJiaZhao/getCostList?order_type=1&city_id=110100000000&province_id=110')
  }
}
</script>
