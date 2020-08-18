const app = new Vue({
    el: '#app',
    data: {
        usr: '',
        pwd: ''
    },
    methods: {
        auth() {
            let config = {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usr: this.usr, pwd: this.pwd })
            }
            fetch('http://localhost:1337/auth', config).then(
                res => console.log(res)
            );
        }
    }
})