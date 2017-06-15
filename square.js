/**
 * @license http://creativecommons.org/licenses/by-sa/4.0/ Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
 * @author  Mustapha Mekhatria
 * @version 1.0.0
 */

// JSLint options:
/*global Highcharts, window*/

(function (H) {
Highcharts.SVGRenderer.prototype.symbols.square = function(x, y, w, h) {
  return [
    'M', x, y,
    'L', x, y + h,
    x + w, y + h,
    x + w, y,
    x, y

  ];
}; 
}(Highcharts));
