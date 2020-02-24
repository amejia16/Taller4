describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
	
        randomEvent(10, randomEventSelection());
    })
})
function randomEventSelection() {
        return Math.floor(Math.random() * (5 - 1)) + 1;
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

//function randomEvent(monkeysLeft, ranEve) {
//	ranEve = 1;
//	if(ranEve == 1){
//		var monkeysLeft = monkeysLeft;
//    		if(monkeysLeft > 0) {
//        		cy.get('a').then($links => {
//            			var randomLink = $links.get(getRandomInt(0, $links.length));
//            			if(!Cypress.dom.isHidden(randomLink)) {
//                			cy.wrap(randomLink).click({force: true});
//                			monkeysLeft = monkeysLeft - 1;
//            			}
//            			cy.wait(1000);
//            			randomClick(monkeysLeft, 1);
//        		});
//    		} 
//	}else if(ranEve == 2){
//
//	}else if(ranEve == 3){
//
//	}else if(ranEve == 4){
//
//	}
//
//
//}


function randomEvent(monkeysLeft, ranEve) {
	console.log(ranEve);
	if(ranEve == 1){
		randomClick(monkeysLeft);
	}else if(ranEve == 2){
		randomInputs(monkeysLeft);
	}else if(ranEve == 3){
		randomButtons(monkeysLeft);
	}else if(ranEve == 4){
		randomRandom(monkeysLeft);
	}
	
	function randomClick(monkeysLeft) {


	    var monkeysLeft = monkeysLeft;
	    if(monkeysLeft > 0) {
	        cy.get('a').then($links => {
	            var randomLink = $links.get(getRandomInt(0, $links.length));
	            if(!Cypress.dom.isHidden(randomLink)) {
	                cy.wrap(randomLink).click({force: true});
	                monkeysLeft = monkeysLeft - 1;
	            }
	            cy.wait(1000);
	            randomClick(monkeysLeft);
	        });
	    }   
	}
	
	function randomInputs(monkeysLeft) {
		console.log(monkeysLeft);

	    var monkeysLeft = monkeysLeft;
	    if(monkeysLeft > 0) {
	        cy.get('input').then($inputs => {
	            var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
	            //if(!Cypress.dom.isHidden(randomInput)) {
	                cy.wrap(randomInput).click({force: true}).type("P");
	                monkeysLeft = monkeysLeft - 1;
	            //}
	            cy.wait(1000);
	            randomInputs(monkeysLeft);
	        });
	    }   
	}
	
	function randomButtons(monkeysLeft) {
		console.log(monkeysLeft);
	    var monkeysLeft = monkeysLeft;
	    if(monkeysLeft > 0) {
	        cy.get('button').then($btns => {
	            var randomBtn = $btns.get(getRandomInt(0, $btns.length));
	            if(!Cypress.dom.isHidden(randomBtn)) {
	                cy.wrap(randomBtn).click({force: true});
	                monkeysLeft = monkeysLeft - 1;
	            }
	            cy.wait(1000);
	            randomButtons(monkeysLeft);
	        });
	    }   
	}
	
	function randomRandom(monkeysLeft) {
		console.log(monkeysLeft);
	    var monkeysLeft = monkeysLeft;
	    if(monkeysLeft > 0) {
	    	var temp = getRandomInt(1, 4);
	    	if(temp == 1){
	    		randomClick(1);
	    	}else if(temp == 2){
	    		randomInputs(1);
	    	}else if(temp == 3){
	    		randomButtons(1);
	    	}
	    	monkeysLeft = monkeysLeft - 1;
	    	cy.wait(1000);
	    	randomRandom(monkeysLeft)
	    }   
	}

}