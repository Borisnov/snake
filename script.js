var start1 = false;
var x = 5
var x1 = 5
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
var side = 6
var ax = 0
var ax1 = 0
var CountP = 30
var GA;
var iP = 0
var maxMove = 12
var iMove = 0
var iGeneration = 1
var velosity = 6
var pastBal = 0
var show =false;
var data = [
	[0, 0]
];
var g;
// var fitness = 0
// var learningRate = 0.5
// alert(1)
//ìàòðèöà



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
		div1.className = 'name';
		matrix.appendChild(div1);

		for (var a = 0; a < width; a++) {
			var div = document.createElement('div');
			div.className = 'name';
			div1.appendChild(div);
		}
	}
}


function setCell(col, row, val) {
	if(show){
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
}}

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
	GA = new GeneticAlgorithm(CountP, 3);
	GA.reset();	
	GA.createPopulation();
	createMatrix(side, side)
	restart()
	document.getElementById('button').onclick = function() {
		alert(JSON.stringify(GA.Population[iP].toJSON()))
	}
	document.getElementById('kill').onclick = function() {
		killer()
	}
	document.getElementById('show').onclick = function() {
		clearMatrix();
		show=!show;
	}
}