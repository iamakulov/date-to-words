"use strict";

var expect = require("expect");
var dateToWords = require("./");

describe("dateToWords", function () {
    it("returns the proper date for years in the middle of a century", function () {
        expect(dateToWords(new Date(2015, 6, 23))).toBe("July the twenty-third, twenty fifteen");
        expect(dateToWords(new Date(2159, 6, 23))).toBe("July the twenty-third, twenty-one fifty-nine");
        expect(dateToWords(new Date(1978, 6, 23))).toBe("July the twenty-third, nineteen seventy-eight");
    });

    it("returns the proper date for years in the beginning of a century", function () {
        expect(dateToWords(new Date(1906, 11, 15))).toBe("December the fifteenth, nineteen hundred six");
        expect(dateToWords(new Date(700, 11, 15))).toBe("December the fifteenth, seven hundred");
        expect(dateToWords(new Date(109, 11, 15))).toBe("December the fifteenth, one hundred nine");
    });

    it("returns the proper date for years in the beginning of a millennium", function () {
        expect(dateToWords(new Date(1006, 0, 1))).toBe("January the first, one thousand six");
        expect(dateToWords(new Date(2000, 0, 1))).toBe("January the first, two thousand");
        expect(dateToWords(new Date(3001, 0, 1))).toBe("January the first, three thousand one");
    });
});