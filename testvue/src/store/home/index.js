import axios from 'axios'

export default{
    state:{
        docs:[],
        bem:[]
    },
    actions:{
        doctors(context){
            axios.get('http://localhost:3000/doctors')
                .then(response => {
                   context.commit('allDoctors',response)
                })
        },
        bemors(context){
            axios.get('http://localhost:3000/bemors')
               .then(response =>{
                   context.commit('allBemors',response)
               })
        },
    },
    mutations:{
        allDoctors(state,payload){
            state.docs = payload.data
        },
        allBemors(state,payload){
            state.bem = payload.data
        },
    },
    getters:{
        getAllDoc(state){
            return state.docs
        },
        getAllBem(state){
            return state.bem
        },
        getLength(state){
            return state.docs.length
        },
        getLengthBem(state){
            return state.bem.length
        }
    }
}