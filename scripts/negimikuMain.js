let img_logo;//title logo
let bg_leef;//openning img
let bg_lacquer;//White and little noise
let img_bg;//Blue sky and white ground
let img_miku;//miku(player)
let img_leek;
let img_get;//get effect
let img_finish;//finish_effect
let img_goldleek;
let img_p_leek;//poisonus_leek
let img_can;//speed_can
let arrow;
let pause_mark;

const filename = "Negimiku_ranking.txt";

let stateName;    //string
let title;        //stateName = title
let select;       //stateName = select
let explain1;     //stateName = explain1
let explain2;     //stateName = explain2
let game;         //stateName = game
let pauseState;   //stateName = pauseState
let ending;       //stateName = ending
let ranking;      //stateName = ranking

function preload() {
	//img_load
	img_logo = loadImage("img/negimiku_logo_500.png");
	bg_leef = loadImage("img/25351.png");
	bg_lacquer = loadImage("img/18693.png");
	img_bg = loadImage("img/bg.png");
	img_miku = loadImage("img/hatyune.png");// https://prcm.jp/album/rintyannau/pic/15721204
	img_leek = loadImage("img/leek.png");
	img_get = loadImage("img/get_mid.png");
	img_finish = loadImage("img/finish.png");
	img_goldleek = loadImage("img/gold_leek.png");
	img_p_leek = loadImage("img/poisonus_leek.png");
	img_can = loadImage("img/speedUPCanRe.png");
	arrow = loadImage("img/arrow.png");
	pause_mark = loadImage("img/pause.png");

	//file_load(score_ranking)
	score_checker = loadStrings(filename);
}

function setup() {
	createCanvas(600, 600);
	background(255);
	textFont("Comic Sans MS");
	textAlign(CENTER, TOP);

	x = width / 2;
	y = height - 50;
	pSpeed = 3.0;

	ex_count = 0;
	isEx2 = false

	leekX = new Array(15).fill(0).map((_, i) => 25 + i * 40);//x_array
	leekY = new Array(15).fill(0).map((_, i) => -50);//y_array
	leekObjectSpeed = 5.0;

	goldLeekX = width / 3 + width / 5;
	goldLeekY = -250;
	gyValue = -250;
	goldLeekSpeed = 3.0;

	poisonusLeekX = 50;
	poisonusLeekY = -50;
	poisonusLeekSpeed = 0;
	poisonusLeekInc = 0;

	speedCanX = width + 50;
	speedCanY = height - 70;

	c = 0;
	cnt = 0;
	millis_time = 20;

	t = 3100;

	pause_time = 3100;
	pause_checker = false;
	pause_time = 0;

	score = 0;
	pluspoint = 0;

	stateName = "title";
}

function draw() {
	background(255);

	if (stateName == "title") {
		title = new Title();
		title.drawState();
		title.decideState();
	}

	if (stateName == "select") {
		select = new DifficultySelect();
		select.drawState();
		select.decideState();
	}

	if (stateName == "explain1") {
		explain1 = new Ex1();
		explain1.drawState();
		explain1.decideState();
	}

	if (stateName == "explain2") {
		explain2 = new Ex2();
		explain2.drawState();
		explain2.decideState();
	}

	if (stateName == "game") {
		game = new Game();
		game.drawState();
		game.decideState();
	}

	if (stateName == "pauseState") {
		pauseState = new Pause();
		pauseState.drawState();
		pauseState.decideState();
	}

	if (stateName == "ending") {
		ending = new Ending();
		ending.drawState();
		ending.decideState();
	}

	if (stateName == "ranking") {
		ranking = new Ranking();
		ranking.drawState();
		ranking.decideState();
	}
}
