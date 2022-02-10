var stateManager = {
    fly: function () {
        var self = this;
        $("#container").unbind().on("clilck", function (e) {
            var target = $(e.originalTarget || e.srcElement);
            if (target.is("div.toggle")) {
                self.handleClick(target);
            }
        })
    },
    handleClick: function(element){
        element.find("span").toggle("slow");
    }
}