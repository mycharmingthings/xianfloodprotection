<template>
  <div>
	  <top2></top2>
    <weatherForecast></weatherForecast>
  </div>
</template>

<script>
	 import top2 from "../components/header/top2";
	 import weatherForecast from "../components/weatherForecast";
    
     import '../assets/css/top.css'
	export default {
	    components:{
	       top2
	    },
	    mounted:function(){
	    }
	}
</script>

<style lang="sass">
   
</style>