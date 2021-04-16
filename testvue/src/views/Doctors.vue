<template>
  <div>
      <div class="card" v-show="isDoctor">
          <p class="card-p">Yangi shifokorlarni ro`yhatga qo`shish</p>
          <input class="card-input" type="text" placeholder="Ism-familya" v-model="doc.name">
          <input class="card-input" type="text" placeholder="Email" v-model="doc.mail" >
          <input class="card-input" type="text" placeholder="Mutaxassisligi" v-model="doc.spec" >
          <select class="card-input" name="" id="" v-model="doc.dep">
              <option  :value="part.name" v-for="part of parts" :key="part.id">{{part.name}}</option>
          </select>
          <div class="days">
              <input type="checkbox" id="day1" value="Du" v-model="doc.date">
              <label for="day1">Du</label>
              <input type="checkbox" id="day2" value="Se" v-model="doc.date">
              <label for="day2">Se</label>
              <input type="checkbox" id="day3" value="Chor" v-model="doc.date">
              <label for="day3">Chor</label>
              <input type="checkbox" id="day4" value="Pay" v-model="doc.date">
              <label for="day4">Pay</label>
              <input type="checkbox" id="day5" value="Juma" v-model="doc.date">
              <label for="day5">Ju</label>
              <input type="checkbox" id="day6" value="Shan" v-model="doc.date">
              <label for="day6">Shan</label>
          </div>
          <div class="btns">
            <button class="btn" @click="cancel">Bekor qilish</button>
            <button v-show="isActive" class="btn" @click="save">Saqlash</button>
            <button v-show="!isActive" class="btn" @click="add">Qo`shish</button>
          </div>
      </div>
      <h1>Shifokorlar</h1>
      <table width="100%" cellspacing="0" border="1">
          <tr>
              <th>N</th>
              <th>Ism-Familya</th>
              <th>Email</th>
              <th>Mutaxassisligi</th>
              <th>Bo`lim</th>
              <th>Qabul kunlari</th>
              <th>Tahrirlash</th>
          </tr>
          <tr v-for="(doctor,index) of doctors" :key="index">
              <td>{{index+1}}</td>
              <td>{{doctor.name}}</td>
              <td>{{doctor.mail}}</td>
              <td>{{doctor.spec}}</td>
              <td>{{doctor.dep}}</td>
              <td>{{doctor.date.toString()}}</td>
              <td><button class="doc-btn" @click="edit(index)"><img class="doc--img" src="../assets/qalam.png" alt=""></button><button class="doc-btn" @click="del(index)"><img class="doc-img" src="../assets/korzinka.png" alt=""></button></td>
          </tr>
      </table>
      <button class="isDoctor" @click="plus"><img src="../assets/doctor.png" alt=""></button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isDoctor:false,
            isActive:false,
            doc:{
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:[]
            },
        }
    },
    methods:{
        plus(){
            this.isDoctor = !this.isDoctor
            this.isActive = false
        },
        add(){
            this.doc.date = this.doc.date.toString()
            this.$store.dispatch('addDoctor',this.doc)
            this.doc = {
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:[]
            }
            this.isDoctor = false
        },
        cancel(){
            this.isDoctor = false
        },
        edit(index){
            this.isDoctor = true
            this.isActive = true
            this.doc = this.doctors[index]
            this.doc.id = this.doctors[index].id
        },
        del(index){
            const obj = {
                index:index,
                item:this.doctors[index]
            }
            this.$store.dispatch('delDoctor',obj)
        },
        save(){
            this.$store.dispatch('saveDoctor',this.doc)
            this.doc = {
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:[]
            }
            this.isDoctor = false
        }
    },
    computed:{
        doctors(){
            return this.$store.getters.getAllDoctors
        },
        parts(){
            return this.$store.getters.getAllParts
        }
    },
    created(){
        this.$store.dispatch('part')
        this.$store.dispatch('doctors')
    }
}
</script>

<style scoped>
    /* @font-face {
        font-family: 'l';
        src: url(./fonts/Lato-Regular.ttf);
    } */
    .doc-btn:focus{
        outline: unset;
    }
    .doc--img{
        width: 14px;
        margin-left: 7px;
        margin-right: 7px;
    }
    .doc-img{
        margin-left: 7px;
        margin-right: 7px;
    }
    .doc-img:focus{
        outline: 0;
    }
    .doc--img:focus{
        outline: 0;
    }
    .card{
        width: 400px;
        background-color: #f5f5f5;
        margin: auto;
        position: fixed;
        margin-left: 497px;
        margin-top: 70px;
        border-radius: 14px;
        box-shadow: 0 0 13px 2px #3253a44a;
        margin-top: 150px;
    }
    .isDoctor{
        border-radius: 50%;
        width: 55px;
        border: 0;
        height: 55px;
        background-color: #336CFB;
        right: 3%;
        top: 85%;
        bottom: 0%;
        position: fixed;
        cursor: pointer;
    }
    .isDoctor:focus{
        outline: 0;
    }
    .card-p{
        padding: 27px 48px 4px 48px;
        font-family: 'l';
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
    }
    .card-input{
        height: 27px;
        width: 285px;
        display: flex;
        padding-left: 8px;
        margin: 18px 58px;
        border-radius: 8px;
        border: 0;
        background-color: #fff;
    }
    .card-input:focus{
        outline: 0;
    }
    .card-p{
        text-align: center;
    }
    .days{
        text-align: center;
        padding: 2px;
        margin-bottom: 7px;
    }
    .days label{
        margin-right: 5px;
    }
    .days input{
        border-radius: 50%;
    }
    .btns{
        display: flex;
        justify-content: center;
        padding-bottom: 40px;
    }
    .btn{
        width: 130px;
        height: 32px;
        border: 0;
        background-color: #10de10;
        border-radius: 8px;
    }
    .btn:focus{
        outline: 0;
    }

    .btn:first-child{
        background-color: red;
        margin-right: 5px;
    }
    .btn:last-child{
        margin-left: 5px;
    }
    /* asdasdasdasdasdasdasd */
    table{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border: 0;
        box-shadow: 0 0 11px 0px #00000042;
    }
    th{
        height: 50px;
        text-align: left;
        border: 0;
    }
    th:first-child{
        border-top-left-radius: 20px;
        padding-left: 10px;
    }
    th:last-child{
        border-top-right-radius: 20px;
    }
    td:first-child{
        padding-left: 10px;
    }
    h1{
        font-size: 31px;
        margin: 12px;
    }
    td{
        height: 40px;
        border: 0;
        border-top: 1px solid #00000042;
    }
</style>
