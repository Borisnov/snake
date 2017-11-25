var start1 = false;
var x = 4
var x1 = 4
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
var common_bal = 0
var show =true;
var data = [
	[0,0,0]
];
var plus=0;
var g;
var best=0;
var moves=0;
var after=9;
var umnosit=20;
var water=[];
var water1=[]
var path=[]
eat_move=0;
var grid=[];

function fitness() {
	iMove++
	eat_move++;
	// if(iMove>1000)alert(iMove)
	// alert(eat_move+' ! '+path.length+'     '+path)
	var xx=path[eat_move][0]
	var xx1=path[eat_move][1]
	if (xx==x&&norm(xx1+1)==x1) turn(37)
	if (xx==x&&xx1==norm(1+x1)) turn(39)
	if (norm(xx+1)==x&&xx1==x1) turn(38)
	if (xx==norm(x+1)&&xx1==x1) turn(40)
}

function create_path(){
	// var st=[]
	// tri=1
	// for (var i = 0; i < 20; i++) {
	// 	st.push(tri)
	// 	tri*=3
	// 	// plot_update(0,tri)
	// }
	// alert(7)
	// var grid=[]
	for (var i = 0; i < side; i++){ grid[i]=[0,0,0,0,0,0,0,0,0,0];}
	for (var i = 0; i < y.length; i++){grid[y[i]][y1[i]]=y.length-i;}
	grid[x][x1]=y.length+1	
	grid[ax][ax1]=-1;
	water=[[[x,x1]]]
	var t=-1
	var c=0
	// alert(grid)
	// var prev=0;
	// var copy=0
	var i=0
	// var len=0;
	// var tupic=0;
	while(t==-1){
		if(c>40)killer()
		// if(water.length>25000)alert('water.length = '+water.length)
		i=water.length-1
		while (i>=0) {
			water.push(water[i].slice())
			water.push(water[i].slice())
			water.push(water[i].slice())
			water[i].push([norm(water[i][c][0]+1),water[i][c][1]])
			water[water.length-1].push([norm(water[i][c][0]-1),water[i][c][1]])
			water[water.length-2].push([water[i][c][0],norm(water[i][c][1]+1)])
			water[water.length-3].push([water[i][c][0],norm(water[i][c][1]-1)])
			i--;
			if(water.length>50000)killer()
		}
		// for (var i = 0; i < water.length; i++) {
		// 	alert(water[i])
		// }
		i=0;
		// plot_update(water.length)
		while(i<water.length){
			var w=water.length
			if(grid[water[i][c+1][0]][water[i][c+1][1]]>c+1) {pop1(i);} 
			if(i<water.length){
			for (var k = 0; k <= c; k++){
				if(water[i][k][0]==water[i][c+1][0]&&water[i][k][1]==water[i][c+1][1])
					{pop1(i);break;}
			}}
			if(water.length==w)i++;
		}
		i=0
		while (i<water.length)
			if(grid[water[i][c+1][0]][water[i][c+1][1]]==-1) {
				if(test(water[i])){t=i; break}else{pop1(i)}
			}else i++;
		c++;
		// if(water.length>25000)alert(water.length)
	}
	plot_update(0,c)
	// alert('out')
	path=water[t]
}
function test(arr){
	var t=-1
	var i=0
	var prev=0
	// alert(arr)
	water1=[arr.slice()];
	// var c=0
	var c=water1[0].length-1
	var c1=c+7
	while(t==-1){
		prev = water1.length
		// if(water.length>25000)alert('water.length = '+water.length)
		i=water1.length-1
		while (i>=0) {
			water1.push(water1[i].slice())
			water1.push(water1[i].slice())
			water1.push(water1[i].slice())
			water1[i].push([norm(water1[i][c][0]+1),water1[i][c][1]])
			water1[water1.length-1].push([norm(water1[i][c][0]-1),water1[i][c][1]])
			water1[water1.length-2].push([water1[i][c][0],norm(water1[i][c][1]+1)])
			water1[water1.length-3].push([water1[i][c][0],norm(water1[i][c][1]-1)])
			i--;
			// if(water1.length>50000)killer()
		}
		i=0;
		// plot_update(water1.length)
		// alert(water1.length)
		while(i<water1.length){
			var w=water1.length
			if(grid[water1[i][c+1][0]][water1[i][c+1][1]]>c+1) {pop2(i);} 
			if(i<water1.length){
			for (var k = 0; k <= c; k++){
				if(water1[i][k][0]==water1[i][c+1][0]&&water1[i][k][1]==water1[i][c+1][1])
					{pop2(i);break;}
			}}
			if(water1.length==w)i++;
		}
		// alert(water1.length)
		c++;
		if(c==c1)t=1
		if(water1.length == prev)t=0
	} 
	return t
}
function norm(x){
	return (x+side)%side
}
function plot_update(r,r1) {
	// var x = iGeneration; // current time
	plus++;
	common_bal+=bal
	// moves=moves+iMove;
	// data.push([plus,bal,common_bal/plus]);
	data.push([plus,r,r1]);
	g.updateOptions({
		'file': data
	});//iMove=0;
}
function pop1(a) {
	for (var i = a; i < water.length-1; i++) {
		water[i]=water[i+1].slice()
	}
	water.pop()
}
function pop2(a) {
	for (var i = a; i < water1.length-1; i++) {
		water1[i]=water1[i+1].slice()
	}
	water1.pop()
}
function plot() {
	g = new Dygraph(document.getElementById("div_g"), data, {
	
		//labels: ['x', 'A', 'B' ],
          connectSeparatedPoints: true,
          drawPoints: true
	});

}

