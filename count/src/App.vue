<template>
  <div>
    <button @click="changenum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="changenum('-')">-</button>
    <span>日期：{{date}}</span>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  computed:{
    ...mapState({
      num:state=>state.app.num
    }),
    ...mapGetters({
      date:'app/date'
    })
  },
  mounted(){
    console.log('123...',this.$store);
  },
  methods:{
    ...mapMutations({
      changenumSync:'app/changenum'
    }),
    ...mapActions({
      changeAsync:'app/changenumAsync'
    }),
    changenum(type){
      // this.$store.dispatch({
      //   type: 'app/changenumAsync',
      //   payload: type
      // }).then(res=>{
      //   console.log('操作完成了！');
      // })
      this.changenumSync({payload:type})
      // .then(res=>{
        console.log('操作完成了！')
      // })
    }
  }
}
</script>
<style scoped>

</style>
