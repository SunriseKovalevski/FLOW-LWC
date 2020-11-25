({
    saveAcc : function(component, event) {
        var newAcc = component.get("v.acc");
        var action = component.get("c.saveAccount");
        action.setParams({
            "acc":newAcc
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accId", response.getReturnValue().Id);
                component.set("v.acc", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})