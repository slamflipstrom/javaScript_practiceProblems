// Write a program that sets each of two variables to a number, then displays the integer quotient and integer result to the screen, like so: 7 / 3 = 2 r 1. (Hint: parseInt() in JavaScript is like to_i in Ruby.)

var ping = 8

var pong = 6

var ball = parseInt(ping / pong)

var paddle = ping % pong

// pingpong = ping + "/" + pong "=" + ball + "r" + paddle

function display() {
  console.log(pingpong);
}

display()

