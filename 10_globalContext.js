// here we call first function
sayHello();

// and then define or declare after calling - does it run:  YES because of global context. This is unique in javaScirpt
function sayHello(){
    console.log("Hello there is Jai");
}

// global context helps us in above situtaion how ? When we declare and define a function and registred,
// then it wrapped up and put inside in the global context, and whenever developer wants that function,
// after or before function defined, they can use it. 

// when we are writing javaScript in browser then there global context name is window and we see. it like:

var myName = "Jai tank";

if (myName === myName)
{
    console.log("It Runs, obviously");
}

if (myName === window.myName) // it throws error, window is not defined
{
    console.log(" Here it runs, if we are write that code im browser, where global context is window, but here we are in node,where global context exist with some another name");
}


