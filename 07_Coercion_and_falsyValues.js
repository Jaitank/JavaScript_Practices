/* Falsy values : undefined, null , "" (empty string) , 0 --> if we pass them in conditional statements then they are treated 
                 as false. 
    True values:  except falsy values all values are treated as true in condition statement
    */

var user1;
var user2 = null;
var user3 = "";
var user4 = 0;

if (user1 || user2 ||  user3 || user4) // all values are falsy values
{
    console.log(" with four user: Any of them are treated as true values, if this line is being printed.");
}

var user5 = "false";

if (user1 || user2 ||  user3 || user4 || user5) // here user5 is valid true value. thats why it runs
{
    console.log("with 5 user: Any of them are treated as true values, if this line is being printed.");
}

// difference b/w '==' & '===' :

var user = "2";

if(2 == user)
{
    console.log("Here we use '==', this check loosly, java script treated that 2 as number, measn js does not think here about datatype");
}

if (2 === user)
{
    console.log("Here we use '===', this check strictly, java script here compare with datatype");
}

// variable 