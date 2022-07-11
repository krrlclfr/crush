var clicks = 0;

function Init(){
    
}
function no(){

    clicks = clicks += 1

    if(clicks === 4) {
        document.getElementById('crush-message').innerHTML = "I crush back mo na din kasi ako! &#128532;";

    }
    if(clicks === 5){
        document.getElementById('crush-message').innerHTML = "";
    }

    if(clicks === 9){
        document.getElementById('crush-message').innerHTML = "Ah bahala ka basta ako mahal pa din kita!";
    }

    if(clicks === 10){
        document.getElementById('crush-message').innerHTML = "";
    }

    if(clicks === 14){
        document.getElementById('crush-message').innerHTML = "Malay mo tayo talaga &#128525;";
    }


    var boxs = document.getElementById("no");
    spaceH = screen.height - boxs.clientHeight
    spaceW = screen.width - boxs.clientWidth

    boxs.style.top = Math.round(Math.random() * 500) + "px";
    boxs.style.left = Math.round(Math.random() * 300) + "px";


}

function yes(){
    var yesMessage = document.getElementById("yes-message"); 
    yesMessage.classList.add('show-message');
      
}