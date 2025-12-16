const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            emailArray: [],
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.emailArray.push(result.data.response)
            })
        }
    }
}).mount('#app')
