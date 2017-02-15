function init(){

}
function loginValidate(){
    if()
    // que solo vaya a map si solo se tienen los datos del signup
}

var miMap;
// la funcion se carga cuando la funcion se acaba de cargar
// se puede cambiar el nombre en el html
// cada vez que haga un watch position, se hace un setcenter para actualizarlo
function initMap() {
    var mapConfig={
        center: {
            lat: -16.457389199999998, 
            lng: -71.5315308
        },
        zoom: 15
  };
//miMap.setcenter();para conseguir los datos del usuario cuando se mueva
        
  miMap = new google.maps.Map(document.getElementById('map'), mapConfig);
  
    
    var myLatLong={lat: -16.457389199999998,lng: -71.5315308};  
    var pazPeru = new google.maps.Marker({
    position: myLatLong,
    map: miMap,
    title: 'Ubicacion',
    label:'1',
    icon:''
      });
    // se pueden hacer mas marcadores
}