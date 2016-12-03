function Calculate() {
	var p = document.getElementById("calculate").innerHTML;
	var output = eval(p);
	document.getElementById("calculate").innerHTML = output;
}

function GetExpr(num) {
	document.getElementById("calculate").innerHTML += num;
}

function Clear() {
	document.getElementById("calculate").innerHTML = "";
}

function RemoveLatest() {
	var p = document.getElementById("calculate").innerHTML;
	output = p.substring(0, p.length - 1);
	document.getElementById("calculate").innerHTML = output;
}

function Keyevent(e) {
	var x = e.keyCode;
	var y = String.fromCharCode(x);
	if (x === 13) Calculate();          //enter
	else if (x === 43) GetExpr("+");    // +
	else if (x === 45) GetExpr("-");    // -
	else if (x === 42) GetExpr("*");    // *
	else if (x === 47) GetExpr("/");    // /  
	else if (x === 46) GetExpr(".");    // .
	else if (x === 27) Clear();         // esc
	else if (x === 8) RemoveLatest();   // backspace
	else if (!isNaN(y)) GetExpr(y);     // is a number
}