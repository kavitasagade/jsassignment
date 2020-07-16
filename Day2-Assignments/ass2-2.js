//Methods of array
//toString() Converts an array to a string, and returns the result.
let arr=['apple','ball','cat','dog'];
let arrstr=arr.toString();
console.log(arrstr);

//join() Joins all elements of an array into a string.
let arr1=['one','two','three','four','five'];
arrjoin=arr1.join(" & ");
console.log(arrjoin);

//replacing elements by using position in array
let arr2=['jan','feb','mar','may'];
arr2[3]="April";
console.log(arr2);

//length
let arr3=['Apple','Banana','Pineapple'];
arr3[arr3.length]="Kiwi";
console.log(arr3);

//delete the element
let arr4=[1,2,3,4,5];
delete arr4[3];
console.log(arr4);

//slice() slices elements from index of array into new array
let arr6=[1,2,3,"PK","KS","SP"];
let arrslice=arr6.slice(3);
console.log(arrslice);