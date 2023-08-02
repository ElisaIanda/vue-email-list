Vue.createApp({

    data() {
        return {
            listEmail: [],
        };
    },
    methods: {

        emailGenerate(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.listEmail.push(email.data.response);
            });
        }
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            this.emailGenerate();
        }
    },
}).mount("#app");