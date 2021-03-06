// Constructor
var Interface = function (type, methods) {
    if (arguments.length != 2) {
        throw new Error(`Interface constructor called with ${arguments.length} arguments, but expected exactyle 2.`);
    }
    this.type = type;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error(`Interface constructor expect method names to be passed in as a string`);
        }
        this.methods.push(methods[i]);
    }
}

// Static class method
Interface.ensureImplements = function (object) {
    if (arguments.length != 2) {
        throw new Error(`Interface constructor called with ${arguments.length} arguments, but expected exactyle 2.`);
    }
    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error(`Function Interface.ensureImplements expect arguments two and above to be instances of Interface.`);
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error(`Function Interface.ensureImplements: object does not implement the ${interface.name} interface. Method ${method} was not found.`);
            }
        }
    }
}


// Create interfaces using a pre-defined Interface
// constructor that accepts an interface name and
// skeleton methods to expose.

// In our reminder example summary() and placeOrder()
// represent functionality the interface should
// support

var reminder = new Interface("List", ["summary", "placeOrder"]);
var properties = {
    name: "Remember to buy the milk",
    date: "07/01/2022",
    actions: {
        summary: function () {
            return "Remember to buy the milk, we are almost out!";
        },
        placeOrder: function () {
            return "Ordering milk from your local grocery store";
        }
    }
}

// Now create a constructor implementing the above properties
// and methods

function Todo(config) {
    // State the methods we expect to be supported
    // as well as the Interface instance beign checked
    // against
    // console.log(config.actions)
    // console.log(reminder)
    Interface.ensureImplements(config.actions, reminder);

    this.name = config.name;
    this.methods = config.actions;
    // console.log(this.methods);
}

// Create a new instance of our Todo constructor
var todoItem = new Todo(properties);

// Finally test to make sure these function correctly
console.log(todoItem.methods.summary());
console.log(todoItem.methods.placeOrder());
