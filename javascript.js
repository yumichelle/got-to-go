// Michelle's Javascript

var map;
function initMap() {
    var PowdermakerHall = {lat: 40.736336, lng: -73.818645}
    var QueensCollegeDiner = {lat: 40.737384, lng: -73.817895}
    var RosenthalLibrary = {lat: 40.736387, lng: -73.819966}
    var KielyHall = {lat: 40.735977, lng: -73.815978}
    var ScienceBuilding = {lat: 40.735026, lng: -73.820136}
    var HonorsHall= {lat: 40.734801, lng: -73.818088}
    var  QueensLibraryatQueensboroHill= {lat: 40.742971, lng:  -73.825457}
    var  PomonokPlayground = {lat: 40.735961, lng: -73.813593}
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: QueensCollegeDiner,
        zoom: 16
    });

    var PowdermakerHall = new google.maps.Marker({
        position: PowdermakerHall,
        map: map,
        title: 'Powdermaker Hall'
    });

    var QueensCollegeDiner = new google.maps.Marker({
        position: QueensCollegeDiner,
        map: map,
        title: 'Queens College Diner'
    });

    var RosenthalLibrary = new google.maps.Marker({
        position: RosenthalLibrary,
        map: map,
        title: 'Rosenthal Library'
    });

    var KielyHall = new google.maps.Marker({
        position: KielyHall,
        map: map,
        title: 'Kiely Hall'
    });
    var ScienceBuilding= new google.maps.Marker({
        position: ScienceBuilding,
        map: map,
        title: 'Science Building'
    });
    var HonorsHall= new google.maps.Marker({
        position: HonorsHall,
        map: map,
        title: 'Honors Hall'
    });
    var QueensLibraryatQueensboroHill= new google.maps.Marker({
        position: QueensLibraryatQueensboroHill,
        map: map,
        title: 'Queens Library at Queensboro Hill'
    });

    var PomonokPlayground = new google.maps.Marker({
        position: PomonokPlayground,
        map: map,
        title: 'Pomonok Playground'
    });

    // http://zetcode.com/articles/javascriptjsonurl/
    // TO DO - 
    // how to know where you are
    // can markers show if in the same zipcode / area?
    // can you click on markers? 
}
