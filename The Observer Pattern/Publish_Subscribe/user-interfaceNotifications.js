// Return the current local time to be used in our UI later
getCurrentTime = function () {
    var date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        y = date.getFullYear(),
        t = date.toLocaleTimeString().toLowerCase();
    return (m + "/" + d + "/" + y + " " + t);
};

// Add a new row of data to our fictional grid component
function addGridRow(data){
    // ui.grid.addRow(data);
    console.log("updated grid component with: " + data);
}

// Update our fictional grid to show the time it was last
// updated
function updateCounter(data){
    // ui.grid.updateLastChanged(getCurrentTime());
    console.log("data last updated at: " + getCurrentTime() + " with " + data);
}

// Update the grid using the data passed to our subscribers
gridUpdate = function(topic, data){
    if (data !== "undefined"){
        addGridRow(data);
        updateCounter(data);
    }
};

// Create a subscription to the newDataAvailable topic
var subscriber = pubsub.subscribe("newDataAvailable", gridUpdate);

// The following represents updates to our data layer. This could be
// powered by ajax requests which broadcast that new data is available
// to the rest of the application.

// Publish changes to the gridUpdated topic representing new entries
pubsub.publish("newDataAvailable", {
    summary: "Apple made $5 billion",
    identifier: "APPL",
    stockPrice: 570.91
});

pubsub.publish("newDataAvailable", {
    summary: "Microsoft made $20 million",
    identifier: "MSFT",
    stockPrice: 30.85
});