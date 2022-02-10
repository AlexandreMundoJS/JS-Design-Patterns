// A Vehicle constructor
function Vehicle(vehicleType) {
    // some defaults
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.licence = "00000-000";
}

// Test instance for a basic vehicle
var testInstance = new Vehicle("car");
console.log(testInstance);

// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle("truck");

// New functionality we're decorating vehicle with
truck.setModel = function (modelName) {
    this.model = modelName;
};

truck.setColor = function (color) {
    this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);

var secondInstance = new Vehicle("car");
console.log(secondInstance);