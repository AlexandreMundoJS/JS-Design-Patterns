var myNameSpace = (function(){
    // A private counter variable
    var myPrivateVar = 0;

    // A private function which logs any arguments
    var myPrivateMethod = function(foo){
        console.log(foo);
        console.log(myPrivateVar);
    };

    return {
        // A public variable
        myPublicVar: "foo",
        // A public function utilizing privates
        myPublicFunction: function(bar){
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();

myNameSpace.myPublicFunction("Alexandre Machado");