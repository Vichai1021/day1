// To add comment or add note


console.log("Hello World")

//Declaring a string variable
var name = "Vichai";
console.log(name);

//use the '+ sign to combine'
var greetings = "Hello " +name;
console.log(greetings);

//define number without ""
var a=10;
var b=3;
console.log(a);
console.log(b);

var sum=a+b;
console.log(sum);
var minus = a-b;
console.log(minus);
var product = a*b;
console.log(product);
var division= a/b;
console.log(division);
var modulus =a%b;
console.log(modulus);

var hungry = true;
var tired = false;

console.log(hungry);
console.log(tired);

//important operation !, && or ||
//NOT = ! opposite
//OR = || only one needs to be true to be true
//AND = && both needs to be true to be true

console.log(!hungry);

var breakfast = hungry||tired;
console.log(breakfast);


var longbreak = hungry && tired;
console.log (longbreak);

//data type = string, number, boolean, array object. Combine with control flow (if else, for loop) to solve a question, problem, logic/business rules

if (tired==true){
  console.log("Let's have a break.");
}
else{
  console.log("Let's continue the class.")
}

var age = 20;
if(age>18){
  console.log("You can see the movie");
}

else{
  console.log("You cannot see the movie");
}


if(age<13){
  console.log("You cannot see the movie");
}

else if (age<18){
  conssole.log("You can see the movie with parental guidance");
}
else{
  console.log("You can see the movie");
}

var testNum = 10;


if (testNum%2==1){

console.log(testNum+" is an odd number");
}

else{
  console.log(testNum+" is an even number");
}

var userAge = 20;
var ticketPrice = 100;

if(userAge<= 18)
  {
    console.log("Ticket price is RM"+ticketPrice*5/10);
  }

else if(userAge<=40){
  console.log("Ticket price is RM"+ticketPrice);
}

else if(userAge<=65){
  console.log("Ticket price is RM"+ticketPrice*7.5/10);
}

else 
  {console.log("Ticket price is RM"+ticketPrice*5/10)}

for (var i=0; i<10; i++){
  console.log(i);
}

for (var i = 10 ;i>0; i--){
  console.log(i)
}

for (var i=1; i<10; i+=2)
  {console.log(i)
  }

var mul = 12
for (i=1;i<=12; i++)
  {console.log(i+ "x" +mul +"="+i*mul)
  }