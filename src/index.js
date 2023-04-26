"use strict";

function Chunker() {
}

Object.assign(Chunker, {
    /**
     * @param {Array} array
     * @param value
     * */
    divideByValue(array, value) {
        const indexesOfValue = [0];
        const chunks = [];

        array.forEach((val, index) => val === value ? indexesOfValue.push(index) : undefined);

        for (let index = 0; index < indexesOfValue.length; index++) {
            if (!indexesOfValue[index + 1]) {
                break;
            }

            const slice = array.slice(indexesOfValue[index], indexesOfValue[index + 1] ?? undefined)
                .filter(fragment => fragment !== value);

            chunks.push(slice);
        }

        return chunks;
    }
});
