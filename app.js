Vue.component('app-nav', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
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
})