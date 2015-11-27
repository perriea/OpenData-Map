/*
** Début du projet : 23/11/2015
** Derniere modification : 27/11/2015
** Projet realisé par perrie_a, martin_c, leon_v
** Projet OPENDATA - InStriit
*/

/*
** Chargement des CSS, JS puis de la map
*/
window.onload = function() {
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.type = 'text/css';
  css.href = './map.css';
  document.getElementsByTagName('head')[0].appendChild(css);
  css.onload = add_content;
}

function myRequire(url) {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, false);
    ajax.onreadystatechange = function() {
        var script = ajax.response || ajax.responseText;
        if (ajax.readyState === 4) {
            switch(ajax.status) {
                case 200:
                    eval.apply(window, [script]);
                    console.log("script loaded: ", url);
                    break;
                default:
                    console.log("ERROR: script not loaded: ", url);
            }
        }
    };
    ajax.send(null);
}

var add_content = function()
{
  var html_to_add = "<div id='map-cluster' class='map'></div>";
  document.getElementById('InSTRiiTExtension').innerHTML = html_to_add;
  myRequire('https://api.tiles.mapbox.com/mapbox.js/v2.2.3/mapbox.js');
  myRequire('https://api.mapbox.com/mapbox.js/plugins/leaflet-locatecontrol/v0.43.0/L.Control.Locate.min.js');
  myRequire('https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js');
  plan();
};



function checked (mapCluster, L) 
{
  L.control.layers({
    'Vue map': L.mapbox.tileLayer('mapbox.streets').addTo(mapCluster),
    'Vue satellite': L.mapbox.tileLayer('mapbox.satellite')
  }, {
    'Quartier de Celibataires': L.mapbox.featureLayer().loadURL('./geojson/celib.geojson'),
    'Metro 7': L.mapbox.featureLayer().loadURL('./geojson/subway.geojson')
  }).addTo(mapCluster);
}


function localisation (mapCluster) 
{
  mapCluster.locate({setView: true, watch: false, maxZoom: 20, timeout: 7000}).on('locationfound', function(e)
  {
    L.marker(e.latlng).addTo(mapCluster).bindPopup('Vous êtes ici').openPopup();
  });
}

function LoadData (mapCluster) 
{
  L.mapbox.featureLayer().loadURL('./geojson/stations.geojson').on('ready', function(e) 
  {
    var clusterGroup = new L.MarkerClusterGroup();
    e.target.eachLayer(function(layer) 
    {
      clusterGroup.addLayer(layer);
    });
    mapCluster.addLayer(clusterGroup);
  });
}

function plan()
{
  var cities = new L.LayerGroup();

  L.mapbox.accessToken = 'pk.eyJ1IjoicGVycmllYSIsImEiOiJjaWhjNHB5bWowMDg5djBrajkybDU0bGJ5In0.JfXhgcmOrOi0GNQjmjXmLg';
  var mapCluster = L.mapbox.map('map-cluster')
                    .setView([46.81509864599243, 3.0322265625], 6)
                    .addLayer(L.mapbox.tileLayer('mapbox.streets'))
                    .addControl(L.mapbox.geocoderControl('mapbox.places', {keepOpen: false}));
  localisation(mapCluster);
  LoadData(mapCluster);
  checked(mapCluster, L);
}
