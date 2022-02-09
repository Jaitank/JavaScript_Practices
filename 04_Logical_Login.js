// Allow user to access courses if he is:
//  logged in from email or google or facebook

// we will hard code now, suppose if it is logged in only from email, then it gets true for email.
var email = true;
var facebook = false;
var google = false;

if (google || facebook || email)
{
    console.log("SuccessFull LogIn!");
}