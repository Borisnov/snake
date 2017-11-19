var start1 = false;
var x = 10
var x1 = 10
var y = []
var y1 = []
var math
var math1
var course = 'right';
var right = true
var left = true
var down = true
var up = true
var bal = 0
var inter
var speed = 0
var side = 20
var ax = 0
var ax1 = 0
var CountP = 25
var GA;
var iP = 0
var maxMove = 40
var iMove = 0
var iGeneration = 1
var velosity = 10
var pastBal = 0
var data = [
	[0, 0]
];
var g;
// var fitness = 0
// var learningRate = 0.5
// alert(1)
//ìàòðèöà

//var n11 = {"neurons":[{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":1,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":1,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.04398377296578486,"old":-0.04398377296578486,"activation":0.4890058291195981,"bias":0.022766176883003763,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.06723301171238709,"old":-0.06723301171238709,"activation":0.48319807570900236,"bias":0.0591075061933061,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.024997158604135455,"old":-0.024997158604135455,"activation":0.49375103573848783,"bias":-0.0017557691897117946,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.08952241266418913,"old":-0.08952241266418913,"activation":0.4776343318668858,"bias":-0.08985109879696254,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.17893292090990487,"old":-0.17893292090990487,"activation":0.45538574082695826,"bias":-0.012663862365507166,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.05142865499928287,"old":-0.05142865499928287,"activation":0.4871456693339142,"bias":0.013658766926788912,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.16818207922925232,"old":-0.16818207922925232,"activation":0.45805330620661433,"bias":-0.07306917583498083,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.0012292344510971883,"old":-0.0012292344510971883,"activation":0.49969269142592143,"bias":-0.032968833697719996,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0.001141865700347744,"old":0.001141865700347744,"activation":0.5002854663940697,"bias":0.06974626420789662,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0.08195124208219934,"old":0.08195124208219934,"activation":0.5204763518611311,"bias":-0.0058887867828963,"layer":"output","squash":"LOGISTIC"}],"connections":[{"from":"0","to":"2","weight":-0.08506948879349002,"gater":null},{"from":"0","to":"3","weight":-0.05541370282144305,"gater":null},{"from":"0","to":"4","weight":-0.06562805802764302,"gater":null},{"from":"0","to":"5","weight":0.034416655651252265,"gater":null},{"from":"0","to":"6","weight":-0.11269825799871186,"gater":null},{"from":"0","to":"7","weight":0.018934706383800598,"gater":null},{"from":"1","to":"2","weight":0.018319538944701397,"gater":null},{"from":"1","to":"3","weight":-0.07092681508425014,"gater":null},{"from":"1","to":"4","weight":0.04238666861321935,"gater":null},{"from":"1","to":"5","weight":-0.03408796951847885,"gater":null},{"from":"1","to":"6","weight":-0.05357080054568583,"gater":null},{"from":"1","to":"7","weight":-0.08402212830987238,"gater":null},{"from":"2","to":"8","weight":0.00500801671909175,"gater":null},{"from":"2","to":"9","weight":0.08687269965298469,"gater":null},{"from":"2","to":"10","weight":0.0034458944656540445,"gater":null},{"from":"2","to":"11","weight":-0.011012419034307275,"gater":null},{"from":"3","to":"8","weight":-0.13808835672890862,"gater":null},{"from":"3","to":"9","weight":-0.10209701952322482,"gater":null},{"from":"3","to":"10","weight":0.09677466733067319,"gater":null},{"from":"3","to":"11","weight":0.024898957238824296,"gater":null},{"from":"4","to":"8","weight":-0.020285495430418313,"gater":null},{"from":"4","to":"9","weight":0.05993126432723264,"gater":null},{"from":"4","to":"10","weight":-0.0483088364166167,"gater":null},{"from":"4","to":"11","weight":0.07020406248788782,"gater":null},{"from":"5","to":"8","weight":-0.022990958650431992,"gater":null},{"from":"5","to":"9","weight":0.004717852567320824,"gater":null},{"from":"5","to":"10","weight":-0.06689469795830028,"gater":null},{"from":"5","to":"11","weight":0.03986863679451841,"gater":null},{"from":"6","to":"8","weight":-0.01999316118670712,"gater":null},{"from":"6","to":"9","weight":0.006501226805773423,"gater":null},{"from":"6","to":"10","weight":-0.04809328155274886,"gater":null},{"from":"6","to":"11","weight":0.04397299093850909,"gater":null},{"from":"7","to":"8","weight":-0.0015107769351989622,"gater":null},{"from":"7","to":"9","weight":0.007772475778390589,"gater":null},{"from":"7","to":"10","weight":-0.08076856568112374,"gater":null},{"from":"7","to":"11","weight":0.015320687201584304,"gater":null}]}
//var skill_snake = synaptic.Network.fromJSON(n11);

