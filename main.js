//vars
var money = 0; 
var click = 1; 
dps = 0 

function update(){
    dps = ports*1 + lans*10 + router*100
    money += dps; 
    document.getElementById("_ps").innerHTML = "per second: $" + dps;   
    document.getElementById("c").innerHTML = "$" + money; 
    setTimeout(() => {
        update();
    }, 1000);
}

function add(){
    money += click; 
    document.getElementById("c").innerHTML = "$" + money ; 
}

var upPrice = 10; 
function upgradeClick(){
    if (money >= upPrice){
        //upgrade
        money -= upPrice; 
        document.getElementById("c").innerHTML = "$" + money; 
        click += 1; 
        //adjust price
        upPrice += 5; 
        document.getElementById("upgrade").innerHTML = "Upgrade Hack(" + click + "): $" + upPrice;
    }
}

var opPrice = 50
var ports = 0
function openPort(){
    if (money >= opPrice){
        //upgrade
        money -= opPrice; 
        document.getElementById("c").innerHTML = "$" + money; 
        ports ++; 
        //adjust price
        opPrice += 10; 
        document.getElementById("op").innerHTML = "Hack Port(" + ports + "): $" + opPrice;
    }
}

var lnPrice = 200
var lans = 0
function openLAN(){
    if (money >= lnPrice){
        //upgrade
        money -= lnPrice; 
        
        document.getElementById("c").innerHTML = "$" + money; 
        //adjust price
        lans++; 
        lnPrice += 50; 
        document.getElementById("ln").innerHTML = "Hack LAN(" + lans + "): $" + lnPrice;
    }
}

var rtPrice = 2500
var router = 0
function openRouter(){
    if (money >= rtPrice){
        //upgrade
        money -= rtPrice; 
        document.getElementById("ln").innerHTML = "Hack LAN(" + lans + "): $" + lnPrice;
        document.getElementById("c").innerHTML = "$" + money; 
        //adjust price
        router++; 
        rtPrice += 200; 
        document.getElementById("rt").innerHTML = "Hack Router(" + router + "): $" + rtPrice;
    }
}

function promotePort(){
    if (ports >= 10){
        ports -= 10; 
        lans++; 
        document.getElementById("op").innerHTML = "Hack Port(" + ports + "): $" + opPrice;
        document.getElementById("ln").innerHTML = "Hack LAN(" + lans + "): $" + lnPrice;
    }
}

function promoteLAN(){
    if (lans >= 10){
        lans -= 10; 
        router++; 
        document.getElementById("ln").innerHTML = "Hack LAN(" + lans + "): $" + lnPrice;
        document.getElementById("rt").innerHTML = "Hack Router(" + router + "): $" + rtPrice;
    }
}


update(); 