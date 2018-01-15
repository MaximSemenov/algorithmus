//#Reverse a String#
//@Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.@
//~algorithm1.spec.js~

//%&
function reverseString(str) {
    var mystr = str.split("").reverse().join("");
    return mystr;
}

reverseString("hello");
//%&
exports.f = reverseString;