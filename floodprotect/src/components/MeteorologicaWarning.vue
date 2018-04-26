<template>
    <div class="Mwarning">
        <div class="meteorologica">
           <br/>
            <h3 class="title">西安市气象台发布大风蓝色预警信号</h3>
            <p class="same">西安气象官方微博</p>
            <p class="time same">2017-05-22 11:37:48</p>
            西安市气象台{2017年5月22日10时55}分发布#大风蓝色预警信号#预计未来24小时内雁塔区、碑林区、莲湖区、新城区、未央区、灞桥区、周至、户县、长安、蓝田、高陵、临潼、阎良、西咸新区将受大风影响，预计上述地区平均风力可达6级以上，局地伴有短时强降水，请相关部门和相关区县注意防范。
             <br/> 
            防御指南:1.政府及相关部门按照职责做好防大风工作；<br/>
         
            2.关好门窗，加固围板、棚架、广告牌等易被风吹动的搭建物，妥善安置易受大风影响的室外物品，遮盖工地建筑物资；
            <br/> 
            3.行人注意尽量少骑自行车，刮风时不要在广告牌、临时搭建物等下面逗留；
            <br/>
            4.有关部门和单位注意森林等防火。
        </div>
    </div>
</template>

<script>
export default {
  name: 'MeteorologicaWarning',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Mwarning{
    width:100%;
    padding: 0 0.5rem;
    box-sizing:border-box;
  }
  .Mwarning .meteorologica{

  }
</style>
