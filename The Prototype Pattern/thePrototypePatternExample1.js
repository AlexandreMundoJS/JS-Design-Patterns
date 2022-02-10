var myCar = {
    name: "Ford Escort",
    drive: function(){
        console.log("Weeee. I'm driving!");
    },
    panic: function(){
        console.log("Wait. How do you stop this thing?");
    }
};

// Use Object.create to instantiate a new car
var yourCar = Object.create(myCar);

// Now we can see that one is a prototype og the other
console.log(yourCar.name);