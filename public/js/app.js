(function(){
	// definimos el modelo 
	var app = angular.module('pokedex', []);

	// definimos el controlador
	app.controller('PokemonController', function(){
		this.pokemon= {
			id : 001, 
			name : 'Bulbasaur',
			species : 'Seed Pokemon',
			type :['Grass','Poison'],
			height : "2'4",
			weight : '15.2 lib',
			abilities : ['Overgrow','Chlorophyll']
		};
	});
})();