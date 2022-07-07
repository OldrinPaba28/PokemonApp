define([
    'uiComponent',
    'Bootcamp_PokemonApp/js/parent-api'
], 
function(component, parentapi) {
    return component.extend({
        defaults:{
            pokemones: [],
        },
        initialize:function(){
            this._super();
            this.initializeparentapi();
        },
        initObservable: function() {
            this._super()
                .observe({
                    pokemones: []
                });
                return this;
        },
        initializeparentapi: function(){
            parentapi.getPokemones()
                .then(data=>{
                    const results = data.results;
                    results.forEach(result=>{
                        const pokemones = {};
                        parentapi.getPokemonesdata(result.url)
                        .then(data => {
                            pokemones.name = data.name;
                            pokemones.img = data.sprites.other.dream_world.front_default;
                            pokemones.type = data.types;
                            pokemones.order = data.order;
                            this.pokemones.push(pokemones);
                            console.log(pokemones);
                        });
                        
                    });
                })
        }
    });
});