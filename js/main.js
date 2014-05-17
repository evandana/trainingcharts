require.config({
	baseUrl: './',
	paths: {
		jquery: "./libs/jquery/jquery-2.0.3",
		handlebars: "./libs/handlebars/handlebars-v1.3.0",
		text: "./libs/require/text"

	// ... etc
	},
	shim: {
	    'jquery': {
	        exports: '$'
	    },
	    'handlebars': {
	        exports: 'Handlebars'
	    },
	    'text': {
	    	exports: "text"
	    }
	}
  
  // ...
});

require([
	"./js/charts/charts"
	],
	function (
		charts 
		) {

		alert('initialized')


	}
);
