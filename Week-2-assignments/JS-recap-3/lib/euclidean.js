/**
 *
 * @param {Array<Number>} startPoint geoJSON point-coordinates
 * @param {Array<Number>} endPoint geoJSON point-coordinates
 * @returns distance between two points
 */

export function dist(startPoint, endPoint) {
  return Math.sqrt(
    (endPoint[1] - startPoint[0]) ** 2 + (endPoint[1] - startPoint[1]) ** 2
  );
}
