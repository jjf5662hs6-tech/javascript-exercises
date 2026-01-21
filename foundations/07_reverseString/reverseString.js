const reverseString = function(string) {
    // let text = string;

    let reversedText = string.split("")
                        .reverse()
                        .join("");

        return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
