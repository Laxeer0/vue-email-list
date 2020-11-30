var root = new Vue({
    el: '#root',
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        email: [],

    },
    mounted() {
       for(var i = 0; i < 10; i++){
        axios({url: this.apiUrl})
        .then((response) => {
            this.email.push(response.data.response);
        });
    }
    },

});