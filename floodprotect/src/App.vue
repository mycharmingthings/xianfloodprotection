<template>
  <div id="app">
    <router-view @fatherTop="up"/>
  </div>
</template>
<script>
import top from "./components/header/top"
import MeteorologicaWarning from "./components/MeteorologicaWarning"
import weatherForecast from "./components/weatherForecast"
export default {
  name: 'App',
  data:function() {
    return {
        up:top
    }
  },
  components:{
    top,
    MeteorologicaWarning,
    weatherForecast
  },
  methods:{
    fatherTop:function (x) {
      console.log(x);
      this.up = x;
    }
  },
  mounted:function () {
    // $youziku.load("body", "255078fc3712429580f327bee1132112", "LiDeBiao-Xing3");
    // $youziku.draw();
  }
}
</script>


<style scoped >
#app{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
</style>
