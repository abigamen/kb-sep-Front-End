
// how to create variable in javascript.
// fname, lname, dob(date of birth) gender, address, phone.
// " " = duble quotes       '' single quotes

// fname is identifier.
// variable-human 





function print(greeting, message)
{
    console.log(greeting+message);
}
print("heellloo ", " fuck you");
 console.log(typeof print);


//create a function multiply first 2 number and divide 
//the result by 3rd number 4,5,2 = 20/2 = 20
function number(num1, num2, num3)
{
    console.log(num1 == num2 / num3);
}
number(4, 5, 2);

var x = 20;
var y = x;
console.log(y);
console.log(x);


var mylocation = "oslo, norway";


x=  1; // number 
y = true; //boolean
console.log(x==y); // true. for comparing just value 
console.log(x===y); // false. for comparing values and datatype

// converting the datatype from boolean to Number.
//Nurber is a function to convert anytype to a number. 
console.log(Number(x)) // 1