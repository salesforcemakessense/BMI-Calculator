({
	generatePassword : function(component, event, helper) {
        var digits = Math.floor(100000 + Math.random() * 900000);

        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < charactersLength-15; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        component.set("v.password", result);
	}
})