ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32756").setExtent([483270.891234, 7116041.625812, 500906.800325, 7126100.625812]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Map_2_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Pine_extraction/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "classifiede",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Map_2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Map_2_1, 0]);
var lyr_Map_1_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Pine_extraction/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "classified_a",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Map_1",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Map_1_2, 0]);

lyr_OpenStreetMap_0.setVisible(true);lyr_Map_2_1.setVisible(true);lyr_Map_1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Map_2_1,lyr_Map_1_2];
