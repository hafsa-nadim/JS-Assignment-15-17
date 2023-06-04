                              // Assignment # 15-17


//1. Declare an empty array using JS literal notation to store student names in future.

// let studData = [];

//2. Declare an empty array using JS object notation to store student names in future.

// let Data1 = [];

//3. Declare and initialize a strings array.

//   let strStore = ["computer", "science", "medical", "physics"];

// 4. Declare and initialize a numbers array.

// let count1 = [1, 2, 3, 4, 5, 6];

// 5. Declare and initialize a boolean array.

// let boolean = [true, true, false, true, false];

// 6. Declare and initialize a mixed array.

// let mixedArray = [16, "Hafsa", false,"name: Nadim", "age: 17", null];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:


// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Qualification:<br>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like.


// let relName = ["taha", "hafsa", "ayesha" , "anumta"]
// let scoreMarks = [569, 764, 432];

// document.write("scored marks of ", relName[0], " are ",scoreMarks[0]," . percentage: ", (scoreMarks[0]*100)/500 ,"<br>");
// document.write("scored marks of ", relName[1], " are ",scoreMarks[1]," . percentage: ", (scoreMarks[1]*100)/500 ,"<br>");
// document.write("scored marks of ", relName[2], " are ",scoreMarks[2]," . percentage: ", (scoreMarks[2]*100)/500 ,"<br>");



// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.                                                                                                                                             g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// let arr = ["blue", "green", "red", "white", "brown", "pink", "black","maroon"];
// console.table("old array", arr);
// //  => A
// let begining_color = prompt("enter the color name you want to add at begining");
// arr.unshift(begining_color);
// console.table("added the color at the begining of array", arr);
// // => B
// let end_color = prompt("enter the color name you want to add at end");
// arr.push(end_color);
// console.table("added the color at the end of array", arr);
// // => C
// arr.unshift("yellow", "orange");
// console.table("added the names of two more colors at the begining", arr);
// //=> D
// arr.shift();
// console.table("deleted the first color", arr);
// // => E
// arr.pop();
// console.table("deleted the last color", arr);
// // => F
// let index_no_to_add = +prompt("emter index no at which you want to add a value");
// let color_name = prompt("enter name of color you want to add");
// arr.splice(index_no_to_add, 0, color_name);
// console.table("added the color: ", color_name, " at index no: ",index_no_to_add, arr);
// // => G
// let index_no_to_del = +prompt("emter index no at which you want to del a value");
// let quantity = prompt("how many colors you want to delete");
// arr.splice(index_no_to_del, quantity);
// console.table("deleted the ",quantity, " colors from index no: ",index_no_to_del, arr);


// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.


// let value1 = [122,421,170,250,120];
// let score1 = value1.sort(function(a,b){
//     if(a>b){
//         return b
//     }
//     else{
//         return -1
//     }
// });
// console.log("unsorted array ", value1);
// console.log("sorted array ", score1);


// //  11. Write a program to create a single string from the
// // below mentioned array:

// // var arr1 = [“This ”, “ is ”, “ my ”, “ cat”];

// let arr1 = [" this", " is", " my", " cat"];
// let joined = arr1.join(" ");
// console.log(arr1.join(""));


 //12. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// let devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// for (let i = 0; i < devices.length; i++) {
//   let device = devices[i];
//   console.log("Out: " + device);
// }



//13. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out).


// let devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// let reversedDevices = devices.slice().reverse();
// for (let i = 0; i < reversedDevices.length; i++) {
//   let device = reversedDevices[i];
//   console.log("Out: " + device);
// }

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:


// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
// }
// document.write('</select>');













