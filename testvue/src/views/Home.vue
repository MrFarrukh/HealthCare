<template>
  <div>
    <div class="blocks">
        <div class="row">
          <div class="block">
            <div class="block-img">
              <img src="../assets/medicine.png" alt="">
            </div>
            <div class="block-text">
              <h4>Shifokorlar</h4>
              <p>{{allLength}}</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/bemor.png" alt="">
            </div>
            <div class="block-text">
              <h4>Bemorlar</h4>
              <p>{{allLengthBem}}</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/nur.png" alt="">
            </div>
            <div class="block-text">
              <h4>Xonalar</h4>
              <p>217</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/bank.png" alt="">
            </div>
            <div class="block-text">
              <h4>Budjet</h4>
              <p>217</p>
            </div>
          </div>
        </div>
    </div> 
    <!-- dsddsssssssssssssss -->
    <v-card>
        <h1 class="card-h1">Shifokorlar</h1>
      <v-card-title>
        <v-text-field
          v-model="search_d"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="docs"
        :search="search_d"
      ></v-data-table>
    </v-card>
    <v-card class="v-card">
        <h1 class="card-h1">Bemorlar</h1>
      <v-card-title>
        <v-text-field
          v-model="search_b"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="bemors"
        :items="bem"
        :search="search_b"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Home',
   data () {
      return {
        search_d: '',
        headers: [
          { text: 'Ism-Familyasi', filterable: true, value: 'name' },
          { text: 'Email', filterable: true, value: 'mail' },
          { text: 'Mutaxassisligi', filterable: true, value: 'spec' },
          { text: 'Bo`lim', filterable: true, value: 'dep' },
          { text: 'Ish kunlari', filterable: true, value: 'date' },
        ],
        search_b: '',
        bemors: [
          { text: 'Rasmi', filterable: false, value: 'img' },
          { text: 'Ism-Familyasi', filterable: true, value: 'name' },
          { text: 'Email', filterable: true, value: 'mail' },
          { text: 'Nomeri', filterable: true, value: 'phone' },
          { text: 'Qaysi Doktorga', filterable: true, value: 'wDoc' },
          { text: 'Sabab', filterable: true, value: 'why' },
        ],
      }
    },
    computed:{
      docs(){
            return this.$store.getters.getAllDoc
        },
      allLength(){
        return this.$store.getters.getLength
      },
      bem(){
        return this.$store.getters.getAllBem
      },
      allLengthBem(){
        return this.$store.getters.getLengthBem
      }
    },
    created(){
        this.$store.dispatch('doctors')
        this.$store.dispatch('bemors')
    },
    components: {
    }
}
</script>
<style scoped>
  .v-card{
    margin-top: 20px;
  }
  .card-h1{
      padding-top: 10px;
      padding-left: 17px;
  }
  .block {
      width: 272px;
      height: 88px;
      display: flex;
      background-color: #fff;
      border-radius: 10px;
      margin: 25px 10px;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
  .block-img img {
    padding: 26px 28px 0px 30px;
  }
 
  .block-text p {
    margin-top: 4px;
    font-family: 'lato';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #336CFB;
  }
 
  .block-text h4 {
    font-weight: normal;
    margin-top: 22px;
    font-family: 'lato';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #25282B;
  }
  .row{
      display: flex;
      justify-content: space-between;
  }
</style>
