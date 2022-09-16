// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!

var balls = 0;
var maxBalls = 0;
var ballKids = 0;
var ballBoys = 0;
var ballBoyBonuses = 0;
var ballMen = 0;
var ballFarms = 0;
var ballFactories = 0;
var ballBanks = 0;
var ballEmpires = 0;
var ballWorldControls = 0;
var ballGalacticReigns = 0;
var deezBallGuys = 0;
var ballTimeTravels = 0;
var ballUniversalDominations = 0;
var ballGods = 0;
var ballAfterlives = 0;
var clickDamage = 1;
var clickUpgrades = 0;
var clickUpgrades2 = 0;
var clickUpgrades3 = 0;
var allUpgrades = 0;
var h = 0;
var m = 0;
var s = 0;
s = checkTime(s);
m = checkTime(m);
var pressed = false;
var deleted = false;
var landscape = true;

var level = 0;
var xp = 0;
var barAmount = 0;
var levelAmount = 0;
var levelMultiplier = 1;

var bgNum = 1;
var ranInvert = false;

var prestigeGain = 0;

var url = window.location.pathname;
var page = url.substring(url.lastIndexOf('/') + 1);

var ballKidCostNext = 0;
var ballBoyCostNext = 0;
var ballManCostNext = 0;
var ballFarmCostNext = 0;
var ballFactoryCostNext = 0;
var ballBankCostNext = 0;
var ballEmpireCostNext = 0;
var ballWorldControlCostNext = 0;
var ballGalacticReignCostNext = 0;
var deezBallGuyCostNext = 0;
var ballTimeTravelCostNext = 0;
var ballUniversalDominationCostNext = 0;
var ballGodCostNext = 0;
var ballAfterlifeCostNext = 0;

var ballBoyBonusCostNext = 0;
var clickUpgradeCostNext = 0;
var clickUpgrade2CostNext = 0;
var allUpgradeCostNext = 0;
var clickUpgrade3CostNext = 0;

var ballKidDamage = 0.1;
var ballBoyDamage = 1;
var ballManDamage = 8;
var ballFarmDamage = 47;
var ballFactoryDamage = 260;
var ballBankDamage = 1400;
var ballEmpireDamage = 7800;
var ballWorldControlDamage = 44000;
var ballGalacticReignDamage = 260000;
var deezBallGuyDamage = 1600000;
var ballTimeTravelDamage = 10000000;
var ballUniversalDominationDamage = 65000000;
var ballGodDamage = 430000000;
var ballAfterlifeDamage = 2900000000;
var totalDamage = 0;

var buyAudio = new Audio('audio/buy.wav');
var cantBuyAudio = new Audio('audio/cantbuy.wav');
var clickAudio = new Audio('audio/click.wav');
var menuAudio = new Audio('audio/openmenu.wav');
var music = new Audio('audio/sneakysnitch.mp3');
var audioMuted = false;
var musicMuted = false;
var musicProgress = 0;

var ballBoyUpgradeShown = false;
var clickUpgradeShown = false;
var click2UpgradeShown = false;
var click3UpgradeShown = false;
var allUpgradeShown = false;

music.play();
music.loop=true;

//
CheckBackground();
//

function CheckBackground(){
	if(maxBalls >= 0 && maxBalls <= 9){
		bgNum = 1;
	} else if (maxBalls >= 9 && maxBalls <= 99){
		bgNum = 2;
	} else if (maxBalls >= 99 && maxBalls <= 999){
		bgNum = 3;
	} else if (maxBalls >= 999 && maxBalls <= 9999){
		bgNum = 4;
	} else if (maxBalls >= 9999 && maxBalls <= 99999){
		bgNum = 5;
	} else if (maxBalls >= 99999 && maxBalls <= 999999){
		bgNum = 6;
	} else if (maxBalls >= 999999 && maxBalls <= 9999999){
		bgNum = 7;
	} else if (maxBalls >= 9999999 && maxBalls <= 99999999){
		bgNum = 8;
	} else if (maxBalls >= 99999999 && maxBalls <= 999999999){
		bgNum = 9;
	} else if (maxBalls >= 999999999 && maxBalls <= 9999999999){
		bgNum = 10;
	} else if (maxBalls >= 9999999999 && maxBalls <= 99999999999){
		bgNum = 11;
	} else if (maxBalls >= 99999999999 && maxBalls <= 999999999999){
		bgNum = 12;
	} else if (maxBalls >= 999999999999 && maxBalls <= 9999999999999){
		bgNum = 13;
	} else if (maxBalls >= 9999999999999 && maxBalls <= 99999999999999){
		bgNum = 14;
	} else if (maxBalls >= 99999999999999 && maxBalls <= 999999999999999){
		bgNum = 15;
	} else if (maxBalls >= 999999999999999 && maxBalls <= 9999999999999999){
		bgNum = 16;
	} else if (maxBalls >= 9999999999999999 && maxBalls <= 99999999999999999){
		bgNum = 17;
	} else if (maxBalls >= 99999999999999999 && maxBalls <= 999999999999999999){
		bgNum = 18;
	} else if (maxBalls >= 999999999999999999 && maxBalls <= 9999999999999999999){
		bgNum = 19;
	} else if (maxBalls >= 9999999999999999999 && maxBalls <= 99999999999999999999){
		bgNum = 20;
	} else if (maxBalls >= 99999999999999999999 && maxBalls <= 999999999999999999999){
		bgNum = 21;
	} else if (maxBalls >= 999999999999999999999){
		if(ranInvert == false){
			ranInvert = true;
			setTimeout(function (){
					document.body.style.transition="0.3s"
				document.body.style.filter="invert(1) brightness(3)";
				document.body.style.backgroundImage="url()";
				setTimeout(function (){
					document.body.style.transition="1s"
					document.body.style.filter="invert(0) brightness(1)"
				}, 1000);
			}, 200);
		}
		bgNum = 22;
	}
	document.body.style.backgroundImage = "url('images/balls/"+bgNum+".jpg')";
}

function stopAudio(audio){
		audio.pause();
		audio.currentTime = 0;
}

function toggleAudio(){
	if(!audioMuted){
		clickAudio.muted = true;
		buyAudio.muted = true;
		cantBuyAudio.muted = true;
		menuAudio.muted = true;
		audioMuted = true;
	} else {
		clickAudio.muted = false;
		buyAudio.muted = false;
		menuAudio.muted = false;
		cantBuyAudio.muted = false;
		audioMuted = false;
	}
}

function toggleMusic(){
	if(!musicMuted){
		music.muted = true;
		musicMuted = true;
	} else {
		music.muted = false;
		musicMuted = false;
	}
}

function kFormatter(num) {
    if(num > 999 && num < 999999){
		num = num/1000;
		return round(num) + "k";
	} else if (num < 1000){
		return num;
	} else if (num >= 1000000 && num < 1000000000){
		num = num/1000000;
		return round(num) + "m";
	} else if (num >= 1000000000 && num < 1000000000000){
		num = num/1000000000;
		return round(num) + "b";
	} else if (num >= 1000000000000 && num < 1000000000000000){
		num = num/1000000000000;
		return round(num) + "t";
	} else if (num >= 1000000000000000 && num < 1000000000000000000){
		num = num/1000000000000000;
		return round(num) + " quadrillion";
	} else if (num >= 1000000000000000000 && num < 1000000000000000000000){
		num = num/1000000000000000000;
		return round(num) + " quintillion";
	}else if (num >= 1000000000000000000000){
		num = num/1000000000000000000000;
		return round(num) + " sextillion";
	}
}

function round(input){
    var output = Math.round(input * 100)/100;
	return output;
}

function clickOnButton(){
	if(!pressed){
		stopAudio(clickAudio);
		clickAudio.play();
		GreyOutButtons();
		balls = round(balls + clickDamage);
		xp++;
		UpdateLevel();
		document.getElementById("balls").innerHTML = kFormatter(round(balls));
		document.getElementById('ballsGamble').innerHTML = round(balls);
		document.title = ""+balls+" balls";
		CheckAmounts();
		pressed = true;
		if(maxBalls <= balls){
			maxBalls = balls;
		}
		CheckBackground();
	}
}

