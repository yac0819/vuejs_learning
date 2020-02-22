new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        buttonClicked: function() {
            alert('Button Clicked!');
        },
        changeValue: function(event) {
            this.value = event.target.value;
        },
    }
});