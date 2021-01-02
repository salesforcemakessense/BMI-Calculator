({
	calculateBMI : function(component, event, helper) {
		var height = component.get("v.height");
        var weight = component.get("v.weight");
        if(height && weight){
            var bmiValue = (weight * 10000)/(height*height);
            var cmpTarget = component.find('bmiText');
            if(bmiValue <= 24.9){
                $A.util.removeClass(cmpTarget, 'slds-text-color_destructive');
                $A.util.addClass(cmpTarget, 'slds-text-color_success');
            }
            else{
                $A.util.removeClass(cmpTarget, 'slds-text-color_success');
                $A.util.addClass(cmpTarget, 'slds-text-color_destructive');
            }
            component.set("v.bmiValue", bmiValue.toFixed(2));
        }
        else{
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "message": "Fill in the relevant inputs",
                "type": "error"
            });
            toastEvent.fire();
        }
	}
})