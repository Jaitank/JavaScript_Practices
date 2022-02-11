// keyword to declare functio - (function)

function sayHello(name){
    console.log(`Hello there, ${name}`);
}

// function calling
sayHello("Jai tank");
sayHello("Md. Huzefa");

// function refrencing -  sayHello; wihout paranthesis, we will learn it later.

function withReturn(){
    return "Hello we i have returned as string, you can save me."
}

var saving = withReturn();

console.log(saving);