// Show user a Signout button if he is authonticated
// and if not then show Signup/Login button

var authonticated = true;


if (authonticated)
{
    console.log("Show SignOut button");
}
else
{
    console.log("Show Login/SignUp button");
}

// we have another method like C++ to do that 

authonticated ? console.log("Show SignOut button") : console.log("Show Login/SignUp button");