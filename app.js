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
        ]
    },
    methods: {
        changeMessage: function () {
            this.message = 'I changed message'
        }
    }
})