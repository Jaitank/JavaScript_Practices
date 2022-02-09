
// Suppose we get temperature's value from web, and acc. to it we have to print some messages
// or can do some relevant changes.

var temperature = 20; // hard-coded value for now, later we will see how to take input or data from html

if(temperature < 20)
{
    console.log("It is very cold outside");
}

if (temperature < 30 )
{
    console.log("It is moderate outside");
}
else
{
    console.log("It is very hot outside");
}