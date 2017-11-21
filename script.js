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
var side = 10
var ax = 0
var ax1 = 0
var CountP = 30
var GA;
var iP = 0
var maxMove = 12
var iMove = 0
var iGeneration = 1
var velosity = 150
var pastBal = 0
var show =true;
var data = [
	[0,0]
];
var g
var best=0;
// var fitness = 0
// var learningRate = 0.5
// alert(1)
//ìàòðèöà
var n11 = {"neurons":[{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":1,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":1,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0.22971834496860663,"old":0.22971834496860663,"activation":0.5571783627934526,"bias":0.07506646866996863,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.15378076822950126,"old":-0.15378076822950126,"activation":0.46163039353829743,"bias":-0.06363906221329285,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0.0004436879322376533,"old":0.0004436879322376533,"activation":0.5001109219812397,"bias":-0.006833018623545565,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0.0016259070739373218,"old":0.0016259070739373218,"activation":0.5004064766789384,"bias":-0.025111515039183338,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0.031088364055870683,"old":0.031088364055870683,"activation":0.5077714651061185,"bias":0.060065519678682316,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-0.06267563287413827,"old":-0.06267563287413827,"activation":0.4843362190301202,"bias":-0.07276357138502308,"layer":"output","squash":"LOGISTIC"}],"connections":[{"from":"0","to":"2","weight":0.15532052073854574,"gater":null},{"from":"0","to":"3","weight":-0.09031207772074445,"gater":null},{"from":"1","to":"2","weight":-0.0006686444399077451,"gater":null},{"from":"1","to":"3","weight":0.0001703717045360411,"gater":null},{"from":"2","to":"4","weight":0.0550229152905273,"gater":null},{"from":"2","to":"5","weight":0.03902386728910251,"gater":null},{"from":"2","to":"6","weight":0.0007789594563708768,"gater":null},{"from":"2","to":"7","weight":-0.014297342165170243,"gater":null},{"from":"3","to":"4","weight":-0.050648466022148744,"gater":null},{"from":"3","to":"5","weight":0.010818541623376093,"gater":null},{"from":"3","to":"6","weight":-0.06371152200782215,"gater":null},{"from":"3","to":"7","weight":0.03910944440289407,"gater":null}]}
var skill_snake=synaptic.Network.fromJSON(n11);


function fitness() {
	//alert(1)
	var inputx = -1
	var inputy = -1
	if (x1 > ax1) inputx = 1
	if (x1 == ax1) inputx = 0
	if (x > ax) inputy = 1
	if (x == ax) inputy = 0

	iMove++
	var du=0;var dr=0;var dl=0;var dd=0;
	// skill_snake= synaptic.Network.fromJSON(GA.mutation(skill_snake.toJSON()))
	var l = skill_snake.activate([inputx, inputy])
	for (var i = 0; i < y.length; i++) {
		var xx=y[i]
		var yy=y1[i]
		if(yy==(x1+1)%side&&xx==x)dd=1;
		if((yy+1)%side==x1&&xx==x)du=1;
		if(xx==(x+1)%side&&yy==x1)dr=1;
		if((xx+1)%side==x&&yy==x1)dl=1;
		if(xx==x&&yy==x1&&iMove>3)killer();
	}////////
	var direct=[du,dl,dd,dr];
	var empty=0;
	for (var i = 0; i < 4; i++) {
		if(direct[i])l[i]=0;
		if(l[i]<=0.5)empty++;
	}
	if(empty==4){//alert('4')
	for (var i = 0; i < 4; i++) {
		if(direct[i]==0){l[i]=1};
	}}
	////////////////
	//if(dr)alert('!!!')
	//document.getElementById("fitness").innerHTML =  iMove + ' |||| ' + iP + ' &&& ' + iGeneration;
	document.getElementById("fitness").innerHTML =  dl+du+dl+dd;
	//var l = GA.Population[iP].activate([inputx, inputy,du,dd,dr,dl])
		// console.log(l);
	if (l[0] > 0.5) {
		turn(37)
	} else if (l[1] > 0.5) {
		turn(38)
	} else if (l[2] > 0.5) {
		turn(39)
	} else if (l[3] > 0.5) {
		turn(40)
	}//turn(39)
	//37 up 38 left 39 dowm 40 right
	if ((iMove > maxMove && iP < CountP)) {
		//killer()
	}
}

