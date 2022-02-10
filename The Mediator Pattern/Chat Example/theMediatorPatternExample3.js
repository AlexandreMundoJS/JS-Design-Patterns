var mediator = (function(){
    var topics = {};

    var subscribe = function (topic, fn){
        if (!topics[topic]){
            topics[topic] = [];
        }
        topics[topic].push({context: this, callback:fn});
        return this;
    };

    var publish = function(topic){
        var args;
        if (!topics[topic]){
            return false;
        }
        args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = topics[topic].length; i < l; i++){
            var subscription = topics[topic][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    }

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
}());

$("#chatForm").on("submit", (e) => {
    e.preventDefault();
    // Collect the details of the chat from our UI
    let text = $("#chatBox").val(),
        from = $("#fromBox").val(),
        to = $("#toBox").val();
    // Publish data from the chat to the newMessage topic
    if (from === to){
        iAmClearlyCrazy(from);
    }else {
        mediator.publish("newMessage", { message: text, from: from, to: to });
    }
});

// Apend new messages as they come through
function displayChat(data) {
    var date = new Date(),
        msg = `${data.from} enviou a seguinte mensagem: \ ${data.message} \ para ${data.to}`;
    $("#chatResult").prepend(`${msg} (${date.toLocaleTimeString()}) </br>`);
};

// Log messages
function logChat(data) {
    if (window.console) {
        console.log(data);
    }
}

// Subscribe to new chat messages beign submitted
// via the mediator
mediator.subscribe("newMessage", displayChat);
mediator.subscribe("newMessage", logChat);

function iAmClearlyCrazy(data) {
    $("#chatResult").prepend(`${data} is talking to himself.</br>`);
}

