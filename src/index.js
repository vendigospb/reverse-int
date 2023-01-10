module.exports = function reverse (n) {
    let str = number.toString();
    let array = [];
    for( i = 0 ; i < str.length ; i++){
      array[i] = str[i]
    };
    let newStr = array.reverse().toString();
    let reverseNum = Number(newStr.replace(/,/g , "")) ;
    return reverseNum;
}
