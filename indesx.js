// Create one function with zero parameter having a console statement;
function a(){
    console.log("a");
}
a();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function Add(a,b){
    sum=a+b;
    console.log(sum);
}
Add(1,2);

// Create one arrow function
let add = (a,b) => a*b;
console.log(add(3,4));

// Print output:Undefined 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Print output:Undefined,21 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Print output:20,40
var x = 21;
a();
b();
function a() {
   x = 20;
  console.log(x);
};
function b() {    
    x = 40;
   console.log(x);
};

// Write a function that accepts parameter n and returns factorial of n
function factorial(n){
    let fact=1;
    for(let i=n;i>=1;i--){
        fact=fact*i;
    }
    console.log(fact);
}
 factorial(5); //120

// Guess the Output: i am from PrepBytes and My batch is EA21
function FindSum(a, b){
    return a + b;
}
function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}
DisplayData("PrepBytes", FindSum(10, 11));

// Guess the output: 
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}

// Guess the output: Undefined
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

// Guess the Output: Hi!! EA21, Welcome To PrepBytes
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
const greet_message = greet('EA21');
greet_message("Welcome To PrepBytes")
