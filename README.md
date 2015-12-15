OpenData Map
============

Projet Sandwich Class Camp proposed by [Instriit] in partnership with l'[ETNA].

Dynamic display of map data **Open Data** to encourage the purchase in real estate.


Installation Widget
-------------------

Just write in `<head>` :
```html
<script src='./newhome.js'></script>
```

In `<body>` :
```html
<div id='InSTRiiTExtension'></div>
```

Configuration
------------

### API MapBox

In Newhome.js :
~~~ js
function plan ()
{
	var cities = new L.LayerGroup();
  	L.mapbox.accessToken = 'api_token';
  	...
}
~~~
If you do not change the API token you'll get a blank page.


### Options Menu

You can customize the Action menu to display the data you want to display (for that you have data).
~~~ js
function Checked (mapCluster, L) 
{
  L.control.layers({
    'Street Map': L.mapbox.tileLayer('mapbox.streets').addTo(mapCluster),
    'Satellite': L.mapbox.tileLayer('mapbox.satellite')
  }, {
    'section': L.mapbox.featureLayer().loadURL('URL_API')
  }).addTo(mapCluster);
}
~~~


### Add new JS

~~~ js
var add_content = function()
{
  var html_to_add = "<div id='map-cluster' class='map'></div>";
  document.getElementById('InSTRiiTExtension').innerHTML = html_to_add;
  myRequire('https://api.tiles.mapbox.com/mapbox.js/v2.2.3/mapbox.js');
  myRequire('URL_JS');
  plan();
};
~~~


Resources
---------

- [LeafletJS]
- [Mapbox JS]


Thanks
------

**OpenData Map** © 2015, PERRIER Aurélien, MARTINELLI Sébastien & LEON Vincent 

Released under the [MIT License].

> GitHub [@perriea](https://github.com/perriea) &nbsp;&middot;&nbsp;
> GitHub [@cenevol](https://github.com/cenevol) &nbsp;&middot;&nbsp;
> GitHub [@Vincent--L](https://github.com/Vincent--L)

[ETNA]: http://www.etna-alternance.net
[Instriit]: http://instriit.com
[LeafletJS]: https://github.com/Leaflet/Leaflet/
[Mapbox JS]: https://github.com/mapbox/mapbox.js/
[MIT License]: http://mit-license.org/
