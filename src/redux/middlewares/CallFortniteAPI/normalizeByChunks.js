/*
  ## normalizeByChunks.js
  This funtion applies the normalize function from normalizr on small slices of a big array, each iteration (normalize execution) will happen on one cycle of the event loop, preveting possibles overheads and unresponsiveness of your UI.
    ---
<<this function can be generalize>>
*/

import { normalize } from "normalizr";
import _mergeWith from "lodash/mergeWith";
import { camelizeKeys } from "humps";

export default ({ data, toleranceFactor = 60, schema }) =>
  new Promise((resolve, reject) => {
    if (!Array.isArray(data))
      return reject("Our api provider is having issues");
    if (data.length < toleranceFactor || !schema) {
      const camelizedData = camelizeKeys(data);
      return resolve(schema ? normalize(data, schema) : camelizedData);
    }

    const length = data.length;
    const chunkSize = length / toleranceFactor;
    let iteration = 0;
    let finalData = { entities: {}, result: [] };
    const normalizeSlice = () => {
      setTimeout(() => {
        try {
          const begin = toleranceFactor * iteration;
          const end = begin + toleranceFactor;
          const slicedData = data.slice(begin, end);
          const camelizedData = camelizeKeys(slicedData);
          var normalizedData = normalize(camelizedData, schema);
          // Recursive merging, including arrays (finalData mutation)
          finalData = _mergeWith(
            finalData,
            normalizedData,
            (objValue, srcValue) => {
              if (Array.isArray(objValue)) {
                return objValue.concat(srcValue);
              }
            }
          );
          iteration++;
          // When finished return promised value
          if (iteration > chunkSize) return resolve(finalData);
          // Recusive call
          normalizeSlice();
        } catch (e) {
          reject(e);
        }
      }, 0);
    };

    normalizeSlice();
  });
