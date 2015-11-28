OpenData Map
============

Projet Sandwich Class Camp proposed by **Instriit** (http://instriit.com) in partnership with l'**ETNA** (http://www.etna-alternance.net).

Dynamic display of map data Open Data to encourage the purchase in real estate.

Installation
------------

### API MapBox

In Newhome.js :
~~~ js
function plan ()
{
	var cities = new L.LayerGroup();
  	L.mapbox.accessToken = 'api_tocken';
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
    'Subway': L.mapbox.featureLayer().loadURL('URL_API')
  }).addTo(mapCluster);
}
~~~

Resources
---------

- Materialize CSS (https://github.com/Dogfalo/materialize/)
- LeafletJS (https://github.com/Leaflet/Leaflet/)
- Mapbox JS (https://github.com/mapbox/mapbox.js/)


Thanks
------

**NProgress** © 2015, PERRIER Aurélien, MARTINELLI Sébastien & LEON Vincent 
Released under the [MIT License].
Authored and maintained by Rico Sta. Cruz with help from contributors.

[MIT License]: http://mit-license.org/

> GitHub [@perriea](https://github.com/perriea) &nbsp;&middot;&nbsp;
> GitHub [@cenevol](https://github.com/cenevol) &nbsp;&middot;&nbsp;
> GitHub [@Vincent--L](https://github.com/Vincent--L)