function clickAnimation() {
    document.getElementById("amountAdded").innerHTML = "+" + kFormatter(clickDamage);
	var middleBall = document.getElementById("middleBall");
	var amountAdded = document.getElementById("amountAdded");
	var middleBallCounter = document.getElementById("middleBallCounter");

	setTimeout(function (){
		middleBall.style.webkitAnimationName = "growStart";
		middleBall.style.webkitAnimationDuration = "0.08s";
		middleBall.style.webkitAnimationFillMode = "forwards";

		amountAdded.style.webkitAnimationName = "grow2Start";
		amountAdded.style.webkitAnimationDuration = "0.08s";
		amountAdded.style.webkitAnimationFillMode = "forwards";

		middleBallCounter.style.webkitAnimationName = "grow3Start";
		middleBallCounter.style.webkitAnimationDuration = "0.08s";
		middleBallCounter.style.webkitAnimationFillMode = "forwards";
	}, 0);
}

function releaseAnimation() {
	var middleBall = document.getElementById("middleBall");
	var amountAdded = document.getElementById("amountAdded");
	var middleBallCounter = document.getElementById("middleBallCounter");

	setTimeout(function (){
		middleBall.style.webkitAnimationName = "grow";
		middleBall.style.webkitAnimationDuration = "0.3s";
		middleBall.style.webkitAnimationFillMode = "";

		amountAdded.style.webkitAnimationName = "grow2";
		amountAdded.style.webkitAnimationDuration = "0.3s";
		amountAdded.style.webkitAnimationFillMode = "";

		middleBallCounter.style.webkitAnimationName = "grow3";
		middleBallCounter.style.webkitAnimationDuration = "0.3s";
		middleBallCounter.style.webkitAnimationFillMode = "";
	}, 30);
}

function ballClick(number){
    balls = round(balls + number);
	document.getElementById("balls").innerHTML = kFormatter(round(balls));
	document.getElementById('ballsGamble').innerHTML = round(balls);
	document.title = kFormatter(balls) + " balls";
	CheckAmounts();
	GreyOutButtons();
	if(maxBalls <= balls){
		maxBalls = balls;
	}
	CheckBackground();
}

//click every second and run animation
window.setInterval(function(){
	ballClick(totalDamage);

	if(totalDamage >= 0.1){
		xp += 0.5;
		UpdateLevel();
	}

	document.title = kFormatter(balls) + " balls";

	var addedBalls = document.getElementById("addedBalls");
	if(totalDamage >= 1){
		window.setTimeout(function ()
		{
			addedBalls.style.webkitAnimationName = "fadeOut";
			addedBalls.style.webkitAnimationDuration = "0.5s";
			addedBalls.addEventListener("animationend", function(){addedBalls.style.webkitAnimationName = "";}, false);
		}, 0);
	}

}, 1000);