function fitness() {
	var inputx = -1
	var inputy = -1
	if (x1 > ax1) inputx = 1
	if (x1 == ax1) inputx = 0
	if (x > ax) inputy = 1
	if (x == ax) inputy = 0

	document.getElementById("fitness").innerHTML =  iMove + ' |||| ' + iP + ' &&& ' + iGeneration;
	iMove++
	// skill_snake= synaptic.Network.fromJSON(GA.mutation(skill_snake.toJSON()))
	// var l = skill_snake.activate([inputx, inputy])
	var l = GA.Population[iP].activate([inputx, inputy])
		// console.log(l);
	if (l[0] > 0.5) {
		turn(37)
	} else if (l[1] > 0.5) {
		turn(38)
	} else if (l[2] > 0.5) {
		turn(39)
	} else if (l[3] > 0.5) {
		turn(40)
	}
	if ((iMove > maxMove && iP < CountP)) {
		killer()

	}
}

function plot_update() {
	var x = iGeneration; // current time
	var y = bal - pastBal
	pastBal = bal
	data.push([x, y]);
	g.updateOptions({
		'file': data
	});
}

function plot() {
	g = new Dygraph(document.getElementById("div_g"), data, {
		drawPoints: true,
		showRoller: true,
		strokeColor: 'black',
		axisLineWidth: 1.5,
		axisLineWidth: 1.5,
		strokeWidth: 2,
		labels: ['Generation', 'Apples']
	});
	// It sucks that these things aren't objects, and we need to store state in window.

}

function killer() {
	iP++
	iMove = 0
	if (iP == CountP) {
		GA.evolvePopulation()
		iGeneration++
		iP = 0
		plot_update()
	}


}

function createMatrix(length, width) {
	var matrix = document.getElementById('matrix');
	for (var i = 0; i < length; i++) {
		var div1 = document.createElement('div');
		div1.className = 'name1';
		matrix.appendChild(div1);

		for (var a = 0; a < width; a++) {
			var div = document.createElement('div');
			div.className = 'name';
			div1.appendChild(div);
		}
	}
}


function setCell(col, row, val) {
	var matrix = document.getElementById('matrix');
	var cell1 = matrix.children[col];
	var cell = cell1.children[row];

	if (val == 1)
		cell.style.backgroundColor = '#98FB98';
	else if (val == 2)
		cell.style.background = 'url(img/3.png)';
	else if (val == 0)
		cell.style.backgroundColor = 'transparent';
	else if (val == 1024)
		cell.style.background = '';
}

function clearMatrix() {
	for (var i = 0; i < side; i++) {
		for (var a = 0; a < side; a++) {
			setCell(i, a, 1024)
		}
	}
}

