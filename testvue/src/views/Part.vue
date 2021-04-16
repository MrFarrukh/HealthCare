<template>
  <div>
      <h1>Bo`limlar</h1>
      <div class="card" v-show="isPart">
          <p class="card-p">Yangi bo`limlarni ro`yhatga qo`shish</p>
          <input class="card-input" type="text" placeholder="Bo`lim nomi" v-model="part.name">
          <div class="btns">
            <button class="btn" @click="cancel">Bekor qilish</button>
            <button v-show="isActive" class="btn" @click="save">Saqlash</button>
            <button v-show="!isActive" class="btn" @click="add">Qo`shish</button>
          </div>
      </div>
      <table class="table" width="100%" cellspacing="0" border="1">
          <tr>
              <th>N</th>
              <th>Bo`lim Nomlari</th>
              <th>Tahrirlash</th>
          </tr>
          <tr v-for="(part,index) of parts" :key="index">
              <td>{{index+1}}</td>
              <td>{{part.name}}</td>
              <td><button class="doc-btn" @click="edit(index)"><img class="doc--img" src="../assets/qalam.png" alt=""></button><button class="doc-btn" @click="del(index)"><img class="doc-img" src="../assets/korzinka.png" alt=""></button></td>
          </tr>
      </table>
      <button class="isPart" @click="plus"><img src="../assets/doctor.png" alt=""></button>
  </div>
</template>

<script>

export default ({
    data() {
        return {
            isPart:false,
            isActive:false,
            part:{
                name:'',
            },
        }
    },
    methods:{
        plus(){
            this.isPart = !this.isPart
            this.isActive = false
        },
        add(){
            this.$store.dispatch('addPart',this.part)
            this.part = {
                name:'',
            }
            this.isPart = false
        },
        cancel(){
            this.isPart = false
        },
        edit(index){
            this.isPart = true
            this.isActive = true
            this.part = this.parts[index]
            this.part.id = this.parts[index].id
        },
        del(index){
            const obj = {
                index: index,
                item:this.parts[index]
            }
            this.$store.dispatch('delPart',obj)
        },
        save(){
            this.$store.dispatch('savePart',this.part)
            this.part = {
                name:''
            }
            this.isPart = false
        },
    },
    computed:{
        parts(){
            return this.$store.getters.getAllParts
        }
    },
    created(){
        this.$store.dispatch('parts')
    }
})
</script>
<style scoped>
    .isPart{
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
    .isPart:focus{
        outline: 0;
    }
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
    .isPart{
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
    .isPart:focus{
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
        border: 1px solid #000;
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
    .table{
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