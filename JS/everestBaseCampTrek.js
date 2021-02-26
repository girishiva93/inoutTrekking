console.log("Hello");

window.addEventListener("scroll",bringmenu);

function bringmenu(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>500){
        document.getElementById("discount-offer-table").style.display = 'none';
        // document.getElementById("explain-trip").style.display='none';
    }
    else{
        document.getElementById("discount-offer-table").style.display = 'block';
        // document.getElementById("explain-trip").style.display='block';
    }
}