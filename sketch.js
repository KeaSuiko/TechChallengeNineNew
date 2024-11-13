let img1;
let sprite1;
let sprite2;
let sprite3;
let sprite4;
let otherimages = [];
let numoimages = 3; 
let othercountdown;
let randoImgo;
let asianimages = [];
let numaimages = 3;
let asiancountdown;
let randoImga;
let whiteimages = [];
let numwImages = 3;
let whitecountdown;
let randoImgw;
let nextcountdown;
let image3;
let soundwhite;


function preload(){
	img1 = loadImage("assetsfolder/Back.jpg");
	image3 = loadImage('assetsfolder/Option.jpg');
	soundwhite = loadSound('assetsfolder/white1.wav');

	 let cother1 = loadImage('assetsfolder/otherred.jpg'); 
	 let cother2 = loadImage('assetsfolder/otherred2.jpg');
	 let cother3 = loadImage('assetsfolder/cother3.png');
	 otherimages = [cother1, cother2, cother3];

	 let casian1 = loadImage('assetsfolder/asianred.jpg');
	 let casian2 = loadImage('assetsfolder/casian2.png');
	 let casian3 = loadImage('assetsfolder/casian3.png');
	 asianimages = [casian1, casian2, casian3];

	 let cwhite1 = loadImage('assetsfolder/whitered.jpg');
	 let cwhite2 = loadImage('assetsfolder/cwhite2.png');
	 let cwhite3 = loadImage('assetsfolder/cwhite3.png');
	 whiteimages = [cwhite1, cwhite2, cwhite3];
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

	if (othercountdown > 0) {
		image(randoImgo, 400, 345, 300, 300);
		othercountdown--;
	}

	if (whitecountdown > 0) {
		image(randoImgw,700, 10, 600, 400);
		play(soundwhite);
		whitecountdown--;
		
	}

	if (asiancountdown > 0) {
		image(randoImga, 100, 250, 400, 400);
		asiancountdown--;
	}

	if (nextcountdown > 0) {image(image3, 400, 345, 500, 200);
		nextcountdown--;
	}
	
	if (sprite1.mouse.released()) {asiancountdown = 180;
		randoImga = random(asianimages);
	}
		
	if (sprite2.mouse.released()) {whitecountdown = 180;
		randoImgw = random(whiteimages);
		} 

	if (sprite3.mouse.released()) {othercountdown = 180;
		randoImgo = random(otherimages);
	}

	if (sprite4.mouse.released()) {nextcountdown = 180;}

}
