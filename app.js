const app = Vue.createApp({
data(){
    return{
        num1:'',
        num2:'',
        name:'Davies Villaflores',
        age:21,
        images:'https://images.app.goo.gl/GQ7JdEKxM2Mbfxiu5',
    };
},
methods:{
    setName(Data){
        this.name=Data.target.value;
    },
    after5(num){
        const totalage=this.age+num
        return totalage
    },
    myfav(num1,num2){
        const randomnum = Math.random
        (num1,num2)
        return randomnum
    }

}

});
app.mount('#Data');