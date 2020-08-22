Vue.component('navbar', {
    props: ['logged'],
    data: () => {
        return {
            currentIndex: null,
            links: [
                { label: 'HOME', img: 'assets/home.svg' },
                { label: 'URLS', img: 'assets/list.svg' },
                { label: 'LOGOUT', img: 'assets/log-out.svg' },
            ]
        }
    },
    template: `<nav>
      <span v-for="(link, index) in links" @click="click(index)">
        <img :src="link.img">
        <p>
        {{link.label}}
        </p>
      </span>
    </nav>`,
    methods: {
        click(i) {
            if (this.currentIndex !== i) {
                this.$emit('link', i);
                this.currentIndex = i
            }
        }
    }
})

Vue.component('login-form', {
    props: ['logged'],
    template: `<form>
    <h1>Authenticate</h1>
    <section>
      <input type="text" id="usr" required/>
      <label for="usr">Username</label>
    </section>
    <section>
      <input type="password" id="pwd" required />
      <label for="pwd">Password</label>
    </section>
    <button @click.prevent="login">
      LOGIN
      <img src="assets/chevron-right.svg" />
    </button>
  </form>`,
    methods: {
        login() {
            this.$emit('auth');
        }
    }
})

Vue.component('url-form', {
    template: `<form>
    <h1>Let's shrink that blahblahblah</h1>
    <section>
      <input type="text" name="url" id="url" required placeholder="e.g. https://www.youtube.com/watch?v=uODuvT8m2"/>
    </section>
    <button>Short it!</button>
  </form>`
})

Vue.component('url-list', {
    data: () => { 
        return {
            urls:[
                {
                    og:'https://www.w3schools.com/Css/css_table.asp',
                    short:'asdasdasdad'
                },
                {
                    og:'https://developer.mozilla.org/en-US/docs/Web/CSS/line-break',
                    short:'asdasdasdad'
                }
            ]
        }
    },
    template: `<table>
    <tr>
      <th>URL</th>
      <th>Postfix</th>
      <th>Delete</th>
    </tr>
    <tr v-for="url in urls">
      <td>{{url.og}}</td>
      <td>{{url.short}}</td>
      <td>
        <label for="dlt">
            <img src="assets/trash.svg">
            <input type="button" hidden>
        </label>
      </td>
    </tr>
  </table>`
})


const app = new Vue({
    el: '#app',
    data: {
        logged: false,
        show: false
    },
    methods: {
        handleLink(i) {
            if (i == 2) return this.logged = false;
            this.show = !this.show
        },
        auth() {
            this.logged = true;
        }
    }
})

// methods: {
//     auth() {
//         let config = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ usr: this.usr, pwd: this.pwd })
//         }
//         fetch('http://localhost:1337/auth', config).then(
//             res => console.log(res)
//         );
//     }
// }