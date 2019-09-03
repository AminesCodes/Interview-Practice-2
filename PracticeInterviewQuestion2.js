// Given a string, return all repeated letters on numbers
// ex: aaaabbccccaa => a4b2c3a2
// if new str is longer then original one, return original one

const shrinkingStr = (str) => {
    let shrinkedStr = "";
    let counter = 0;

    for (let i=0; i<str.length; i++) {
        counter += 1;
        if (str[i] !== str[i+1]) {
            shrinkedStr += str[i] + counter;
            counter = 0;
        }
    }
    if (shrinkedStr.length >= str.length) {
        return str;
    }
    return shrinkedStr;
}
let myStr = "aaaabbccca";
console.log(shrinkingStr(myStr))
console.log(shrinkingStr("abbcdd"))