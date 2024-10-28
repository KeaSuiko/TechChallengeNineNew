let ball;
let img1;
let sprite1;
let sprite2;
let sprite3;
let sprite4;

function preload(){
	img1 =loadImage("assets/Back.jpg")
  }

function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');
	sprite1 = new Sprite();
	sprite1.width = 350;
	sprite1.height = 50;
	sprite1.x = 540;
	sprite1.y = 200;
	sprite1.image = 'assets/Asain2.jpg';
	sprite1.scale = 0.25; 
	

	sprite2 = new Sprite();
	sprite2.width = 350;
	sprite2.height = 50;
	sprite2.x = 540;
	sprite2.y = 250;
	sprite2.image = 'assets/White2.jpg';
	sprite2.scale = 0.25;

	sprite3 = new Sprite();
	sprite3.width = 350;
	sprite3.height = 50;
	sprite3.x = 540;
	sprite3.y = 300;
	sprite3.image = 'assets/Other2.jpg';
	sprite3.scale = 0.25;

	sprite4 = new Sprite();
	sprite4.width = 100;
	sprite4.height = 30;
	sprite4.x = 725
	sprite4.y = 320

}

function draw() {
	background(img1);
	text("Please Select The Race You Most identify With:", 300, 150, 350, 50)
	textSize(20);

	if (sprite1.mouse.pressing()) console.log ("press!");
	if (sprite2.mouse.pressing()) console.log ("press White!");
	if (sprite3.mouse.pressing()) console.log ("press other!");

	//image(img1,0,0,windowWidth,windowHeight);

	//if (mouse.presses(sprite1)) {
		//text("Nooo", 400, 400);
		//textSize (73);
	//}
}
