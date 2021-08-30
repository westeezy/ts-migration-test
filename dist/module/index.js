import { uniqueID, base64encode } from 'belter/src/util';
export function getUniqueID() {
  return uniqueID();
}
export function stringToBase64(str) {
  return base64encode(str);
}