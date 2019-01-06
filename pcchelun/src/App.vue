<template>
    <div class="wrap">
        <div class="header">
            <div class="head wraper">
                <img src="./assets/logo.png" alt="">
                <ul>
                    <li>产品</li>
                    <li>关于我们</li>
                    <li>大数据</li>
                    <li>新闻</li>
                    <li>招聘</li>
                    <li>商城</li>
                    <li>登录/注册</li>
                </ul>
                <i class="icon"><img src="./assets/列表.png" alt=""></i>
            </div>
        </div>
        <div class="banner">
            <img src="./assets/banner.png" alt="">
        </div>
        <div class="tap">
            <div class="taplist wraper">
                <ul>
                    <li>分析评论</li>
                    <li>趋势榜单</li>
                    <li>研究报告</li>
                </ul>
            </div>
        </div>
        <div class="section">
            <div class="con wraper">
                <div class="one">
                    <h3><i></i><span>SUV</span><em>TOP10</em></h3>
                    <div class="bot">
                        <div id="myChart" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart2" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart3" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart4" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart5" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart6" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart7" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="bot">
                        <div id="myChart8" :style="{width: '670px', height: '421px'}"></div>
                        <div class="oneright">
                            <h5><i></i><span>关注指数排行榜</span></h5>
                            <ul>
                                <li v-for="(v,index) in listr" :key="index">
                                    <i>{{v.num}}</i>
                                    <h6>{{v.tit}}</h6>
                                    <span>{{v.price}}</span>
                                </li>  
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        listr:[
            {
                num:1,
                tit:"哈弗H6",
                price:"138,279"
            },
            {
                num:2,
                tit:"本田CR-V",
                price:"70,198"
            },
            {
                num:3,
                tit:"汉兰达",
                price:"70,131"
            },
            {
                num:4,
                tit:"途观",
                price:"66,711"
            },
            {
                num:5,
                tit:"缤智",
                price:"57,266"
            },
            {
                num:6,
                tit:"本田XR-V",
                price:"53,937"
            },
            {
                num:7,
                tit:"冠道",
                price:"50,745"
            },
            {
                num:8,
                tit:"吉利博越",
                price:"48,990"
            },
            {
                num:9,
                tit:"奔驰GLA级",
                price:"48,871"
            },
            {
                num:10,
                tit:"全新途胜",
                price:"45,529"
            }
        ]
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
        let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
        let myChart6 = this.$echarts.init(document.getElementById('myChart6'))
        let myChart7 = this.$echarts.init(document.getElementById('myChart7'))
        let myChart8 = this.$echarts.init(document.getElementById('myChart8'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart2.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart3.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart4.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart5.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart6.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart7.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
        myChart8.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
    }
  }
}
</script>

<style lang="scss">
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.wrap{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.wraper{
    width: 1000px;
    margin: 0 auto;
}
.header{
    width: 100%;
    height: 111px;
    background: #577efe;
    line-height: 111px;
    .head{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 120px;
            height: 39px;
        }
        ul{
            padding: 0 30px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                padding: 0 10px 0;
                height: 40px;
                line-height: 40px;
                color: #333;
                font-size: 20px;
            }
            li:last-child{
                font-size: 15px;
            }
        }
        .head.icon{
            display: none;
        }
    }
}
.banner{
    width: 100%;
    img{
        width: 100%;
        height: 450px;
    }
}
.tap{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
    line-height: 70px;
    .taplist{
        ul{
          display: flex;
          align-items: center;
          justify-content: space-between;
            margin: 0;
            li{
                margin-right: 140px;
            }
            li:nth-child(2){
                border-bottom: 3px solid skyblue;
            }
        }
    }
}
.section{
    width: 100%;
    .con{
        .one{
            h3{
                color: #ccc;
                display: flex;
                align-items: center;
                padding: 30px 0;
                box-sizing: border-box;
                i{
                    display:inline-block;
                    width: 6px;
                    height: 20px;
                    background: skyblue;
                    margin-right: 5px;
                }
                em{
                    margin-left: 5px;
                    font-style: normal;
                }
            }
            .bot{
                display: flex;
                align-items: center;
                margin-top: 20px;
                .oneright{
                    width: 285px;
                    height: 420px;
                    margin-left: 80px;
                    background: #eeee;
                    h5{
                        padding: 10px 10px;
                        box-sizing: border-box;
                    }
                    ul{
                        display: flex;
                        flex-direction: column;
                        li{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-top: 16px;
                            i{
                                width: 20px;
                                height: 20px;
                                font-style: normal;
                                text-align: center;
                                color: #fff;
                                background: #ccc;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .head{
            width: 100%;
            display: flex;
            align-items: center;
            ul{display:none;}
            background: #577efe;
            .icon{
            display:block;
            width: 50px;
            height:40px;
            line-height: 40px;
            img{
                width: 100%;
                height: 100%;   
            }
            }
            background: #fff;
    }
}
@media screen and (min-width: 1000px) {
    .head{
      ul{display:block;}
      .icon{
      display:none;
      }
    }
}
</style>
