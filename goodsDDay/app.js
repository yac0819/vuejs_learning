new Vue({
    el: '',
    data: {
        foodName: '',
        dDate: '',
    },
    methods: {
        addFood: function (event) {
            this.foodName = event.target.value;
        }

    }
})