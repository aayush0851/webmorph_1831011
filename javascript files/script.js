var counter = false;

document.getElementById("img1x").style.backgroundImage="url('/assets/grid1.jpg')";

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
        searchBox();
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
    window.open('./index_2.html');
}

function redirectback(){
    window.open('./index_1.html');
}


document.getElementById('hamBurger').addEventListener("click", toggle);
document.getElementById('close').addEventListener("click", toggle);
document.getElementById('magnify').addEventListener("click", searchBox);
var arrClass = document.getElementsByClassName('hideSearch');


