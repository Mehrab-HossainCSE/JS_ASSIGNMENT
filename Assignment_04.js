function checkEnding(str1, str2) {
    if (str1.length < str2.length) return false;
    let start_str1 = str1.length - str2.length;
    let start_str2 = 0;
    for (let i = start_str1; i < str1.length; i++) {
        if (str1[i] !== str2[start_str2]) return false;
        else {
            i++;
            start_str2++;
        }
    }
    return true;
}

console.log(checkEnding("samurai", "zi")); // false
console.log(checkEnding("samurai", "ai")); // true
