/* @flow */
import { uniqueID, base64encode } from 'belter/';


export function getUniqueID() : string {
    return uniqueID();
}

export function stringToBase64(str : string) : string {
    return base64encode(str);
}
