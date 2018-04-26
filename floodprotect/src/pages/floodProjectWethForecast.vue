<template>
  <div class="f">
	  <top></top>
    <weatherForecast></weatherForecast>
  </div>
</template>

<script>
	 import top from "../components/header/top";
	 import weatherForecast from "../components/weatherForecast";
    
	export default {
	    components:{
	       top,weatherForecast
			},
			name: "weatherForecast",
	}
</script>

<style scoped>


</style>
