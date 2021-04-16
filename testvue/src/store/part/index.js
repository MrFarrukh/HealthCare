import axios from 'axios'

export default{
    state:{
        parts:[]
    },
    actions:{
        parts(context){
            axios.get('http://localhost:3000/parts')
                .then(response =>{
                    context.commit('allParts',response)
                })
        },
        addPart(context,payload){
            axios.post('http://localhost:3000/parts',payload)
                .then(response =>{
                    context.commit('pushPart',response)
                })
        },
        savePart(context,payload){
            let index = payload.index
            axios.put('http://localhost:3000/parts'+payload.id)
                .then(response =>{
                    response.data.index = index
                    context.commit('savedPart',response.data)
                })
        },
        delPart(context,payload){
            axios.delete('http://localhost:3000/parts/'+payload.item.id)
            context.commit('splicePart',payload.index)
        }
    },
    mutations:{
        allParts(state,payload){
            state.parts = payload.data
        },
        pushPart(state,payload){
            state.parts.push(payload.data)
        },
        savedPart(state,payload){
            let index = payload.index
            delete payload.index
            state.parts[index] = payload
        },
        splicePart(state,payload){
            state.parts.splice(payload,1)
        }
    },
    getters:{
        getAllParts(state){
            return state.parts
        }
    }
}