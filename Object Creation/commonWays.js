// Each of the following options will create a new empty object:

var newObject = {};

// or which is a shorthand for the object constructor
var newObject = new Object();

// ECMAScript 3 compatible approaches

// 1. Dot syntax
// Set properties
newObject.someKey = "Hello World";
// Get properties
var key = newObject.someKey;

// 2. Squarte Bracket syntax
// Set properties
newObject["someKey"] = "Hello World";
// Get properties
var key = newObject["someKey"];


// ECMAScript 5 only compatible approaches

// 3. Object.defineProperty
// Set properties
Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function (obj, key, value) {
    config.value = value;
    Object.defineProperty(obj, key, config);
}
// To use, we then create a new empty "person" object
var person = Object.create(null);
// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

// 4. Object.defineProperties
// Set properties
Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
})

// Getting properties for 3. and 4. can be done using any of the 
// options in 1. and 2.
// Usage:
// Create a race car driver that inherits from the person object
var driver = Object.create(person);
// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");
// Get an inherited property (1981)
console.log(driver.dateOfBirth);
// Get the property we set (100mph);
console.log(driver.topSpeed);