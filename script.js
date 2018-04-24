
var operations = [];
var memory = 0;
var input = 0;
var enterDec = false;
var tens = 1;

function displ(tx) {
	//add any formatting here
	document.getElementById("display").innerHTML = tx;
}

function numberButton(btn) {
	input *= tens;
	if (enterDec) tens *= 10;
	if (input < 1000000000) {
		input = ((input * 10) + btn )/ tens;
	}
	return input;
}

function operationButton(op) {
	operations.push(input);
	operations.push(op);
	displ(input);
	input = 0;
	enterDec = false;
	tens = 1;
}

function execute() {
	var num = operations[0];
	operations.push(input);
	for (x=1; x <= operations.length; x = x + 2){
		switch(operations[x]) {
			case '+':
				num = num + operations[x+1];
				break;
			case '-':
				num = num - operations[x+1];
				break;
			case '*':
				num = num * operations[x+1];
				break;
			case '/':
				if (operations[x+ 1] == 0) displ("Err: Division by Zero");
				else num = num / operations[x +1];
				break;
		}
	}
	input = num;
	enterDec = false;
	tens = 1;
	operations = [];
	displ(num);
}

function ce_btn() {
	input = 0;
	enterDec = false;
	tens = 1;
	displ(input);
}

function c_btn() {
	input = 0;
	enterDec = false;
	tens = 1;
	operations = [];
	displ(input);
}

function recipricator() {
	if (input != 0) input = 1 / input;
	displ(input);
}

function percent() {
	input /= 100;
	displ(input);
}

function dec_btn() {
	if (!enterDec) {
		enterDec = true;
	}
}