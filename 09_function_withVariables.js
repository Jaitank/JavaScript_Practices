// Here we are going to give information about user, on the basis of its name and role.

// now see a new change in function decleration, which is unique in javaScript 
// we have declare functions like : function getRole(name, role)

// but we can also declare a function in variable too, can use it same as we use above one.

var getRole = function (name, role){
    
    switch(role){
        case "admin":
            return `${name}, gets full access`;
    
        case "subadmin":
            return `${name}, gets access to create/delete courses`;
    
        case "testprep":
            return `${name}, gets access to create/delete tests`;
    
        case "user":
            return `${name}, get access to consume content`;
    
        default:
            return `${name}, Not recognized`;
    }
}

var user1 = getRole("Jai tank", "admin");
var user2 = getRole("Md. Huzefa","user");

console.log(user1);
console.log(user2);