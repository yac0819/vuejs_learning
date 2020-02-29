new Vue({
  el: '#exercise',
  data: {
  	attachHighlight: false,
    attachShrink: false,
    color: 'green',
    color2: 'yellow',
    color4: '',
    status: false,
    color5: '',
    progressBar: {
    	width: '0px',
      backgroundColor: 'red'
    },
  },
  computed: {
    classes: function() {
    	return {
      	backgroundColor: this.color5,
        fontSize: 20 + 'px',
        border: 1 + 'px solid black'
      }
    }
  },
  methods: {
    startEffect: function() {
 			setInterval(()=>{
      	this.attachHighlight = !this.attachHighlight;
        this.attachShrink = !this.attachShrink;
 			},3000);
  	},
    startProgress: function() {
    	var vm = this;
      var width = 0;
    	setInterval(function(){
      	width = width + 10;
      	vm.progressBar.width = width + 'px';
      }, 500)
    }
  }
});
