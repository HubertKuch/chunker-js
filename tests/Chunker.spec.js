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
});
