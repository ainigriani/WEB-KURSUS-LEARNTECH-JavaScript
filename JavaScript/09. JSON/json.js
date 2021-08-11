// 1. JSON syntax
// data is in name/value pairs
// data is seperated by commas
// curly braces hold object
// square brackets hold arrays

//example

var myObj, x;
myObj= {name: "john", age: 30, city:"New York"};
x = myObj.name;
document.getElementById('sample').innerHTML = x ;


// 2. json vs example

3. data types

// string
// {"name" : "John"}

// number
// {"age" : "30"}

// object
// {"employee" :{name: "john", age: 30, city:"New York"} }

// array
// {"employee" :{name: "john", "anna", "peter"}

// boolean
// {"sale" : true}
//
// null
// {"middlename" : null}

// 4. parse
// parse the data with JSON.parase() and the data becomes a JavaScript object

// 5. stringfy
// to convert and object into a string use JSON.stringfy()
//
// 6. objects
// JSOM objects are surrounded by curly braces {}
// JSOn objects are written in key/value paris.
// keys must be string , and values must be a valid JSON data type(string,number,object,array, boolean or null).
// keys and values sre seperated by a colon
// each key/value pair is seperatedby commas
//
// 7. arrays
// arrays in JSON are almost the same as arrays in JavaScriptin JSOn array vaues must be of type string, number, object array, boolean or ull.
// in javascript array values can be all of the above olus sny other valid javascript expression, including functions, dates and undefined.

// 8.PHP
// arrays in PHP will be converted into JSOn using the PHP function json_encode()
//
// 9.HTML
//
// 10. JSONP is a method for send data without worrying about cros-domain issues
