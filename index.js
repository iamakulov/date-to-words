"use strict";

var numberToWords = require("number-to-words");

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function monthToString(month) {
    return monthNames[month];
}

function dateToString(date) {
    return numberToWords.toWordsOrdinal(date);
}

function yearToString(year) {
    var leftHalf = Math.floor(year / 100);
    var rightHalf = year % 100;

    // Years at start of a century (1900...1909, 2000...2009, etc)
    if (rightHalf < 10) {
        // ...Years at start of a millennium (1000...1009, 2000...2009 etc)
        if (leftHalf % 10 === 0) {
            if (rightHalf === 0) {
                return numberToWords.toWords(leftHalf / 10) + " thousand";
            } else {
                return numberToWords.toWords(leftHalf / 10) + " thousand " + numberToWords.toWords(rightHalf);
            }
        }

        // ...Years in middle of a millennium (1700...1709, 1900...1909)
        else {
            if (rightHalf === 0) {
                return numberToWords.toWords(leftHalf) + " hundred";
            } else {
                return numberToWords.toWords(leftHalf) + " hundred " + numberToWords.toWords(rightHalf);
            }
        }
    }

    // Normal years (2015, 1978, etc)
    else {
        return numberToWords.toWords(leftHalf) + " " + numberToWords.toWords(rightHalf);
    }
}

function composeDateWords(month, date, year) {
    return month + " the " + date + ", " + year;
}

module.exports = function (dateObject) {
    var monthString = monthToString(dateObject.getMonth());
    var dateString = dateToString(dateObject.getDate());
    var yearString = yearToString(dateObject.getFullYear());
    return composeDateWords(monthString, dateString, yearString);
};