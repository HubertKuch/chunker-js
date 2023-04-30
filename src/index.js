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

        array.forEach((val, index) => val === value ? indexesOfValue.push(index) : undefined);

        return this.divideByIndexes(array, indexesOfValue);
    },
    /**
     * @param {Array} arr
     *@param {(el: any) => boolean} callback
     * */
    divideByCallback(arr, callback) {
        const indexes = [0];

        arr.forEach((el, index) => callback(el) ? indexes.push(index) : undefined);

        indexes.push(arr.length);

        return this.divideByIndexes(arr, indexes);
    },
    /**
    * @param {Array} array
    * @param {Array<number>} indexes
    * */
    divideByIndexes(array, indexes) {
        const chunks = [];

        for (let index = 0; index < indexes.length; index++) {
            if (!indexes[index + 1]) {
                break;
            }

            const slice = array.slice(indexes[index], indexes[index + 1] ?? undefined);

            chunks.push(slice);
        }

        return chunks;
    }
});

module.exports = Chunker;
