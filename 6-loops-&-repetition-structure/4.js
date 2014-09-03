// Write a program which prompts the user for a positive odd number, and which keeps prompting the user until they successfully input such a number.

var num = prompt("Please select an odd number.");

if(num % 2 != 1){
  console.log("Not a valid entry")
}else{
  return num
}