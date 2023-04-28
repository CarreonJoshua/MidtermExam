let quantity = 1;
let price = 4236;
let ship = 90;

function addQuan() {
	if(quantity >= 10) {
		document.getElementById('quant1').innerHTML = 10;
		alert("Warning: Stocks are limited to " + quantity + ". Please purchase lower.")
	}
	else {
		let a = quantity + 1;
		quantity = a
		document.getElementById('quant1').innerHTML = quantity;
		document.getElementById('quant2').innerHTML = quantity;

		let nprice = quantity * price
		let total = nprice + ship

		document.getElementById('nprice').innerHTML = nprice;
		document.getElementById('total').innerHTML = total;
		document.getElementById('ship').innerHTML = ship;

		document.getElementById('finalquant').innerHTML = quantity;
		document.getElementById('finaltotal').innerHTML = total;
		document.getElementById('finalship').innerHTML = ship;
	}
}

function subQuan() {
		let a = quantity - 1;
		quantity = a
		document.getElementById('quant1').innerHTML = quantity;
		document.getElementById('quant2').innerHTML = quantity;

		let nprice = quantity * price
		let total = nprice + ship

		document.getElementById('total').innerHTML = total;
		document.getElementById('ship').innerHTML = ship;
		document.getElementById('nprice').innerHTML = nprice;

		document.getElementById('finalquant').innerHTML = quantity;
		document.getElementById('finaltotal').innerHTML = total;
		document.getElementById('finalship').innerHTML = ship;
}

function show1() {
	document.getElementById('box1').style.display = 'none';
	document.getElementById('box2').style.display = 'flex';
}

function show2() {
	document.getElementById('box2').style.display = 'none';
	document.getElementById('box4').style.display = 'flex';
}