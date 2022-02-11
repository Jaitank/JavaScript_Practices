var Name = "Jai tank";

console.log("This is line number 3", Name);

function sayName() {
    // if it this scope does not have Name variable, it can take of scope in which it is present, but not from another scope in it.
  console.log("This is line number 6", Name);

  sayNameTwo();
  function sayNameTwo() 
  {
    var Name = "Md. Huzefa";
    console.log("This is line number 13", Name);
  }
}

sayName();