function plot_update() {
	var x = iGeneration; // current time
	var y = bal - pastBal
	pastBal = bal
	data.push([x,bal]);
	g.updateOptions({
		'file': data
	});
}

function plot() {
	g = new Dygraph(document.getElementById("div_g"), data, {
		// drawPoints: true,
		// showRoller: true,
		// strokeColor: 'black',
		// axisLineWidth: 1.5,
		// axisLineWidth: 1.5,
		// strokeWidth: 2,
		// labels: ['Generation', 'Apples']
		//labels: ['x', 'A', 'B' ],
          connectSeparatedPoints: true,
          drawPoints: true
	});
	// It sucks that these things aren't objects, and we need to store state in window.

}

function killer() {
	iGeneration++;
	// setCell(x,x1,5)
	setCell(y[0],y1[0],6)
	//alert('geme over')
	//alert("game over")
	clearMatrix()
	if(GA.Population[iP].fitness>best)best=GA.Population[iP].fitness;
	y = []
	y1 = []
	tale();
	eat();
	iP++
	plot_update()
	bal=0;
	iMove = 0
	if (iP == CountP) {
		GA.evolvePopulation()
		iGeneration++
		iP = 0
		plot_update()
		best=0
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
	else if (val == 5)
		cell.style.backgroundColor = '#98FB22';
	else if (val == 6)
		cell.style.backgroundColor = '#984A22';
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
	y.push(x)
	y.push(x)
	y1.push(x1)
	y1.push(x1)
}
//òåëåïîðò
function border() {
	x=(x+side)%side;
	x1=(x1+side)%side
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
	var k=1;
	while(k==1){
		math = Math.floor(Math.random() * side)
		math1 = Math.floor(Math.random() * side)
		k=0;
		for (var i = 0; i < y.length; i++) {
			if (y[i] == math && y1[i] == math1) k=1;
		}if(x==math && x1==math1)k=1
	}
	ax = math
	ax1 = math1
	setCell(math, math1, 2);
}
//ïðîâåðêà (ñúåë ëè åäó)
function eatok() {
	if ((x == math) && (x1 == math1)) {
		//speed++
		setCell(math, math1, 1024);
		setCell(math, math1, 5);
		bal++
		iMove = 0
		GA.Population[iP].fitness++
			document.getElementById('bal').innerHTML = bal + ' б'
		eat()
			y.push(y[y.length-1])
			y1.push(y1[y1.length-1])
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
	//setCell(x, x1, 0);
	// for (var i = 0; i < y.length; i++) {
	// 	setCell(y[i], y1[i], 0)
	// }
	//âûáðàëè êóðñ

	setCell(y[y.length-1], y1[y1.length-1], 0)
	for (var i = y.length - 1; i > 0; i--) {
		y[i] = y[i - 1]
		y1[i] = y1[i - 1]
	}
	y[0] = x
	y1[0] = x1
	course1()
	border()
		//ïðîâåðêè
		//çàæãëè
	setCell(x, x1, 5);
	setCell(y[0],y1[0], 1)
	// for (var i = 0; i < y.length; i++) {
	// setCell(y[i], y1[i], 1)
	// }
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
	document.getElementById('set_speed').onclick = function() {
		velosity=parseInt(document.getElementById('speed').value)
		clearInterval(inter1)
		inter1 = setInterval(move, velosity)
	}
	document.getElementById('show').onclick = function() {
		clearMatrix();
		show=!show;
	}
}