<template>
  <div>
    <ul>
      <li class="p" @click="cityClick">
        <span>当前驾照签发城市</span>
        <span>{{city.join(' ')}}</span>
      </li>
       <li class="p" @click="costClick">
        <span>可补换驾照签发城市</span>
        <span></span>
      </li>
    </ul>
    <section>
      <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择签发城市"
          ref="cityPicker" @change="cityChange" @cancel="cityCancel" @confirm="cityConfirm"/>
      </van-popup>
    </section>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
  name: 'CityPicker',
  data(){
    return {
      // 控制当前驾照
      showCity: false,
      // 控制可补换驾照
      showCost: false,
      // 多列选择配置
      cityColumns: []
    }
  },
  created(){
    // 获取签发城市，然后更新选择配置
    this.getCityList().then(res=>{
      this.cityColumns = [
        {
          values: this.cityList.map(item=>item.name)
        },
        {
          values: this.cityList[0].list.map(item=>item.name)
        }
      ]
    })
  },
  computed: {
    ...mapState({
      cityList: state=>state.cityPicker.cityList,
      city: state=>state.cityPicker.city
    })
  },
  methods: {
    ...mapActions({
      getCityList: 'cityPicker/getCityList',
      getCostList: 'cityPicker/getCostList'
    }),
    ...mapMutations({
      updateState: 'cityPicker/updateState'
    }),
    // 显示选择器
    cityClick(){
      this.showCity = true;
    },
    // 当省份改变的时候更新城市数据
    cityChange(picker, values){
      // 获取当前省份的下标
      let index = this.cityList.findIndex(item=>item.name == values[0]);
      // 调用api更新城市数据
      this.$refs.cityPicker.setColumnValues(1, this.cityList[index].list.map(item=>item.name));
    },
    cityCancel(){
      this.showCity = false;
    },
    cityConfirm(values){
      console.log('values...', values);
      // 触发mutation更新城市数据
      this.updateState({city: values})
      this.cityCancel();
    },
    costClick(){
      if (!this.city.length){
        alert('请选择签发城市');
      }else{
        this.getCostList();
      }
    }
  }
}
</script>
