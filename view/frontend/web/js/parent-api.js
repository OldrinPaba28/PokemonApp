define([
    'jquery'
],
function($) {
    return {
        getPokemones: function(){
            const url='https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100';
            return $.ajax({
                url: url,
                type: 'GET',
                global: true,
                contentType:'application/json',
                headers: {}
            });
        },
        getPokemonesdata: function(url){
            return $.ajax({
                url: url,
                type: 'GET',
                global: true,
                contentType:'application/json',
                headers: {}
            });
        }
  }
});