// Lets create a user's information with variables:

var fullName =  "Jai Tank";

const uid = "abc123";   // we can't overwrite it becuase this is not variable, and we want it as unique id

var email = "tankjai23@gmail.com";

var password = "123456";

var country = "India";

var state = "Rajasthan";

var courseName;      // this variable is undefined, if we print it before defining it or before give it any value
                    // then this will return us - undefined

// Both are same
console.log("Full Name is :", fullName);
console.log("Full Name is :" + fullName);

// But more efficient way to perform that ->
console.log(`
          With User ID: ${uid}
          User is : ${fullName}
          having email : ${email}
          from : ${state} , ${country}
          is registered.
`);