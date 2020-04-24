var counter = false;

function toggle(){
    if(counter===false){
        document.getElementById('toggle-bar').style.height="100vh";
        document.getElementById('togList').style.display="block";
        document.getElementById('close').style.display="block";
        counter=true;
    }
    else{
        document.getElementById('toggle-bar').style.height="0vh";
        document.getElementById('togList').style.display="none";
        document.getElementById('close').style.display="none";
        counter=false;
        arrClass[0].style.display="none";
    }
}

var magCount = false;

function searchBox(){
    if(magCount===false){
        arrClass[0].style.display="block";
        magCount=true;
    }
    else{
        arrClass[0].style.display="none";
        magCount=false;
    }
}

function redirect(){
    window.open('https://aayush0851.github.io/webmorph_1831011/index_2.html');
}



function redirectback(){
    window.open('https://aayush0851.github.io/webmorph_1831011/index.html');

}

function wish(){
    alert('Added to wishlist');
};

function play(){
    alert('Will be played in a while');
};

function langC(){
    alert('Language Changed');
}


document.getElementById('hamBurger').addEventListener("click", toggle);
document.getElementById('close').addEventListener("click", toggle);
document.getElementById('magnify').addEventListener("click", searchBox);
var arrClass = document.getElementsByClassName('hideSearch');

