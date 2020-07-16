//Methods of strings
let str ="Hey guys..";
//searching the string in given string
console.log(str.search("Hey"));

//slice Extracts a part of a string and returns a new string
let str1="I am kavita";
let slice1=str1.slice(2,7);
console.log(slice1);

//substring
//Extracts the characters from a string, between two specified indices
let str2="Learning js with letsupgrade";
let substr = str2.substring(4,8);
console.log(substr);

//substr() works same as slice
let str3="sai sir has a good knowledge of js ";
let substr1=str3.substr(3,9);
console.log(substr1);

//replace() replacesthe string
let str4="sai sir has good knowledge in js";
let rep=str4.replace("sai","prasad");
console.log(rep);

//trim() removes white spaces
let str5="    hey letsupgrader   ";
console.log(str5.trim());