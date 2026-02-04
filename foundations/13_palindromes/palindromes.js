const palindromes = function (string) {
    let cleaned = string.toLowerCase()
                        .replace(/[^a-zA-Z0-9]/gi, "");

    let reversedString = cleaned.split("")
                                .reverse()
                                .join("");

    return cleaned === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
