import './style.css';
import "ol/ol.css";
import { useGeographic } from 'ol/proj';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { fitToBox } from './map/fitToBox';

useGeographic();

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [2.213749, 46.927638],
      zoom: 2,
    }),
})

fitToBox(map, [
  [51.31133241804094, -4.369239747680932],
  [41.14745185055437, 8.623599144082085],
], 1000);