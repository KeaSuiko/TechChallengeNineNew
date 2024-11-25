let img1;
let sprite1;
let sprite2;
let sprite3;
let sprite4;
let otherimages = [];
let numoimages = 5; 
let othercountdown;
let randoImgo;
let asianimages = [];
let numaimages = 5;
let asiancountdown;
let randoImga;
let whiteimages = [];
let numwImages = 5;
let whitecountdown;
let randoImgw;
let nextcountdown;
let image3;
let soundwhite;
let soundasian;
let soundother;


function preload(){
	img1 = loadImage("assetsfolder/backgroundfinal.jpg");
	image3 = loadImage('assetsfolder/Option.jpg');
	soundwhite = loadSound('assetsfolder/white1.wav');
	soundasian = loadSound('assetsfolder/Asian.wav');
	soundother = loadSound('assetsfolder/Other.wav');

	 let cother1 = loadImage('assetsfolder/other1final.JPG'); 
	 let cother2 = loadImage('assetsfolder/other2final.JPG');
	 let cother3 = loadImage('assetsfolder/other3final.png');
	 let cother4 = loadImage('assetsfolder/other4final.png');
	 let cother5 = loadImage('assetsfolder/other5final.png');
	 otherimages = [cother1, cother2, cother3, cother4, cother5];

	 let casian1 = loadImage('assetsfolder/asian1final.png');
	 let casian2 = loadImage('assetsfolder/asian2final.png');
	 let casian3 = loadImage('assetsfolder/asain3final.JPG');
	 let casian4 = loadImage('assetsfolder/asain4final.png');
	 let casian5 = loadImage('assetsfolder/asian5final.png');
	 asianimages = [casian1, casian2, casian3, casian4, casian5];

	 let cwhite1 = loadImage('assetsfolder/white1ginal.png');
	 let cwhite2 = loadImage('assetsfolder/white2final.JPG');
	 let cwhite3 = loadImage('assetsfolder/white3fiinal.png');
	 let cwhite4 = loadImage('assetsfolder/white4other.JPG');
	 let cwhite5 = loadImage('assetsfolder/white5finall.png');
	 whiteimages = [cwhite1, cwhite2, cwhite3, cwhite4, cwhite5];
}

function setup() {
	new Canvas(1200,800);
	displayMode('centered');
	sprite1 = new Sprite();
	sprite1.width = 350;
	sprite1.height = 50;
	sprite1.x = 540;
	sprite1.y = 250;
	sprite1.image = 'assetsfolder/Asian2.jpg';
	sprite1.scale = 0.34; 
	

	sprite2 = new Sprite();
	sprite2.width = 400;
	sprite2.height = 100;
	sprite2.x = 540;
	sprite2.y = 355;
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
	sprite4.x = 700;
	sprite4.y = 375;
	sprite4.image = 'assetsfolder/Next.jpg'
	sprite4.scale = 0.25;

}

function draw() {
	background(img1);
	text("Please Select The Race You Most identify With:", 330, 185, 500, 100)
	textSize(20);

	if (othercountdown > 0) {
		image(randoImgo, 600, 300, 400, 400);
		play(soundother);
		othercountdown--;
	}

	if (whitecountdown > 0) {
		image(randoImgw,700, 10, 500, 500);
		play(soundwhite);
		whitecountdown--;
		
	}

	if (asiancountdown > 0) {
		image(randoImga, 100, 250, 500, 500);
		play(soundasian)
		asiancountdown--;
	}

	if (nextcountdown > 0) {image(image3, 355, 400, 500, 200);
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
