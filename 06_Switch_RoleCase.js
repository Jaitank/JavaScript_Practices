//  Create an application with following roles:
//  1. admin - gets full access
//  2. subadmin - gets access to create/delete courses
//  3. testprep - gets access to create/delete test
//  4. user - gets access to consume content.

var user = "admin";

switch(user){
    case "admin":
        // console.log("gets full access");
        // break;                                instead of using break we can simply use return
        return console.log("gets full access");

    case "subadmin":
        return console.log("gets access to create/delete courses");

    case "testprep":
        return console.log("gets access to create/delete tests");

    case "user":
        return console.log("get access to consume content");

    default:
        return console.log("Not recognized");
}