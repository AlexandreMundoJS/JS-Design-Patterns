var myRevealingModule = function(){
    var privateVar = "Ben Cherry",
        publicVar = "Hey There!";

    function privateFunction(){
        console.log(`Name: ${privateVar}`);
    }

    function publicSetName(strName){
        privateVar = strName;
    }

    function publicGetName(){
        privateFunction();
    }

    // Reveal public pointers to 
    // private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
}();

myRevealingModule.setName("Alexandre Machado");
myRevealingModule.getName();