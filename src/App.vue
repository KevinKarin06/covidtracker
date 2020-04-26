<template>
  <div id="app" class="container">
    <BlockUI v-show="isLoading" :message="msg" :url="url"></BlockUI>
    <nav class="navbar navbar-dark bg-primary">
      <span class="navbar-brand mb-0 h1">COVID-19</span>
       <span class="navbar-text text-white">
      &copy; Powered by Nkwelle Kevin Karin
     </span>
    </nav>
    <div class="row m-3 p-2 justify-content-center align-items-center ">
      <div class="card text-white border-primary text-secondary mb-3 mx-2 col-md-4 col-sm-12 text-center"
        style="max-width: 18rem;">
        <div class="card-header">World Wide</div>
        <div class="card-body">
          <h5 class="card-title">Total Cases</h5>
          <p class="card-text">{{totalConfirmed}}</p>
        </div>
      </div>
      <div class="card text-white border-primary text-info mb-3 mx-2 col-md-4 col-sm-12 text-center"
        style="max-width: 18rem;">
        <div class="card-header text-size-5">World Wide</div>
        <div class="card-body">
          <h5 class="card-title">Recovered</h5>
          <p class="card-text">{{totalRecovered}}</p>
        </div>
      </div>
      <div class="card text-white border-primary text-danger mb-3 mx-2 col-md-4 col-sm-12 text-center"
        style="max-width: 18rem;">
        <div class="card-header">World Wide</div>
        <div class="card-body">
          <h5 class="card-title">Deaths</h5>
          <p class="card-text">{{totalDeaths}}</p>
        </div>

      </div>

    </div>
    <div class="row m-2 justify-content-center">
      <div id="carouselExampleSlidesOnly" class="carousel slide col-md-6 mb-2" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./assets/images/prev.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="./assets/images/prev1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="./assets/images/prev2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="./assets/images/prev3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img class="img-fluid" src="./assets/images/sym.jpg" alt="Symtoms">
      </div>
    </div>
<main-component v-on:dataLoaded="setValues"></main-component>
    </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import loadingImage from './assets/images/loader2.gif'
export default {
  name: 'App',
  data(){
    return{
      totalConfirmed:0,
      totalDeaths:0,
      totalRecovered:0,
      isLoading: true,
      msg:'Please wait while the app updates data',
      url: loadingImage
    }
  },
  components:{
    MainComponent,
  },
 mounted(){
  console.log('App Component Mounted')
 },
 methods:{
   setValues(val){
     this.totalConfirmed = val.confirmed
     this.totalDeaths = val.deaths
     this.totalRecovered = val.recovered
     this.isLoading = false
     console.log(val)
   },
   formatValues(){
    
     }
   }
 }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
