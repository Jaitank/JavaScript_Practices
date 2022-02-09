// we have to find out discount percentage, on our selling price we are offering
// suppose we have listingPrice = 799, and sellingPrice = 199, then print its discount percentage.

var listingPrice = 799;
var sellingPrice = 199;

var discountPercent = (listingPrice - sellingPrice) / listingPrice * 100;

console.log("Discount Percentage is :" + discountPercent + " % off"); //  this will print 75.0938....(with decimal)

// but we do not want to print our answer with decimals we just want 75 % off,
// so for that we have to convert the value in round off, which we can done by - using 'Math' library and it round() function

displayDiscountPercentage = Math.round(discountPercent);

console.log("Discount Percentage is :" + displayDiscountPercentage + " % off");

var result  = listingPrice > sellingPrice

console.log(result); //  this will throw true or false (boolean),

// we can check result's datatype by using typeof like that
console.log(typeof result);

