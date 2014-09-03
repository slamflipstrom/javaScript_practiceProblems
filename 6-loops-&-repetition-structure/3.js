// Write a program that counts from 1 to 100 by 2's. Now make it work by 3's. Now have it count from 1 to 100 by any (positive) increment the user desires.

// for(var i = 0; i <= 100; i+=2){
//  console.log("The number is " + i);
// }

// for(var i = 0; i <= 100; i+=3){
//  console.log("The number is " + i);
// }

var twist = prompt("Please select an increment integer.");

for(var i = 100; i >= 0; i-=twist){
 console.log("The number is " + i);
}