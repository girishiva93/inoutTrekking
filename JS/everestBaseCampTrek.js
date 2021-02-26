console.log("Hello");

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//         // $('.discount-offer-price').hide();
//         $('discount-offer-price').removeClass("discount-offer-price");
//         document.getElementsByClassName("discount-offer-price").style.display = "none";
//     } else {
//         $('discount-offer-price').hideClass("discount-offer-price");
//         document.getElementsByClassName("discount-offer-price").style.display = "block";
//     }
//  });
// $(window).trigger('scroll');

// var hideData = document.getElementsByClassName("discount-offer-price");
// window.addEventListener("scroll",function(){
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrollTop>100){
//         hideData.style.display = 'block';
//     }
//     else{
//         hideData.style.display = 'none';
//     }
// })

window.addEventListener("scroll",bringmenu);

function bringmenu(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>500){
        document.getElementById("discount-offer-table").style.display = 'none';
    }
    else{
        document.getElementById("discount-offer-table").style.display = 'block';
    }
}