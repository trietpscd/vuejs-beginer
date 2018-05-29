Vue.component('app-nav', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
Vue.component('app-element',{
    template: '<p>This is tempalte render from Component! by {{name}}.<button @click="changeName">Click Change Name</button></p>',
    data: function () {
        return {
            name: 'Triet Pham'
        }
    },
    methods: {
        changeName: function () {
            return this.name = 'Pham'
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'This is title',
        check: false,
        cities:['Da Nang','Nha Trang','Sai Gon','Vung Tau'],
        groceryList: [
            { id: 0, text: 'Cà pháo' },
            { id: 1, text: 'Mắm tôm' },
            { id: 2, text: 'Miễn ăn được là được' }
        ],
        name: 'Triet Pham',
        age: 25,
        bongdaso: 'http://bongdaso.com/main.aspx',
    },
    methods: {
        changeMessage: function () {
            this.message = 'I changed message'
        },
        editInfor: function (time) {
            return time + ' ' + this.name;
        },
        addYear: function () {
            this.age++;
        },
        subYear: function () {
            this.age--;
        }
        
    }
});

var vm = new Vue({
    el: '#example',
    data: {
        message: 'This is message',
        a: 0,
        b: 1,
        c: 10
    },
    methods: {
        // addNumberA: function () {
        //     console.log(this.message.toUpperCase());
        //     return this.a + this.c;
        // },
        // addNumberB: function () {
        //     console.log(this.message.toLowerCase());
        //     return this.c + this.b;
        // }
    },
    computed: {
        // changeMessage: function () {
        //     return this.message.split(' ').reverse().join(' ')
        // }
        addNumberA: function () {
            console.log(this.message.toUpperCase());
            return this.a + this.c;
        },
        addNumberB: function () {
            console.log(this.message.toLowerCase());
            return this.c + this.b;
        },
        changeMessage: {
            get: function () {
                return this.message.toUpperCase();
            },
            set: function (message) {
                this.message = message;
            }
        }
    }
})

var vm1 = new Vue({
    el: '#conditional',
    data: {
        error: false,
    }
});
var vm2 = new Vue({
    el: '#loop',
    data: {
        profile: [
            {name: 'A', age: 20},
            {name: 'B', age: 30},
            {name: 'C', age: 40},
            {name: 'D', age: 50},
            {name: 'E', age: 60},
            {name: 'F', age: 70},
            {name: 'G', age: 80},
        ],
        value: 'None'
    },
    methods: {
        readRefs: function () {
            // console.log(this.$refs.name.value)
            this.value = this.$refs.name.value;
            this.$refs.name.value = '';
        }
    }
});