//ñîçäàíèå õâîñòà
function tale() {
	for (var i = 0; i < 2; i++) {
		y.push(x)
		y1.push(x1 - i)
	}
}
//òåëåïîðò
function border() {
	for (var i = 0; i < side; i++) {
		if (x < 0) x = side - 1;
		if (x > side - 1) x = 0;
		if (x1 < 0) x1 = side - 1;
		if (x1 > side - 1) x1 = 0;
	}
}
//âûáîð íàïðàâëåíèÿ
function course1() {
	if ((course == 'right') && (right)) x1++
		if ((course == 'left') && (left)) x1--
			if ((course == 'down') && (down)) x++
				if ((course == 'up') && (up)) x--
}
//ñîçäàíèå åäû
function eat() {
	math = Math.floor(Math.random() * side)
	math1 = Math.floor(Math.random() * side)
	if ((math != x) && (math1 != x1)) {
		for (var i = 0; i < y.length; i++) {
			if ((y[i] == math) && (y1[i] == math1)) eat();
		};
	} else eat()
	ax = math
	ax1 = math1
	setCell(math, math1, 2);
}
//ïðîâåðêà (ñúåë ëè åäó)
function eatok() {
	if ((x == math) && (x1 == math1)) {
		//speed++
		setCell(math, math1, 1024);
		setCell(math, math1, 1);
		bal++
		iMove = 0
		GA.Population[iP].fitness++
			document.getElementById('bal').innerHTML = bal + ' б'
		eat()
			//y.push(1)
			//y1.push(1)
	}
}
//ñêîðîñòíîé ðåæèì

//ïðîâóðêà íà êîíåö èãðû
function over() {
	for (var i = 0; i < y.length; i++) {
		if ((y[i] == x) && (y1[i] == x1)) {
			alert('Game over')
			clearInterval(interval)
			clearInterval(inter1)
		}
	}
}
//äâèæåíèå
function move() {

	//ïîãàñèëè
	fitness()
	setCell(x, x1, 0);
	for (var i = 0; i < y.length; i++) {
		setCell(y[i], y1[i], 0)
	}
	//âûáðàëè êóðñ
	for (var i = y.length - 1; i > 0; i--) {
		y[i] = y[i - 1]
	}
	for (var i = y1.length - 1; i > 0; i--) {
		y1[i] = y1[i - 1]
	}
	y[0] = x
	y1[0] = x1
		//ïðîâåðêè
	course1()
	border()
		//çàæãëè
	setCell(x, x1, 1);
	for (var i = 0; i < y.length; i++) {
		setCell(y[i], y1[i], 1)
	}
	eatok()
		//ïðîâåðêè
		///////////////////////////////////////////////////////////// over()
}
//óïðàâëåíèå êëàâèøàìè
function turn(keyCode) {
	if ((keyCode == 37) && (left)) {
		course = 'left'
			// right = false											
		left = true
		down = true
		up = true
	} else if ((keyCode == 38) && (up)) {
		course = 'up'
		right = true
		left = true
			// down = false
		up = true
	} else if ((keyCode == 39) && (right)) {
		course = 'right'
		right = true
			// left = false
		down = true
		up = true
	} else if ((keyCode == 40) && (down)) {
		course = 'down'
		right = true
		left = true
		down = true
			// up = false
	}
}
document.onkeydown = function(e) {
		var keyCode = e.keyCode;
		turn(keyCode)
	}
	//ñòàðò çìåéêè
function restart() {
	if (start1) {
		clearMatrix()
		clearInterval(interval)
		clearInterval(inter1)
		x = 10
		x1 = 10
		y = []
		y1 = []
		math
		math1
		course = 'right';
		right = true
		left = true
		down = true
		up = true
		bal = 0
		inter
		speed = 0
			// createMatrix(20, 20)
		tale();
		eat();

		inter1 = setInterval(move, 200);
		// interval = setInterval(eatok, 10);
	} else {
		start1 = true;
		tale();
		eat();
		inter1 = setInterval(move, velosity);
		//interval = setInterval(eatok, 1);
	}

}

window.onload = function() {
	// alert(1)
	plot();
	GA = new GeneticAlgorithm(CountP, 4);
	GA.reset();	
	GA.createPopulation();
	createMatrix(side, side)
	restart()
	document.getElementById('button').onclick = function() {
		alert(JSON.stringify(GA.Population[iP].toJSON()))
	}
	document.getElementById('kill').onclick = function() {
		// iP++
		killer()
	}
}