function killer() {
	// if(bal<20)alert(bal)
	eat_move=0
	iGeneration++;
	setCell(y[0],y1[0],6)
	setCell(x,x1,5)
	// alert('game over')
	// alert("game over")
	clearMatrix()
	// if(GA.Population[iP].fitness>best)best=GA.Population[iP].fitness; y = []
	y1 = []
	y = []
	x=4
	x1=4
	// alert(1)
	tale();
	eat();
	// alert(2)
	iP++
	// plot_update(bal)
	moves=0
	bal=0;
	iMove = 0
	create_path()
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
	// if(col>=side||col<0)alert(col)
	var matrix = document.getElementById('matrix');
	var cell1 = matrix.children[col];
	var cell = cell1.children[row];

	if (val == 1)
		cell.style.backgroundColor = '#FFFF00';
	else if (val == 5)
		cell.style.backgroundColor = '#123456';
	else if (val == 6)
		cell.style.backgroundColor = '#FF4444';
	else if (val == 2)
		cell.style.background = 'url(img/3.png)';
	// else if (val == 0)
	// 	cell.style.backgroundColor = 'transparent';
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
	y.push(x-1)
	y.push(x-2)
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
	// plot_update();
	var k=1;
	// if(y.length>=side*side-2)killer()
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
	if(y.length>85)alert(y.length)
	if ((x == math) && (x1 == math1)) {
		//speed++
		setCell(math, math1, 1024);
		setCell(math, math1, 5);
		bal++
		eat_move=0;
		//iMove = 0
		// GA.Population[iP].fitness++ 
		document.getElementById('bal').innerHTML = bal + ' б'
		eat()
		// if(y.length==0)alert(0)
			y.push(y[y.length-1])
			y1.push(y1[y1.length-1])
		create_path()
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

	//if(y.length!=y1.length)alert('smal')
	setCell(y[y.length-1], y1[y.length-1], 1024)
	// setCell(x, x1, 1024)
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
		create_path()

		inter1 = setInterval(move, 200);
		// interval = setInterval(eatok, 10);
	} else {
		start1 = true;
		tale();
		eat();
		create_path()
		inter1 = setInterval(move, velosity);
		//interval = setInterval(eatok, 1);
	}

}

window.onload = function() {
	// alert(1)
	plot();
	// GA = new GeneticAlgorithm(CountP, 3);
	// GA.reset();	
	// GA.createPopulation(); 
	createMatrix(side, side)
	restart()
	document.getElementById('button').onclick = function() {
		// alert(JSON.stringify(GA.population[iP].toJSON())) // alert()
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