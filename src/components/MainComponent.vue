<template>
<div>
  <div class="round my-5 input-group input-group-lg">
      <input class="form-control rounded-pill border border-5 border-secondary" v-model="search" type="text" placeholder="Example Cameroon">
  </div>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredData" :key="item.id">
                    <td>{{item.Country}}</td>
                    <td>{{item.TotalConfirmed}}</td>
                    <td>{{item.TotalDeaths}}</td>
                    <td>{{item.TotalRecovered}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import axios from 'axios'
    export default {
        data:function(){
            return{
     data:[],
     search:''
            }
        },
        computed:{
         filteredData: function () {
             let result = this.data

             if (!this.search)
                 return result

             let search = this.search.toLowerCase()
          
             return result.filter(function(val){
                return val.Country.toLowerCase().includes(search)
             })
         },
        totalCases: function (){
            let result = this.data
            return result.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.TotalConfirmed;
            }, 0)
        },
        totalDeaths: function (){
     let result = this.data
            return result.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.TotalDeaths;
            }, 0)
        },
        totalRecoveries: function (){
    let result = this.data
            return result.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.TotalRecovered;
            }, 0)
        }
        },
        
        mounted() {
        console.log('Component mounted.')
        axios.get('https://api.covid19api.com/summary', {
                params: {

                }
            })
            .then(response => [
            this.data = response.data.Countries,
            this.$emit('dataLoaded',{
                deaths: this.totalDeaths,
                recovered: this.totalRecoveries,
                confirmed: this.totalCases
            }),
            console.log(response)])

            .catch(function (error) {
                console.log(error);
            });

        }
    }
</script>
