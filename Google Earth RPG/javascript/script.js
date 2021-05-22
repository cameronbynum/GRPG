(function(window, google, mapster){
    //api documentation https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.styles
    //map options
    var options = mapster.MAP_OPTIONS
    element = document.getElementById('map-canvas')
    //map
    map = new google.maps.Map(element, options)

}(window, google, window.Mapster || (window.Mapster = {})));