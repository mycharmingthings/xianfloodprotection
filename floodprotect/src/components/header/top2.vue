<template>
  <div class="online">
    <ul class="table">
      <router-link to="/MeteorologicaWarning" class="a active"><li class="left">实时预警</li></router-link>
      <router-link to="/floodProjectWethForecast" class="a"><li class="right">洪水预警</li></router-link>
    </ul>
  </div>
</template>
<script>
import "../../assets/js/jquery-1.8.3.min.js"
export default {
  name: 'top',
  data () {
    return {
       msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function () {
    $(".left").click(function() {
      console.log(this);
      $(this).addClass('active');
    });

    $(".right").click(function() {
       console.log(this);
       $(this).addClass('active');
    });
   },
   
}
</script>
<style>
</style>
