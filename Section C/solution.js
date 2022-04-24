// Test
var main = function () {
    var inputValue = +(document.getElementById("numberToBeConverted")).value;
    var outputValue = convert(inputValue);
    document.getElementById("output").innerHTML = convert(inputValue);
    // See in multiple Test Samples in Console
    console.log(document.getElementById("numberToBeConverted"));
    var cases = [
        0, 1, 2, 7, 10, 11, 12, 13, 15, 19, 20, 21, 25, 29, 30, 35, 50, 55, 69, 70,
        99, 100, 101, 119, 510, 900, 1000, 5001, 5019, 5555, 10000, 11000, 100000,
        199001, 1000000, 1111111, 1043283, 19043283, 190000009, 199405009,
        19110000901, 100200000000, 191900020001, 999999999999999,
    ];
    for (var i = 0; i < cases.length; i++) {
        console.log(cases[i] + ": " + convert(cases[i]));
    }
};
var convert = function (num) {
    if (num == 0)
        return "zero.";
    else
        return convert_trillions(num) + ".";
};
var ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
var tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
var teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
var convert_trillions = function (num) {
    if (num === 1000000000000) {
        return "one trillion";
    }
    else if (num % 1000000000000 === 0) {
        return convert_billions(Math.floor(num / 1000000000000)) + " trillion.";
    }
    else if (Math.trunc(num / 100000000000) % 10 !== 0 && num > 1000000000000) {
        return (convert_billions(Math.floor(num / 1000000000000)) +
            " trillion, " +
            convert_billions(num % 1000000000000));
    }
    else if (num > 1000000000000) {
        return (convert_billions(Math.floor(num / 1000000000000)) +
            " trillion and " +
            convert_billions(num % 1000000000000));
    }
    else {
        return convert_billions(num);
    }
};
var convert_billions = function (num) {
    if (num === 1000000000) {
        return "one billion";
    }
    else if (num % 1000000000 === 0) {
        return convert_millions(Math.floor(num / 1000000000)) + " billion";
    }
    else if (Math.trunc(num / 100000000) % 10 !== 0 && num > 1000000000) {
        return (convert_millions(Math.floor(num / 1000000000)) +
            " billion, " +
            convert_millions(num % 1000000000));
    }
    else if (num > 1000000000) {
        return (convert_millions(Math.floor(num / 1000000000)) +
            " billion and " +
            convert_millions(num % 1000000000));
    }
    else {
        return convert_millions(num);
    }
};
var convert_millions = function (num) {
    if (num === 1000000) {
        return "one million";
    }
    else if (num % 1000000 === 0) {
        return convert_thousands(Math.floor(num / 1000000)) + " million";
    }
    else if (Math.trunc(num / 100000) % 10 !== 0 && num > 1000000) {
        return (convert_thousands(Math.floor(num / 1000000)) +
            " million, " +
            convert_thousands(num % 1000000));
    }
    else if (num > 1000000) {
        return (convert_thousands(Math.floor(num / 1000000)) +
            " million and " +
            convert_thousands(num % 1000000));
    }
    else {
        return convert_thousands(num);
    }
};
var convert_thousands = function (num) {
    if (num === 1000) {
        return "one thousand";
    }
    else if (num % 1000 === 0) {
        return convert_hundreds(Math.floor(num / 1000)) + " thousand";
    }
    else if (Math.trunc(num / 100) % 10 !== 0 && num > 1000) {
        return (convert_hundreds(Math.floor(num / 1000)) +
            " thousand, " +
            convert_hundreds(num % 1000));
    }
    else if (num > 1000) {
        return (convert_hundreds(Math.floor(num / 1000)) +
            " thousand and " +
            convert_hundreds(num % 1000));
    }
    else {
        return convert_hundreds(num);
    }
};
var convert_hundreds = function (num) {
    if (num % 100 === 0) {
        return convert_tens(Math.floor(num / 100)) + " hundred";
    }
    else if (num > 99) {
        return (ones[Math.floor(num / 100)] + " hundred and " + convert_tens(num % 100));
    }
    else {
        return convert_tens(num);
    }
};
var convert_tens = function (num) {
    if (num < 10)
        return ones[num];
    else if (num >= 10 && num < 20)
        return teens[num - 10];
    else if (num >= 20 && num % 10 === 0) {
        return tens[Math.floor(num / 10)];
    }
    else {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
};
