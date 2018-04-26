<template>
  <div class="online">
    <ul class="table">
      <router-link to="/" class="a active"><li class="left">重点河道水情</li></router-link>
      <router-link to="/floodProjectWethForecast" class="a"><li class="center">重点水库水情</li></router-link>
      <router-link to="/floodProjectWethForecast" class="a"><li class="right">重点水库水情</li></router-link>
    </ul>
  </div>
</template>
<script>
import "../../assets/js/jquery-1.8.3.min.js"
export default {
  name: 'top4',
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
