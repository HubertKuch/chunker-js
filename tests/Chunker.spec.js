const Chunker = require("../index");
const {expect} = require("chai");

describe('Chunker test', function () {
    it('should divide element into multidimensional array by semicolon', function () {
        const SPLITER = ";";

        const arr = ["test val 1", "test val 2", SPLITER, "test val 3", SPLITER, "tes 4", "test val 5",];

        const chunks = Chunker.divideByValue(arr, SPLITER);

        expect(chunks).is.a('array');
        expect(chunks[0]).is.a('array');
        expect(chunks.length).is.eq(2);
        expect(chunks[0]).not.contain(";");
    });

    it('should divide single-dimensional array into multidimensional by callback return true', () => {
        const SPLITER = ';';

        const arr = ["test", "test 2", "test 3", SPLITER, "test 4", "test 5", SPLITER, 5, 1, 24];
        const chunks = Chunker.divideByCallback(arr, el => el === SPLITER);

        expect(chunks).is.a('array');
        expect(chunks[0]).is.a('array');
        expect(chunks.length).is.eq(3);
        expect(chunks[0]).not.contain(";");
    })
});
