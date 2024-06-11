import { Map } from "ol";
import { boundingExtent } from "ol/extent";

export const fitToBox = (map: Map, box: number[][], duration: number) => {
  var ext = boundingExtent([
    [box[0][1], box[0][0]],
    [box[1][1], box[1][0]],
  ]);
  map.getView().fit(ext, {
    size: map.getSize(),
    padding: [50, 50, 50, 50],
    duration,
  });
};