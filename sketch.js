let ball;
let img1;
let sprite1;
let sprite2;
let sprite3;
let sprite4;
let Wrong;
let Liar
let image2;
let image3;

function preload(){
	img1 = loadImage("assetsfolder/Back.jpg");
	Wrong = loadImage('assetsfolder/Wrong.jpg');
	Liar = loadImage('assetsfolder/Liar.jpg');
	image2 = loadImage('assetsfolder/Faceless.jpg');
	image3 = loadImage('assetsfolder/Option.jpg');
}

function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');
	sprite1 = new Sprite();
	sprite1.width = 350;
	sprite1.height = 50;
	sprite1.x = 540;
	sprite1.y = 200;
	sprite1.image = 'assetsfolder/Asian2.jpg';
	sprite1.scale = 0.34; 
	

	sprite2 = new Sprite();
	sprite2.width = 400;
	sprite2.height = 100;
	sprite2.x = 540;
	sprite2.y = 250;
	sprite2.image = 'assetsfolder/White2.jpg';
	sprite2.scale = 0.25;

	sprite3 = new Sprite();
	sprite3.width = 350;
	sprite3.height = 50;
	sprite3.x = 540;
	sprite3.y = 300;
	sprite3.image = 'assetsfolder/Other2.jpg';
	sprite3.scale = 0.25;

	sprite4 = new Sprite();
	sprite4.width = 200;
	sprite4.height = 50;
	sprite4.x = 725;
	sprite4.y = 320;
	sprite4.image = 'assetsfolder/Next.jpg'
	sprite4.scale = 0.25;

}

function draw() {
	background(img1);
	text("Please Select The Race You Most identify With:", 300, 150, 350, 50)
	textSize(20);

	if (sprite1.mouse.pressing()) image(Wrong, 100, 250, 600, 400);
	if (sprite2.mouse.pressing()) image(Liar, 700, 10, 600, 400); 
	if (sprite3.mouse.pressing()) image(image2, 400, 345, 300, 300);
	if (sprite4.mouse.pressing()) image(image3, 400, 345, 500, 200);
//working so far
//i can't get it to push to gethub 


	//image(img1,0,0,windowWidth,windowHeight);

	//if (mouse.presses(sprite1)) {
		//text("Nooo", 400, 400);
		//textSize (73);
	//}
}
