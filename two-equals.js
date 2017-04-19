/**
 * (c) Ricardo Moreno <morenoricardo237@gmail.com>
 *
 * For more details about of the license of this source code,
 * please see the file LICENSE.
 */

'use strict';

/* Dependencies */

const areObjects = require('are-objects');
const areArrays = require('are-arrays');

/* Export module */

module.exports = equals;

/**
 * equals
 *
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function equals (a, b) {
  if (a === b) {
    return true;
  } else if (areObjects(a, b)) {
    if (areArrays(a, b)) {
      if (!equals(a.length, b.length)) {
        return false;
      }
    
      for (let i = 0; i < a.length; i++) {
        if (!equals(a[i], b[i])) {
          return false;
        }
      }

    // At least one should be a array.
    } else if (Array.isArray(a) || Array.isArray(b)) {
      if (!areArrays(a, b)) {
        return false;
      }
    } else {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      
      if (equals(keysA, keysB)) {
        for (let i = 0; i < keysA.length; i++) {
          if (!equals(a[keysA], b[keysB])) {
            return false;
          }
        }
      } else {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}