//increase time
window.setInterval(function(){
	s++;
    s = checkTime(s);
	if(s >= 60){
		m++;
		s = 0;
		s = checkTime(s);
		m = checkTime(m);
	}
	if(m >= 60){
		h++;
		m = 0;
		m = checkTime(m);
		h = checkTime(h);
	}
    document.getElementById('time').innerHTML = "played for " + h + ":" + m + ":" + s;
}, 1000);

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function buy(building){
	switch (building){
		case "ballKid":
			var ballKidCost = Math.floor(15 * Math.pow(1.1,ballKids));
			if(balls >= ballKidCost){
				ballKids = ballKids + 1;
				balls = balls - ballKidCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballBoy":
			var ballBoyCost = Math.floor(50 * Math.pow(1.1,ballBoys));
			if(balls >= ballBoyCost){
				ballBoys = ballBoys + 1;
				balls = balls - ballBoyCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "buyBallBoyBonus":
			var ballBoyBonusCost = Math.floor(100 * Math.pow(5,ballBoyBonuses));
			if(ballBoyBonuses < 5){
				if(balls >= ballBoyBonusCost){
					ballBoyBonuses = ballBoyBonuses + 1;
					balls = balls - ballBoyBonusCost;
					UpdateValues();
					ballBoyDamage = ballBoyDamage * 2 + prestigeGain;
					UpdateDamage();
					UpdateCosts();
					stopAudio(buyAudio);
					buyAudio.play();
					xp += 0.5;
					UpdateLevel();
				} else {
					stopAudio(cantBuyAudio);
					cantBuyAudio.play();
				}
			}
		break;

		case "x2Click":
			var clickCost = Math.floor(300 * Math.pow(2,clickUpgrades));
			if(balls >= clickCost){
				clickUpgrades = clickUpgrades + 1
				balls = balls - clickCost;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "clickUpgrade2":
			var clickCost2 = Math.floor(5000 * Math.pow(2,clickUpgrades2));
			if(balls >= clickCost2){
				clickUpgrades2 = clickUpgrades2 + 1;
				balls = balls - clickCost2;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "clickUpgrade3":
			var clickCost3 = Math.floor(500000 * Math.pow(2,clickUpgrades3));
			if(balls >= clickCost3){
				clickUpgrades3 = clickUpgrades3 + 1;
				balls = balls - clickCost3;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballMan":
			var ballManCost = Math.floor(1000 * Math.pow(1.1,ballMen));
			if(balls >= ballManCost){
				ballMen = ballMen + 1;
				balls = balls - ballManCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballFarm":
			var ballFarmCost = Math.floor(13000 * Math.pow(1.1,ballFarms));
			if(balls >= ballFarmCost){
				ballFarms = ballFarms + 1;
				balls = balls - ballFarmCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "allUpgrade":
			var allUpgradeCost = Math.floor(100000 * Math.pow(5,allUpgrades));
			if(allUpgrades < 5){
				if(balls >= allUpgradeCost){
					allUpgrades = allUpgrades + 1;
					balls = balls - allUpgradeCost;
					ballKidDamage = ballKidDamage * 2 + prestigeGain;
					ballBoyDamage = ballBoyDamage * 2 + prestigeGain;
					ballManDamage = ballManDamage * 2 + prestigeGain;
					ballFarmDamage = ballFarmDamage * 2 + prestigeGain;
					ballFactoryDamage = ballFactoryDamage * 2 + prestigeGain;
					ballBankDamage = ballBankDamage * 2 + prestigeGain;
					ballEmpireDamage = ballEmpireDamage * 2 + prestigeGain;
					ballWorldControlDamage = ballWorldControlDamage * 2 + prestigeGain;
					ballGalacticReignDamage = ballGalacticReignDamage * 2 + prestigeGain;
					deezBallGuyDamage = deezBallGuyDamage * 2 + prestigeGain;
					ballTimeTravelDamage = ballTimeTravelDamage * 2 + prestigeGain;
					ballUniversalDominationDamage = ballUniversalDominationDamage * 2 + prestigeGain;
					ballGodDamage = ballGodDamage * 2 + prestigeGain;
					ballAfterlifeDamage = ballAfterlifeDamage * 2 + prestigeGain;
					UpdateValues();
					UpdateDamage();
					UpdateCosts();
					stopAudio(buyAudio);
					buyAudio.play();
					xp += 0.5;
					UpdateLevel();
				} else {
					stopAudio(cantBuyAudio);
					cantBuyAudio.play();
				}
			}
		break;

		case "ballFactory":
			var ballFactoryCost = Math.floor(150000 * Math.pow(1.1,ballFactories));
			if(balls >= ballFactoryCost){
				ballFactories = ballFactories + 1;
				balls = balls - ballFactoryCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballBank":
			var ballBankCost = Math.floor(1400000 * Math.pow(1.1,ballBanks));
			if(balls >= ballBankCost){
				ballBanks = ballBanks + 1;
				balls = balls - ballBankCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballEmpire":
			var ballEmpireCost = Math.floor(20000000 * Math.pow(1.1,ballEmpires));
			if(balls >= ballEmpireCost){
				ballEmpires = ballEmpires + 1;
				balls = balls - ballEmpireCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballWorldControl":
			var ballWorldControlCost = Math.floor(330000000 * Math.pow(1.1,ballWorldControls));
			if(balls >= ballWorldControlCost){
				ballWorldControls = ballWorldControls + 1;
				balls = balls - ballWorldControlCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballGalacticReign":
			var ballGalacticReignCost = Math.floor(1500000000 * Math.pow(1.1,ballGalacticReigns));
			if(balls >= ballGalacticReignCost){
				ballGalacticReigns = ballGalacticReigns + 1;
				balls = balls - ballGalacticReignCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "deezBallGuy":
			var deezBallGuyCost = Math.floor(75000000000 * Math.pow(1.1,deezBallGuys));
			if(balls >= deezBallGuyCost){
				deezBallGuys = deezBallGuys + 1;
				balls = balls - deezBallGuyCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballTimeTravel":
			var ballTimeTravelCost = Math.floor(1000000000000 * Math.pow(1.1,ballTimeTravels));
			if(balls >= ballTimeTravelCost){
				ballTimeTravels = ballTimeTravels + 1;
				balls = balls - ballTimeTravelCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballUniversalDomination":
			var ballUniversalDominationCost = Math.floor(40000000000000 * Math.pow(1.1,ballUniversalDominations));
			if(balls >= ballUniversalDominationCost){
				ballUniversalDominations = ballUniversalDominations + 1;
				balls = balls - ballUniversalDominationCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballGod":
			var ballGodCost = Math.floor(170000000000000 * Math.pow(1.1,ballGods));
			if(balls >= ballGodCost){
				ballGods = ballGods + 1;
				balls = balls - ballGodCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "ballAfterlife":
			var ballAfterlifeCost = Math.floor(2000000000000000 * Math.pow(1.1,ballAfterlives));
			if(balls >= ballAfterlifeCost){
				ballAfterlives = ballAfterlives + 1;
				balls = balls - ballAfterlifeCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
	}
	UpdateValues();
	GreyOutButtons();
	Save();
	if(page != "mobile.html"){
		document.getElementById('upgrades').style.display = "";
		document.getElementById('damage').style.display = "";
		document.getElementById('clickBonusText').style.display = "";
		document.getElementById('line2').style.display = "";

		var leftpanel = document.getElementsByClassName("item2")[0];
		leftpanel.style.padding = "1vw 1.5vw";
	}
}

window.setInterval(function(){

	Save();

}, 5000);

function showMenu() {
	var menu = document.getElementById('menu');
	if(page != "mobile.html"){
		if(menu.style.opacity < "1"){
			menu.style.pointerEvents = "auto";
			menu.style.opacity = "1";
			menu.style.left = "8vw";
			document.getElementById('menuButton').style.cursor = "pointer";
			document.getElementById('menuButton2').style.cursor = "pointer";
			document.getElementById('menuButton3').style.cursor = "pointer";
			document.getElementById('menuButton').disabled = false;
			document.getElementById('menuButton2').disabled = false;
			document.getElementById('menuButton3').disabled = false;
		} else {
			menu.style.left = "6.5vw";
			menu.style.opacity = "0";
			menu.style.pointerEvents = "none";
			document.getElementById('menuButton').style.cursor = "default";
			document.getElementById('menuButton2').style.cursor = "default";
			document.getElementById('menuButton3').style.cursor = "default";
			document.getElementById('menuButton').disabled = true;
			document.getElementById('menuButton2').disabled = true;
			document.getElementById('menuButton3').disabled = true;
		}
	} else {
		if(menu.style.opacity < "1"){
			menu.style.opacity = "1";
			menu.style.height = "30px";
			menu.style.left = "25vw";
			document.getElementById('menuButton').style.cursor = "pointer";
			document.getElementById('menuButton2').style.cursor = "pointer";
			document.getElementById('menuButton3').style.cursor = "pointer";
			document.getElementById('menuButton').disabled = false;
			document.getElementById('menuButton2').disabled = false;
			document.getElementById('menuButton3').disabled = false;
		} else {
			menu.style.opacity = "0";
			menu.style.height = "0px";
			menu.style.left = "17vw";
			document.getElementById('menuButton').style.cursor = "default";
			document.getElementById('menuButton2').style.cursor = "default";
			document.getElementById('menuButton3').style.cursor = "default";
			document.getElementById('menuButton').disabled = true;
			document.getElementById('menuButton2').disabled = true;
			document.getElementById('menuButton3').disabled = true;
		}
	}
}

function showMenuOld() {
	var menu = document.getElementById('menu')
    if(menu.style.display === 'none') {
        menu.style.display = 'inline';
    } else {
        menu.style.display = 'none';
    }
}

function showAllBuildings(){
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	var gambling = document.getElementById("gambling");
	if(buildingMenu.style.width < "100px"){
		buildingMenu.style.height = "73%";
    	buildingMenu.style.width = "80%";
		buildingMenu.style.padding = "15px 15px";

		//close other menu if open
    	upgradeMenu.style.height = "0px";
    	upgradeMenu.style.width = "0px";
		upgradeMenu.style.padding = "0px 0px 0px 0px";

		gambling.style.height = "0px";
		gambling.style.width = "0px";
		gambling.style.padding = "0px 0px 0px 0px";

		prestige.style.height = "0px";
		prestige.style.width = "0px";
		prestige.style.padding = "0px 0px 0px 0px";

		leveldivmobile.style.height = "0px";
		leveldivmobile.style.width = "0px";
		leveldivmobile.style.padding = "0px 0px 0px 0px";

		//show scroll after animation done
		setTimeout(function (){
			buildingMenu.style.overflow = "auto";
		}, 500);
    } else {
    	buildingMenu.style.height = "0px";
    	buildingMenu.style.width = "0px";
		buildingMenu.style.padding = "0px 0px 0px 0px";

		buildingMenu.style.overflow = "hidden";
    }
}

function showAllUpgrades(){
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	var gambling = document.getElementById("gambling");
	if(upgradeMenu.style.width < "100px"){
		upgradeMenu.style.height = "73%";
    	upgradeMenu.style.width = "80%";
		upgradeMenu.style.padding = "15px 15px";

		//close other menu if open
    	buildingMenu.style.height = "0px";
    	buildingMenu.style.width = "0px";
		buildingMenu.style.padding = "0px 0px 0px 0px";

		gambling.style.height = "0px";
		gambling.style.width = "0px";
		gambling.style.padding = "0px 0px 0px 0px";

		prestige.style.height = "0px";
		prestige.style.width = "0px";
		prestige.style.padding = "0px 0px 0px 0px";

		leveldivmobile.style.height = "0px";
		leveldivmobile.style.width = "0px";
		leveldivmobile.style.padding = "0px 0px 0px 0px";

		//show scroll after animation done
		setTimeout(function (){
			buildingMenu.style.overflow = "auto";
		}, 500);

    } else {
    	upgradeMenu.style.height = "0px";
    	upgradeMenu.style.width = "0px";
		upgradeMenu.style.padding = "0px 0px 0px 0px";

		buildingMenu.style.overflow = "hidden";
    }
}

function NewUpgrade(){
	var newUpgrade = document.getElementById("newUpgrade");
	if(newUpgrade.style.width < "100px"){
		newUpgrade.style.width = "42%";
    } else {
		newUpgrade.style.width = "0px";
    }
}

function uploadHover(){
	var uploadLabel = document.getElementById("uploadLabel");
	var uploadIcon = document.getElementById("uploadIcon");
	uploadLabel.style.height = "50px";
    uploadLabel.style.width = "370px";
	uploadIcon.style.top = "10%";
}

function uploadLeave(){
	var uploadLabel = document.getElementById("uploadLabel");
    uploadLabel.style.height = "40px";
    uploadLabel.style.width = "25px";
	uploadIcon.style.top = "5%";
}

function ShowGambling(){
	var gambling = document.getElementById("gambling");
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	if(page != "mobile.html"){

			stopAudio(menuAudio);
			menuAudio.play();
		if(gambling.style.width < "100px"){
			gambling.style.height = "80%";
			gambling.style.width = "20%";
			gambling.style.padding = "15px 15px 15px 15px";

			//show scroll after animation done
			setTimeout(function (){
				gambling.style.overflow = "auto";
			}, 300);

		} else {
			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			gambling.style.overflow = "hidden";
		}
	} else {
		if(gambling.style.width < "100px"){
			gambling.style.height = "73%";
			gambling.style.width = "80%";
			gambling.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			leveldivmobile.style.height = "0px";
			leveldivmobile.style.width = "0px";
			leveldivmobile.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				gambling.style.overflow = "auto";
			}, 500);
		} else {
			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			gambling.style.overflow = "hidden";
		}
	}
}

function ShowLevel(){
	var prestige = document.getElementById("prestige");
	var levelDiv = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	document.getElementById("prestigeLevel").innerHTML = level;
	document.getElementById("prestigeDamage").innerHTML = totalDamage;
	document.getElementById("prestigeGain").innerHTML = round((level * 10000 + ballKids * ballKidDamage + ballMen * ballManDamage + ballFarms * ballFarmDamage + ballFactories * ballFactoryDamage + ballBanks * ballBankDamage + ballEmpires * ballEmpireDamage + ballWorldControls * ballWorldControlDamage+ ballGalacticReigns * ballGalacticReignDamage + deezBallGuys * deezBallGuyDamage + ballTimeTravels * ballTimeTravelDamage + ballUniversalDominations * ballUniversalDominationDamage + ballGods * ballGodDamage + ballAfterlives * ballAfterlifeDamage)/10000000);

	if(page == "mobile.html"){
		if(levelDiv.style.width < "100px"){
			levelDiv.style.height = "73%";
			levelDiv.style.width = "80%";
			levelDiv.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				levelDiv.style.overflow = "auto";
			}, 500);
		} else {
			levelDiv.style.height = "0px";
			levelDiv.style.width = "0px";
			levelDiv.style.padding = "0px 0px 0px 0px";

			levelDiv.style.overflow = "hidden";
		}
	}
}


/*
function ShowChangelog(){
	var changelog = document.getElementById("changelog");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	if(page != "mobile.html"){
			stopAudio(menuAudio);
			menuAudio.play();
		if(changelog.style.width < "100px"){
			changelog.style.height = "80%";
			changelog.style.width = "20%";
			changelog.style.padding = "15px 15px 15px 15px";

			//show scroll after animation done
			setTimeout(function (){
				changelog.style.overflow = "auto";
			}, 300);

		} else {
			changelog.style.height = "0px";
			changelog.style.width = "0px";
			changelog.style.padding = "0px 0px 0px 0px";

			changelog.style.overflow = "hidden";
		}
	} else {
		if(changelog.style.width < "100px"){
			changelog.style.height = "73%";
			changelog.style.width = "80%";
			changelog.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				changelog.style.overflow = "auto";
			}, 500);
		} else {
			changelog.style.height = "0px";
			changelog.style.width = "0px";
			changelog.style.padding = "0px 0px 0px 0px";

			changelog.style.overflow = "hidden";
		}
	}
}

*/

function ShowPrestige(){
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var gambling = document.getElementById("gambling");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	document.getElementById("prestigeLevel").innerHTML = level;
	document.getElementById("prestigeDamage").innerHTML = totalDamage;
	document.getElementById("prestigeGain").innerHTML = round((level * 10000 + ballKids * ballKidDamage + ballMen * ballManDamage + ballFarms * ballFarmDamage + ballFactories * ballFactoryDamage + ballBanks * ballBankDamage + ballEmpires * ballEmpireDamage + ballWorldControls * ballWorldControlDamage+ ballGalacticReigns * ballGalacticReignDamage + deezBallGuys * deezBallGuyDamage + ballTimeTravels * ballTimeTravelDamage + ballUniversalDominations * ballUniversalDominationDamage + ballGods * ballGodDamage + ballAfterlives * ballAfterlifeDamage)/10000000);
	
	if(page != "mobile.html"){
			stopAudio(menuAudio);
			menuAudio.play();
		if(prestige.style.width < "100px"){
			prestige.style.height = "80%";
			prestige.style.width = "20%";
			prestige.style.padding = "15px 15px 15px 15px";

			//show scroll after animation done
		setTimeout(function (){
			prestige.style.whiteSpace = "normal";
		}, 350);

		} else {
			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			prestige.style.whiteSpace = "nowrap";
		}
	} else {
		if(prestige.style.width < "100px"){
			prestige.style.height = "73%";
			prestige.style.width = "80%";
			prestige.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			leveldivmobile.style.height = "0px";
			leveldivmobile.style.width = "0px";
			leveldivmobile.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				prestige.style.overflow = "auto";
			}, 500);
		} else {
			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			prestige.style.overflow = "hidden";
		}
	}
}

function Prestige(){
	var tempGain = round((level * 10000 + ballKids * ballKidDamage + ballMen * ballManDamage + ballFarms * ballFarmDamage + ballFactories * ballFactoryDamage + ballBanks * ballBankDamage + ballEmpires * ballEmpireDamage + ballWorldControls * ballWorldControlDamage+ ballGalacticReigns * ballGalacticReignDamage + deezBallGuys * deezBallGuyDamage + ballTimeTravels * ballTimeTravelDamage + ballUniversalDominations * ballUniversalDominationDamage + ballGods * ballGodDamage + ballAfterlives * ballAfterlifeDamage)/10000000);
	if(tempGain >= 0.01){
		if (confirm("are you sure you want to delete all progress and prestige with a " +  round(tempGain) + " ball bonus?")) {
			deleted = true;
			prestigeGain = prestigeGain + round((level * 10000 + ballKids * ballKidDamage + ballMen * ballManDamage + ballFarms * ballFarmDamage + ballFactories * ballFactoryDamage + ballBanks * ballBankDamage + ballEmpires * ballEmpireDamage + ballWorldControls * ballWorldControlDamage+ ballGalacticReigns * ballGalacticReignDamage + deezBallGuys * deezBallGuyDamage + ballTimeTravels * ballTimeTravelDamage + ballUniversalDominations * ballUniversalDominationDamage + ballGods * ballGodDamage + ballAfterlives * ballAfterlifeDamage)/10000000);
			Save();
			
			deleted = true;
			localStorage.removeItem("save");
			UpdateValues();
			setTimeout(function (){
				location.reload();
			}, 50);
		}
	}
}

//saving
function Save(){
	musicProgress = music.currentTime;
  document.getElementById('saved').innerHTML = "saved";
	setTimeout("document.getElementById('saved').innerHTML = ''", 800)
	var save = {
		'balls': balls,
		'ballKids': ballKids,
		'ballBoys': ballBoys,
		'ballBoyBonuses': ballBoyBonuses,
		'clickUpgrades': clickUpgrades,
		'clickUpgrades2': clickUpgrades2,
		'clickUpgrades3': clickUpgrades3,
		'ballMen':  ballMen,
		'ballFarms': ballFarms,
		'allUpgrades': allUpgrades,
		'ballFactories': ballFactories,
		'ballBanks': ballBanks,
		'ballEmpires': ballEmpires,
		'ballWorldControls': ballWorldControls,
		'ballGalacticReigns': ballGalacticReigns,
		'deezBallGuys': deezBallGuys,
		'ballTimeTravels': ballTimeTravels,
		'ballUniversalDominations': ballUniversalDominations,
		'ballGods': ballGods,
		'ballAfterlives': ballAfterlives,
		'totalDamage': totalDamage,
		'audioMuted': audioMuted,
		'musicMuted': musicMuted,
		'musicProgress': musicProgress,
		'ballBoyUpgradeShown': ballBoyUpgradeShown,
		'clickUpgradeShown': clickUpgradeShown,
		'click2UpgradeShown': click2UpgradeShown,
		'click3UpgradeShown': click3UpgradeShown,
		'allUpgradeShown': allUpgradeShown,
		'level': level,
		'xp': xp,
		'ballKidDamage': ballKidDamage,
		'ballBoyDamage': ballBoyDamage,
		'ballManDamage': ballManDamage,
		'ballFarmDamage': ballFarmDamage,
		'ballFactoryDamage': ballFactoryDamage,
		'ballBankDamage': ballBankDamage,
		'ballEmpireDamage': ballEmpireDamage,
		'ballWorldControlDamage': ballWorldControlDamage,
		'ballGalacticReignDamage': ballGalacticReignDamage,
		'deezBallGuyDamage': deezBallGuyDamage,
		'ballTimeTravelDamage': ballTimeTravelDamage,
		'ballUniversalDominationDamage': ballUniversalDominationDamage,
		'ballGodDamage': ballGodDamage,
		'ballAfterlifeDamage': ballAfterlifeDamage,
		'maxBalls': maxBalls,
		'ranInvert': ranInvert
	}
	localStorage.setItem("save",JSON.stringify(save));
	var prestigeSave = {
		'prestigeGain': prestigeGain,
		's': s,
		'm': m,
		'h': h
	}
	localStorage.setItem("prestigeSave",JSON.stringify(prestigeSave));
}

function DeleteSave(){
	if (confirm('are you sure you want to delete all progress')) {
		deleted = true;
		localStorage.removeItem("save");
		localStorage.removeItem("prestigeSave");
		localStorage.removeItem("timerSave");
		UpdateValues();
		setTimeout(function (){
			location.reload();
		}, 50);
	}
}

function Load(){
	//alert(localStorage.getItem("save"));
	//alert(localStorage.getItem("prestigeSave"));
	if(localStorage.getItem("save") !== null){
		var savegame = JSON.parse(localStorage.getItem("save"));
		if (typeof savegame.balls !== "undefined") balls = savegame.balls;
		if (typeof savegame.ballKids !== "undefined") ballKids = savegame.ballKids;
		if (typeof savegame.ballBoys !== "undefined") ballBoys = savegame.ballBoys;
		if (typeof savegame.ballBoyBonuses !== "undefined") ballBoyBonuses = savegame.ballBoyBonuses;
		if (typeof savegame.clickUpgrades !== "undefined") clickUpgrades = savegame.clickUpgrades;
		if (typeof savegame.clickUpgrades2 !== "undefined") clickUpgrades2 = savegame.clickUpgrades2;
		if (typeof savegame.clickUpgrades3 !== "undefined") clickUpgrades3 = savegame.clickUpgrades3;
		if (typeof savegame.ballMen !== "undefined") ballMen = savegame.ballMen;
		if (typeof savegame.ballFarms !== "undefined") ballFarms = savegame.ballFarms;
		if (typeof savegame.allUpgrades !== "undefined") allUpgrades = savegame.allUpgrades;
		if (typeof savegame.ballFactories !== "undefined") ballFactories = savegame.ballFactories;
		if (typeof savegame.ballBanks !== "undefined") ballBanks = savegame.ballBanks;
		if (typeof savegame.ballEmpires !== "undefined") ballEmpires = savegame.ballEmpires;
		if (typeof savegame.ballWorldControls !== "undefined") ballWorldControls = savegame.ballWorldControls;
		if (typeof savegame.ballGalacticReigns !== "undefined") ballGalacticReigns = savegame.ballGalacticReigns;
		if (typeof savegame.deezBallGuys !== "undefined") deezBallGuys = savegame.deezBallGuys;
		if (typeof savegame.ballTimeTravels !== "undefined") ballTimeTravels = savegame.ballTimeTravels;
		if (typeof savegame.ballUniversalDominations !== "undefined") ballUniversalDominations = savegame.ballUniversalDominations;
		if (typeof savegame.ballGods !== "undefined") ballGods = savegame.ballGods;
		if (typeof savegame.ballAfterlives !== "undefined") ballAfterlives = savegame.ballAfterlives;
		if (typeof savegame.timeSinceStart !== "undefined") timeSinceStart = savegame.timeSinceStart;
		if (typeof savegame.totalDamage !== "undefined") totalDamage = savegame.totalDamage;
		if (typeof savegame.audioMuted !== "undefined") audioMuted = savegame.audioMuted;
		if (typeof savegame.musicMuted !== "undefined") musicMuted = savegame.musicMuted;
		if (typeof savegame.musicProgress !== "undefined") musicProgress = savegame.musicProgress;
		if (typeof savegame.ballBoyUpgradeShown !== "undefined") ballBoyUpgradeShown = savegame.ballBoyUpgradeShown;
		if (typeof savegame.clickUpgradeShown !== "undefined") clickUpgradeShown = savegame.clickUpgradeShown;
		if (typeof savegame.click2UpgradeShown !== "undefined") click2UpgradeShown = savegame.click2UpgradeShown;
		if (typeof savegame.click3UpgradeShown !== "undefined") click2UpgradeShown = savegame.click3UpgradeShown;
		if (typeof savegame.allUpgradeShown !== "undefined") allUpgradeShown = savegame.allUpgradeShown;
		if (typeof savegame.level !== "undefined") level = savegame.level;
		if (typeof savegame.xp !== "undefined") xp = savegame.xp;
		if (typeof savegame.ballKidDamage !== "undefined") ballKidDamage = savegame.ballKidDamage;
		if (typeof savegame.ballBoyDamage !== "undefined") ballBoyDamage = savegame.ballBoyDamage;
		if (typeof savegame.ballManDamage !== "undefined") ballManDamage = savegame.ballManDamage;
		if (typeof savegame.ballFarmDamage !== "undefined") ballFarmDamage = savegame.ballFarmDamage;
		if (typeof savegame.ballFactoryDamage !== "undefined") ballFactoryDamage = savegame.ballFactoryDamage;
		if (typeof savegame.ballBankDamage !== "undefined") ballBankDamage = savegame.ballBankDamage;
		if (typeof savegame.ballEmpireDamage !== "undefined") ballEmpireDamage = savegame.ballEmpireDamage;
		if (typeof savegame.ballWorldControlDamage !== "undefined") ballWorldControlDamage = savegame.ballWorldControlDamage;
		if (typeof savegame.ballGalacticReignDamage !== "undefined") ballGalacticReignDamage = savegame.ballGalacticReignDamage;
		if (typeof savegame.deezBallGuyDamage !== "undefined") deezBallGuyDamage = savegame.deezBallGuyDamage;
		if (typeof savegame.ballTimeTravelDamage !== "undefined") ballTimeTravelDamage = savegame.ballTimeTravelDamage;
		if (typeof savegame.ballUniversalDominationDamage !== "undefined") ballUniversalDominationDamage = savegame.ballUniversalDominationDamage;
		if (typeof savegame.ballGodDamage !== "undefined") ballGodDamage = savegame.ballGodDamage;
		if (typeof savegame.ballAfterlifeDamage !== "undefined") ballAfterlifeDamage = savegame.ballAfterlifeDamage;
		if (typeof savegame.maxBalls !== "undefined") maxBalls = savegame.maxBalls;
		if (typeof savegame.ranInvert !== "undefined") ranInvert = savegame.ranInvert;
	}

	if (localStorage.getItem("prestigeSave") !== null) {
		var prestigeSavegame = JSON.parse(localStorage.getItem("prestigeSave"));
		prestigeGain = prestigeSavegame.prestigeGain;
		s = prestigeSavegame.s;
		m = prestigeSavegame.m;
		h = prestigeSavegame.h;
			document.getElementById('prestigeGainText').innerHTML = kFormatter(round(prestigeGain));
	}

	Save();

  document.getElementById('time').innerHTML = "played for " + h + ":" + m + ":" + s;
	UpdateValues();
	UpdateCosts();
	UpdateLevel();
}

function GreyOutButtons(){
	if(balls < ballKidCostNext){
		document.getElementsByClassName('buyBallKid')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballKidCostNext){
		document.getElementsByClassName('buyBallKid')[1].style.webkitFilter = "";
	}

	if(balls < ballBoyCostNext){
		document.getElementsByClassName('buyBallBoy')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballBoyCostNext){
		document.getElementsByClassName('buyBallBoy')[1].style.webkitFilter = "";
	}

	if(balls < ballManCostNext){
		document.getElementsByClassName('buyBallMan')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballManCostNext){
		document.getElementsByClassName('buyBallMan')[1].style.webkitFilter = "";
	}

	if(balls < ballFarmCostNext){
		document.getElementsByClassName('buyBallFarm')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballFarmCostNext){
		document.getElementsByClassName('buyBallFarm')[1].style.webkitFilter = "";
	}

	if(balls < ballFactoryCostNext){
		document.getElementsByClassName('buyBallFactory')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballFactoryCostNext){
		document.getElementsByClassName('buyBallFactory')[1].style.webkitFilter = "";
	}

	if(balls < ballBankCostNext){
		document.getElementsByClassName('buyBallBank')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballBankCostNext){
		document.getElementsByClassName('buyBallBank')[1].style.webkitFilter = "";
	}

	if(balls < ballEmpireCostNext){
		document.getElementsByClassName('buyBallEmpire')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballEmpireCostNext){
		document.getElementsByClassName('buyBallEmpire')[1].style.webkitFilter = "";
	}

	if(balls < ballWorldControlCostNext){
		document.getElementsByClassName('buyBallWorldControl')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballWorldControlCostNext){
		document.getElementsByClassName('buyBallWorldControl')[1].style.webkitFilter = "";
	}

	if(balls < ballGalacticReignCostNext){
		document.getElementsByClassName('buyBallGalacticReign')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballGalacticReignCostNext){
		document.getElementsByClassName('buyBallGalacticReign')[1].style.webkitFilter = "";
	}

	if(balls < deezBallGuyCostNext){
		document.getElementsByClassName('buyDeezBallGuy')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= deezBallGuyCostNext){
		document.getElementsByClassName('buyDeezBallGuy')[1].style.webkitFilter = "";
	}

	if(balls < ballTimeTravelCostNext){
		document.getElementsByClassName('buyBallTimeTravel')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballTimeTravelCostNext){
		document.getElementsByClassName('buyBallTimeTravel')[1].style.webkitFilter = "";
	}

	if(balls < ballUniversalDominationCostNext){
		document.getElementsByClassName('buyBallUniversalDomination')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballUniversalDominationCostNext){
		document.getElementsByClassName('buyBallUniversalDomination')[1].style.webkitFilter = "";
	}

	if(balls < ballGodCostNext){
		document.getElementsByClassName('buyBallGod')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballGodCostNext){
		document.getElementsByClassName('buyBallGod')[1].style.webkitFilter = "";
	}

	if(balls < ballAfterlifeCostNext){
		document.getElementsByClassName('buyBallAfterlife')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballAfterlifeCostNext){
		document.getElementsByClassName('buyBallAfterlife')[1].style.webkitFilter = "";
	}

	if(balls < ballBoyBonusCostNext){
		document.getElementsByClassName('buyBallBoyBonus')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= ballBoyBonusCostNext){
		document.getElementsByClassName('buyBallBoyBonus')[1].style.webkitFilter = "";
	}

	if(balls < clickUpgradeCostNext){
		document.getElementsByClassName('buyClick')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= clickUpgradeCostNext){
		document.getElementsByClassName('buyClick')[1].style.webkitFilter = "";
	}

	if(balls < clickUpgrade2CostNext){
		document.getElementsByClassName('buyClick2')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= clickUpgrade2CostNext){
		document.getElementsByClassName('buyClick2')[1].style.webkitFilter = "";
	}

	if(balls < clickUpgrade3CostNext){
		document.getElementsByClassName('buyClick3')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= clickUpgrade3CostNext){
		document.getElementsByClassName('buyClick3')[1].style.webkitFilter = "";
	}

	if(balls < allUpgradeCostNext){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "brightness(70%)";
	} else if (balls >= allUpgradeCostNext){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "";
	}
	
	if(ballBoyBonuses >= 5){
		document.getElementsByClassName('buyBallBoyBonus')[1].style.webkitFilter = "brightness(60%)";
		document.getElementById('ballBoyBonusCost').innerHTML = "<b>sold out</b>";
	}
	
	if(allUpgrades >= 5){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "brightness(60%)";
		document.getElementById('allUpgradeCost').innerHTML = "sold out";
	}
}

function CheckAmounts(){
	GreyOutButtons();
	if(balls >= 15 || ballKids >= 1) {
		var classes = document.getElementsByClassName('buyBallKid');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page != "mobile.html"){
			document.getElementById('things').style.display = "";
		}

		if(page != "mobile.html"){
			var leftpanel = document.getElementsByClassName("item1")[0];
			leftpanel.style.padding = "1vw 1.5vw";
		}		  
	}

	if(balls >= 40 || ballBoys >= 1) {
		var classes = document.getElementsByClassName('buyBallBoy');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if (balls >= 80 || ballBoyBonuses >= 1) {
		var classes = document.getElementsByClassName('buyBallBoyBonus');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		if(page != "mobile.html"){
			document.getElementById('upgrades').style.display = "";
			document.getElementById('damage').style.display = "";
			document.getElementById('clickBonusText').style.display = "";
			document.getElementById('line2').style.display = "";
			var leftpanel = document.getElementsByClassName("item2")[0];
			leftpanel.style.padding = "1vw 1.5vw";
		}

		if(page == "mobile.html" && ballBoyUpgradeShown == false){
			NewUpgrade();
			ballBoyUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	
	if (balls >= 30 || prestigeGain > 0){
		document.getElementById('gamblingButton').style.display = "";
	}
	
	if (balls >= 100 || prestigeGain > 0){
		document.getElementById('prestigeButton').style.display = "";
		document.getElementById('prestigeGainDiv').style.display = "";
	}
	
	if(balls >= 200 || clickUpgrades >= 1) {
		var classes = document.getElementsByClassName('buyClick');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && clickUpgradeShown == false){
			NewUpgrade();
			clickUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(balls >= 3000 || clickUpgrades2 >= 1) {
		var classes = document.getElementsByClassName('buyClick2');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && click2UpgradeShown == false){
			NewUpgrade();
			click2UpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(balls >= 300000 || clickUpgrades3 >= 1) {
		var classes = document.getElementsByClassName('buyClick3');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && click3UpgradeShown == false){
			NewUpgrade();
			click3UpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(balls >= 800 || ballMen >= 1) {
		var classes = document.getElementsByClassName('buyBallMan');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
	}
	if(balls >= 11000 || ballFarms >= 1) {
		var classes = document.getElementsByClassName('buyBallFarm');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 80000 || allUpgrades >= 1) {
		var classes = document.getElementsByClassName('buyAllUpgrade');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && allUpgradeShown == false){
			NewUpgrade();
			allUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(balls >= 150000 || ballFactories >= 1) {
		var classes = document.getElementsByClassName('buyBallFactory');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 1100000 || ballBanks >= 1) {
		var classes = document.getElementsByClassName('buyBallBank');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 17000000 || ballEmpires >= 1) {
		var classes = document.getElementsByClassName('buyBallEmpire');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 300000000 || ballWorldControls >= 1) {
		var classes = document.getElementsByClassName('buyBallWorldControl');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 1000000000 || ballGalacticReigns >= 1) {
		var classes = document.getElementsByClassName('buyBallGalacticReign');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 50000000000 || deezBallGuys >= 1) {
		var classes = document.getElementsByClassName('buyDeezBallGuy');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 700000000000 || ballTimeTravels >= 1) {
		var classes = document.getElementsByClassName('buyBallTimeTravel');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 30000000000000 || ballUniversalDominations >= 1) {
		var classes = document.getElementsByClassName('buyBallUniversalDomination');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 140000000000000 || ballGods >= 1) {
		var classes = document.getElementsByClassName('buyBallGod');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(balls >= 1800000000000000 || ballAfterlives >= 1) {
		var classes = document.getElementsByClassName('buyBallAfterlife');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
}

function UpdateValues(){
	CheckBackground();
	levelMultiplier = 1 + level * 0.05;
	var clickUpgradesTemp = 15 * clickUpgrades;
	var clickUpgrades2Temp = 50 * clickUpgrades2;
	if(clickUpgrades3 > 0){
		clickDamage = clickUpgrades3 * (3 * (1 + clickUpgradesTemp + clickUpgrades2Temp));
	} else {
		clickDamage = 1 + clickUpgradesTemp + clickUpgrades2Temp;
	}
	document.getElementById('balls').innerHTML = kFormatter(round(balls));
	document.getElementById('ballsGamble').innerHTML = round(balls);
	document.getElementById('ballKids').innerHTML = ballKids;
	document.getElementById('ballBoys').innerHTML = ballBoys;
	document.getElementById('ballBoyBonuses').innerHTML = ballBoyBonuses;
	document.getElementById('ballBoyBonusTotal').innerHTML = kFormatter(ballBoyDamage);
	document.getElementById('clickDamage').innerHTML = clickDamage;
	document.getElementById('clickUpgrades').innerHTML = clickUpgrades;
	document.getElementById('clickUpgrades2').innerHTML = clickUpgrades2;
	document.getElementById('clickUpgrades3').innerHTML = clickUpgrades3;
	document.getElementById('ballMen').innerHTML = ballMen;
	document.getElementById('ballFarms').innerHTML = ballFarms;
	document.getElementById('allUpgrades').innerHTML = allUpgrades;
	document.getElementById('ballFactories').innerHTML = ballFactories;
	document.getElementById('ballBanks').innerHTML = ballBanks;
	document.getElementById('ballEmpires').innerHTML = ballEmpires;
	document.getElementById('ballWorldControls').innerHTML = ballWorldControls;
	document.getElementById('ballGalacticReigns').innerHTML = ballGalacticReigns;
	document.getElementById('deezBallGuys').innerHTML = deezBallGuys;
	document.getElementById('ballTimeTravels').innerHTML = ballTimeTravels;
	document.getElementById('ballUniversalDominations').innerHTML = ballUniversalDominations;
	document.getElementById('ballGods').innerHTML = ballGods;
	document.getElementById('ballAfterlives').innerHTML = ballAfterlives;
	document.getElementById('addedBalls').innerHTML = "+ " + kFormatter(totalDamage);
	document.getElementById('totalDamage').innerHTML = kFormatter(totalDamage);
	document.getElementById("damageAdded").innerHTML = "+ " + kFormatter(totalDamage) + "/sec";

	document.getElementById('ballKidDamage').innerHTML = kFormatter(round(ballKidDamage));
	document.getElementById('ballBoyBonusTotal').innerHTML = kFormatter(round(ballBoyDamage));
	document.getElementById('ballManDamage').innerHTML = kFormatter(round(ballManDamage));
	document.getElementById('ballFarmDamage').innerHTML = kFormatter(round(ballFarmDamage));
	document.getElementById('ballFactoryDamage').innerHTML = kFormatter(round(ballFactoryDamage));
	document.getElementById('ballBankDamage').innerHTML = kFormatter(round(ballBankDamage));
	document.getElementById('ballEmpireDamage').innerHTML = kFormatter(round(ballEmpireDamage));
	document.getElementById('ballWorldControlDamage').innerHTML = kFormatter(round(ballWorldControlDamage));
	document.getElementById('ballGalacticReignDamage').innerHTML = kFormatter(round(ballGalacticReignDamage));
	document.getElementById('deezBallGuyDamage').innerHTML = kFormatter(round(deezBallGuyDamage));
	document.getElementById('ballTimeTravelDamage').innerHTML = kFormatter(round(ballTimeTravelDamage));
	document.getElementById('ballUniversalDominationDamage').innerHTML = kFormatter(round(ballUniversalDominationDamage));
	document.getElementById('ballGodDamage').innerHTML = kFormatter(round(ballGodDamage));
	document.getElementById('ballAfterlifeDamage').innerHTML = kFormatter(round(ballAfterlifeDamage));
	
	document.getElementById('clickUpgradeDamage').innerHTML = kFormatter(round(clickUpgradesTemp));
	document.getElementById('clickUpgrade2Damage').innerHTML = kFormatter(round(clickUpgrades2Temp));
	document.getElementById('clickUpgrade3Damage').innerHTML = kFormatter(round(clickUpgrades3 * (3 * (1 + clickUpgradesTemp + clickUpgrades2Temp))));
	
	document.getElementById('ballKidTotalDmg').innerHTML = kFormatter(round(ballKids * (prestigeGain + levelMultiplier * ballKidDamage)));
	document.getElementById('ballBoyTotalDmg').innerHTML = kFormatter(round(ballBoys * (prestigeGain + levelMultiplier * ballBoyDamage)));
	document.getElementById('ballManTotalDmg').innerHTML = kFormatter(round(ballMen * (prestigeGain + levelMultiplier * ballManDamage)));
	document.getElementById('ballFarmTotalDmg').innerHTML = kFormatter(round(ballFarms * (prestigeGain + levelMultiplier * ballFarmDamage)));
	document.getElementById('ballFactoryTotalDmg').innerHTML = kFormatter(round(ballFactories * (prestigeGain + levelMultiplier * ballFactoryDamage)));
	document.getElementById('ballBankTotalDmg').innerHTML = kFormatter(round(ballBanks * (prestigeGain + levelMultiplier * ballBankDamage)));
	document.getElementById('ballEmpireTotalDmg').innerHTML = kFormatter(round(ballEmpires * (prestigeGain + levelMultiplier * ballEmpireDamage)));
	document.getElementById('ballWorldControlTotalDmg').innerHTML = kFormatter(round(ballWorldControls * (prestigeGain + levelMultiplier * ballWorldControlDamage)));
	document.getElementById('ballGalacticReignTotalDmg').innerHTML = kFormatter(round(ballGalacticReigns * (prestigeGain + levelMultiplier * ballGalacticReignDamage)));
	document.getElementById('deezBallGuyTotalDmg').innerHTML = kFormatter(round(deezBallGuys * (prestigeGain + levelMultiplier * deezBallGuyDamage)));
	document.getElementById('ballTimeTravelTotalDmg').innerHTML = kFormatter(round(ballTimeTravels * (prestigeGain + levelMultiplier * ballTimeTravelDamage)));
	document.getElementById('ballUniversalDominationTotalDmg').innerHTML = kFormatter(round(ballUniversalDominations * (prestigeGain + levelMultiplier * ballUniversalDominationDamage)));
	document.getElementById('ballGodTotalDmg').innerHTML = kFormatter(round(ballGods * (prestigeGain + levelMultiplier * ballGodDamage)));
	document.getElementById('ballAfterlifeTotalDmg').innerHTML = kFormatter(round(ballAfterlives * (prestigeGain + levelMultiplier * ballAfterlifeDamage)));
}

function UpdateCosts(){
	ballKidCostNext = Math.floor(15 * Math.pow(1.1,ballKids));
	ballBoyCostNext = Math.floor(50 * Math.pow(1.1,ballBoys));
	ballBoyBonusCostNext = Math.floor(100 * Math.pow(5,ballBoyBonuses));
	clickUpgradeCostNext = Math.floor(300 * Math.pow(2,clickUpgrades));
	clickUpgrade2CostNext = Math.floor(5000 * Math.pow(2,clickUpgrades2));
	clickUpgrade3CostNext = Math.floor(500000 * Math.pow(2,clickUpgrades3));
	ballManCostNext = Math.floor(1000 * Math.pow(1.1,ballMen));
	ballFarmCostNext = Math.floor(13000 * Math.pow(1.1,ballFarms));
	allUpgradeCostNext = Math.floor(100000 * Math.pow(5,allUpgrades));
	ballFactoryCostNext = Math.floor(150000 * Math.pow(1.1,ballFactories));
	ballBankCostNext = Math.floor(1400000 * Math.pow(1.1,ballBanks));
	ballEmpireCostNext = Math.floor(20000000 * Math.pow(1.1,ballEmpires));
	ballWorldControlCostNext = Math.floor(330000000 * Math.pow(1.1,ballWorldControls));
	ballGalacticReignCostNext = Math.floor(1500000000 * Math.pow(1.1,ballGalacticReigns));
	deezBallGuyCostNext = Math.floor(75000000000 * Math.pow(1.1,deezBallGuys));
	ballTimeTravelCostNext = Math.floor(1000000000000 * Math.pow(1.1,ballTimeTravels));
	ballUniversalDominationCostNext = Math.floor(40000000000000 * Math.pow(1.1,ballUniversalDominations));
	ballGodCostNext = Math.floor(170000000000000 * Math.pow(1.1,ballGods));
	ballAfterlifeCostNext = Math.floor(2000000000000000 * Math.pow(1.1,ballAfterlives));
	document.getElementById('ballKidCost').innerHTML = kFormatter(ballKidCostNext);
	document.getElementById('ballBoyCost').innerHTML = kFormatter(ballBoyCostNext);
	document.getElementById('ballBoyBonusCost').innerHTML = kFormatter(ballBoyBonusCostNext);
	document.getElementById('clickCost').innerHTML = kFormatter(clickUpgradeCostNext);
	document.getElementById('clickCost2').innerHTML = kFormatter(clickUpgrade2CostNext);
	document.getElementById('clickCost3').innerHTML = kFormatter(clickUpgrade3CostNext);
	document.getElementById('ballManCost').innerHTML = kFormatter(ballManCostNext);
	document.getElementById('ballFarmCost').innerHTML = kFormatter(ballFarmCostNext);
	document.getElementById('allUpgradeCost').innerHTML = kFormatter(allUpgradeCostNext);
	document.getElementById('ballFactoryCost').innerHTML = kFormatter(ballFactoryCostNext);
	document.getElementById('ballBankCost').innerHTML = kFormatter(ballBankCostNext);
	document.getElementById('ballEmpireCost').innerHTML = kFormatter(ballEmpireCostNext);
	document.getElementById('ballWorldControlCost').innerHTML = kFormatter(ballWorldControlCostNext);
	document.getElementById('ballGalacticReignCost').innerHTML = kFormatter(ballGalacticReignCostNext);
	document.getElementById('deezBallGuyCost').innerHTML = kFormatter(deezBallGuyCostNext);
	document.getElementById('ballTimeTravelCost').innerHTML = kFormatter(ballTimeTravelCostNext);
	document.getElementById('ballUniversalDominationCost').innerHTML = kFormatter(ballUniversalDominationCostNext);
	document.getElementById('ballGodCost').innerHTML = kFormatter(ballGodCostNext);
	document.getElementById('ballAfterlifeCost').innerHTML = kFormatter(ballAfterlifeCostNext);
}

function UpdateLevel(){
	var bar = document.getElementById("bar");
	var totalWidth = 30;
	levelAmount = 20 + level * 2;

	//divide the width by amount to get a percent to add to the width
	var barMultiplier = totalWidth/levelAmount;

	//multiply percent by xp to get fill amount
	barAmount = barMultiplier * xp;

	bar.style.width = barAmount + "%";

	//if the width equals the total width level up and reset
	if(barAmount >= totalWidth){
		bar.style.width = "0px";
		barAmount = 0;
		level++;
		xp = 0;
		UpdateValues();
		UpdateDamage();
	}
	document.getElementById('xp').innerHTML = xp;
	document.getElementById('xptonextlevelnumber').innerHTML = levelAmount - xp;
	document.getElementById('levelnumber').innerHTML = level;
	document.getElementById('multipliernumber').innerHTML = round(levelMultiplier) + "x";
}

function UpdateDamage(){
	totalDamage = round((prestigeGain + levelMultiplier) * (ballKidDamage * ballKids + ballBoyDamage * ballBoys + ballManDamage * ballMen + ballFarmDamage * ballFarms + ballFactoryDamage * ballFactories + ballBankDamage * ballBanks + ballEmpireDamage * ballEmpires + ballWorldControlDamage * ballWorldControls + ballGalacticReignDamage * ballGalacticReigns + deezBallGuyDamage * deezBallGuys + ballTimeTravelDamage * ballTimeTravels + ballUniversalDominationDamage * ballUniversalDominations + ballGodDamage * ballGods + ballAfterlifeDamage * ballAfterlives));
}

function CheckMobile(){
	var ratio = window.innerWidth / window.innerHeight;
	if(ratio < 0.745 && page == "index.html"){
		window.location.href = "mobile.html";
	} else if (ratio >= 0.745 && page == "mobile.html"){
		window.location.href = "index.html";
	} else if (ratio < 0.745 && page == ""){
		window.location.href = "mobile.html";
	}
}

function Gamble(level){
	switch(level){
		case 1:
			var randomNumber = Math.floor(Math.random() * 4) + 1;
			var multiplyAmount = 3;
			var percent = "25%";
		break;

		case 2:
			var randomNumber = Math.floor(Math.random() * 8) + 1;
			var multiplyAmount = 6;
		break;

		case 3:
			var randomNumber = Math.floor(Math.random() * 17) + 1;
			var multiplyAmount = 12;
		break;

		case 4:
			var randomNumber = Math.floor(Math.random() * 33) + 1;
			var multiplyAmount = 24;
		break;

		case 5:
			var randomNumber = Math.floor(Math.random() * 100) + 1;
			var multiplyAmount = 50;
		break;
	}
	var x = prompt("enter an amount of balls, total balls: " + balls,balls);
	if(x >= 1){
		if(x <= balls){
			if(confirm("you selected " + x + " balls, are you sure you want to gamble them for a 25% chance to get " + x * multiplyAmount + " back ?")){
				balls = balls - x;
				UpdateValues();
				if(randomNumber == 2){
					alert("you win " + x * multiplyAmount + " balls!");
					x = x * multiplyAmount;
					balls = balls + x;
					UpdateValues();
				} else {
					alert("bad luck, the random number was " + randomNumber + " and you were aiming for 2");
				}
			}
		} else {
			alert("enter an amount under your current balls");
		}
	}
}

function ScissorsPaperRock(pick){
	var x = prompt("enter an amount of balls, total balls: " + balls,balls);
	if(x >= 1){
		if(x <= balls){
			if(confirm("you selected " + x + " balls, are you sure you want to gamble them for a chance to get " + x * 2.5 + " back ?")){
				balls = balls - x;
				UpdateValues();

				var randomNumber = Math.floor(Math.random() * 3) + 1;
				if(randomNumber == 1){
					var botPick = "paper";
				} else if (randomNumber == 2){
					var botPick = "rock";
				} else if (randomNumber == 3){
					var botPick = "scissors";
				}

				if(botPick == "paper" && pick == "scissors"){
					x = x * 2.5;
					alert("you win, the enemy player chose paper and you chose scissors!\n" + x + " balls gained.");
					balls = balls + x;
					UpdateValues();
				} else if (botPick == "rock" && pick == "scissors"){
					alert("you lose, the enemy player chose rock and you chose scissors\n" + x + " balls lost.");
					UpdateValues();
				} else if (botPick == "scissors" && pick == "scissors"){
					alert("tie, the enemy player chose scissors and you chose scissors");
					x = x * 1;
					balls = balls + x;
					UpdateValues();
				}

				if(botPick == "rock" && pick == "paper"){
					x = x * 2.5;
					alert("you win, the enemy player chose rock and you chose paper!\n" + x + " balls gained.");
					balls = balls + x;
					UpdateValues();
				} else if (botPick == "scissors" && pick == "paper"){
					alert("you lose, the enemy player chose scissors and you chose paper\n" + x + " balls lost.");
					x = x * multiplyAmount;
					UpdateValues();
				} else if (botPick == "paper" && pick == "paper"){
					alert("tie, the enemy player chose paper and you chose paper");
					x = x * 1;
					balls = balls + x;
					UpdateValues();
				}

				if(botPick == "scissors" && pick == "rock"){
					x = x * 2.5;
					alert("you win, the enemy player chose scissors and you chose rock!\n" + x + " balls gained.");
					balls = balls + x;
					UpdateValues();
				} else if (botPick == "paper" && pick == "rock"){
					alert("you lose, the enemy player chose paper and you chose rock\n" + x + " balls lost.");
					UpdateValues();
				} else if (botPick == "rock" && pick == "rock"){
					alert("tie, the enemy player chose rock and you chose rock");
					x = x * 1;
					balls = balls + x;
					UpdateValues();
				}
			}
		} else {
			alert("enter an amount under your current balls");
		}
	}
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        event.preventDefault();
		clickAnimation();
		if(!pressed){
			clickOnButton();
			pressed = true;
		}
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
		releaseAnimation();
		pressed = false;
		heldFor = 0;
    }
}

window.onbeforeunload = function(){
	if(!deleted){
		Save();
	}
}

window.addEventListener('resize', function(){
	CheckMobile();
});

CheckMobile();

if(page != "mobile.html"){
	document.getElementById('customImage').onchange = function() {
		var imageFile = this.files[0];
		var url = window.URL.createObjectURL(imageFile);
		document.getElementById("middleBall").src = url;
	}
}

//disable pointer cursor on hidden menu buttons
	document.getElementById('menuButton').style.cursor = "default";
	document.getElementById('menuButton2').style.cursor = "default";
	document.getElementById('menuButton3').style.cursor = "default";

Load();

music.currentTime = musicProgress;

//check if enough balls to unlock things
CheckAmounts();

//fix stupid animation
releaseAnimation();

//mute twice to get value from save
toggleMusic();
toggleMusic();
toggleAudio();
toggleAudio();

//disable clicking on menu by accident before opening
document.getElementById('menuButton').disabled = true;
document.getElementById('menuButton2').disabled = true;
document.getElementById('menuButton3').disabled = true;