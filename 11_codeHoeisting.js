/* In the previous file we get to know about global context, and how does it works for function.

 Global context - It just collect all information about all line of code.

Now lets talk about execution context - It comes in stack and it executes the code.

 Execution context is comes in stack for every line suppose we declare var name = "jai"; it comes and blows away after this line.

 Suppose a function is called, then execution context comes in stack while the whole code execute, and blown away after it complete.

 Two rules of Executio Context:
  1. Function are scanned and made availabe. ( we have seen this in previous file)
  2. Variables are scanned and made undefined.
*/

console.log(Name); // as function runs in previous file, does it also runs. - NO
// it throws that undefined, what execution context made it.
var Name = "Jai";

console.log(Name); // here it prints the name

// what if do not define any variable and try to prints it. does it also throws undefined, or something else

// console.log(another); //it throws erroe becasue in function it does not defined anywhere


// same in case with function in variable.

tipper("8"); // this will give us output because this call if of normal function
bigTipper("8"); // this will not give us output here because this is call of function which is variable
               // and we know execution context made variable undefined. if we call below function define, then it runs

function tipper(a){
    var bill = parseInt(a) + 5; // this parseInt will convert a string into integer
    console.log(`Your bill of Rs. ${bill}`);
}

var bigTipper = function (a)
{
    var bill = parseInt(a) + 50;
    console.log(`Your bill of Rs. ${bill}`);
}

bigTipper(8); // here it get execute.
