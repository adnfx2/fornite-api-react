// normalizeByChunks.js         <<this function can be generalize>>
import { normalize } from "normalizr";
import _mergeWith from "lodash/mergeWith";
import { camelizeKeys } from "humps";

export default ({ data, toleranceFactor = 60, schema }) =>
  new Promise((resolve, reject) => {
    if (!Array.isArray(data))
      reject(`normalizeByChunks() argument error, "data" must be an array`);
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
        const begin = toleranceFactor * iteration;
        const end = begin + toleranceFactor;
        const slicedData = data.slice(begin, end);
        const camelizedData = camelizeKeys(slicedData);
        const normalizedData = normalize(camelizedData, schema);

        // Recursive object merging including arrays
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
        if (iteration > chunkSize) return resolve(finalData);
        normalizeSlice();
      }, 0);
    };

    normalizeSlice();
  });
